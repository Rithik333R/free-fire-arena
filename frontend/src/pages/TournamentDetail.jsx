// frontend/src/pages/TournamentDetail.jsx

import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {
  getTournamentById,
  getTournamentSlots,
  joinTournament,
} from "../api/tournaments.api";

const REVEAL_POLL_WINDOW_MS = 20 * 60 * 1000;
const REVEAL_POLL_INTERVAL_MS = 30 * 1000;

// ── Helpers ────────────────────────────────────────────────────────────────

const CATEGORY_LABELS = {
  BATTLE_ROYALE: "Battle Royale",
  CLASH_SQUAD: "Clash Squad",
  LONE_WOLF: "Lone Wolf",
};

const STATUS_CONFIG = {
  LIVE: {
    label: "LIVE",
    classes:
      "bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse",
  },
  UPCOMING: {
    label: "UPCOMING",
    classes: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
  },
  AWAITING_RESULTS: {
    label: "RESULTS PENDING",
    classes: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  },
  COMPLETED: {
    label: "COMPLETED",
    classes: "bg-white/10 text-white/50 border border-white/10",
  },
  CANCELED: {
    label: "CANCELED",
    classes: "bg-red-900/20 text-red-600 border border-red-900/30",
  },
};

function formatCountdown(ms) {
  if (ms <= 0) return { h: 0, m: 0, s: 0, label: "Starting soon" };
  const totalSeconds = Math.floor(ms / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return { h, m, s, label: null };
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function getTeamSize(matchType) {
  if (!matchType) return null;
  const match = matchType.match(/^(\d+)v\d+$/i);
  if (!match) return null;
  return parseInt(match[1], 10);
}

// ── Sub-components ─────────────────────────────────────────────────────────

function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status] ?? {
    label: status,
    classes: "bg-white/10 text-white/40 border border-white/10",
  };
  return (
    <span
      className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${config.classes}`}
    >
      {config.label}
    </span>
  );
}

function CountdownDisplay({ startTime }) {
  const [countdown, setCountdown] = useState({
    h: 0, m: 0, s: 0, label: null,
  });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(startTime).getTime() - Date.now();
      setCountdown(formatCountdown(diff));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [startTime]);

  if (countdown.label) {
    return (
      <p className="text-[#1DB954] font-black uppercase tracking-widest text-sm">
        {countdown.label}
      </p>
    );
  }

  return (
    <div className="flex items-center gap-1">
      {[
        { value: countdown.h, unit: "H" },
        { value: countdown.m, unit: "M" },
        { value: countdown.s, unit: "S" },
      ].map(({ value, unit }, i, arr) => (
        <div key={unit} className="flex items-end gap-0.5">
          <span className="text-white font-black text-2xl tabular-nums">
            {pad(value)}
          </span>
          <span className="text-white/30 text-[10px] font-black uppercase mb-1">
            {unit}
          </span>
          {i < arr.length - 1 && (
            <span className="text-white/20 text-lg font-black mb-0.5 mx-0.5">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function RoomCredentials({ credentialsRevealed, roomId, roomPassword }) {
  if (!credentialsRevealed) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
        <div className="text-2xl mb-3">🔒</div>
        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
          Room credentials will be revealed 15 minutes before match start
        </p>
      </div>
    );
  }

  if (!roomId) {
    return (
      <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 text-center">
        <div className="text-2xl mb-3">⏳</div>
        <p className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">
          Credentials not set yet — check back shortly
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#1DB954]/5 border border-[#1DB954]/20 rounded-2xl p-6 flex flex-col gap-4">
      <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-widest">
        🔓 Room Credentials Revealed
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-black/40 rounded-xl p-4">
          <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-2">
            Room ID
          </p>
          <p className="text-white font-black text-xl font-mono tracking-wider">
            {roomId}
          </p>
        </div>
        <div className="bg-black/40 rounded-xl p-4">
          <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-2">
            Password
          </p>
          <p className="text-white font-black text-xl font-mono tracking-wider">
            {roomPassword}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Payout Preview ─────────────────────────────────────────────────────────

/**
 * PayoutPreview — informational card showing reward structure.
 * Displayed on the tournament detail page below the meta grid.
 * Does not affect any calculation — display only.
 */
function PayoutPreview({ tournament }) {
  const {
    matchCategory,
    matchType,
    prizePool,
    winnerPrize,
    perKillReward,
    entryFee,
  } = tournament;

  const hasBRRewards =
    matchCategory === "BATTLE_ROYALE" &&
    (winnerPrize > 0 || perKillReward > 0);

  const teamSize =
    matchCategory === "CLASH_SQUAD" ? getTeamSize(matchType) : null;
  const prizePerPlayer =
    teamSize && prizePool ? Math.floor(prizePool / teamSize) : null;

  const exampleKills = 5;
  const exampleWinTotal = hasBRRewards
    ? (winnerPrize ?? 0) + exampleKills * (perKillReward ?? 0)
    : null;
  const exampleKillOnly = hasBRRewards
    ? 3 * (perKillReward ?? 0)
    : null;

  return (
    <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 mb-6">
      <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-4">
        Payout Structure
      </h2>

      {/* ── Battle Royale ──────────────────────────────────────────── */}
      {matchCategory === "BATTLE_ROYALE" && (
        <div className="flex flex-col gap-3">
          {hasBRRewards ? (
            <>
              {/* Reward breakdown */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/40 rounded-xl p-3">
                  <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
                    Winner Prize
                  </p>
                  <p className="text-[#1DB954] font-black text-base">
                    ₹{(winnerPrize ?? 0).toLocaleString("en-IN")}
                  </p>
                  <p className="text-white/20 text-[9px] mt-0.5">
                    Placement #1 only
                  </p>
                </div>
                <div className="bg-black/40 rounded-xl p-3">
                  <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
                    Per Kill
                  </p>
                  <p className="text-[#1DB954] font-black text-base">
                    ₹{(perKillReward ?? 0).toLocaleString("en-IN")}
                  </p>
                  <p className="text-white/20 text-[9px] mt-0.5">
                    All players
                  </p>
                </div>
              </div>

              {/* Entry fee */}
              {entryFee > 0 && (
                <div className="flex items-center justify-between text-[11px] border-t border-white/5 pt-3">
                  <span className="text-white/30 font-black uppercase tracking-widest text-[10px]">
                    Entry Fee
                  </span>
                  <span className="text-white font-black">
                    ₹{entryFee.toLocaleString("en-IN")}
                  </span>
                </div>
              )}

              {/* Examples */}
              <div className="bg-black/20 rounded-xl p-3 flex flex-col gap-1.5">
                <p className="text-white/20 text-[9px] font-black uppercase tracking-widest mb-1">
                  Examples
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-[11px]">
                    Win + {exampleKills} kills
                  </span>
                  <span className="text-[#1DB954] text-[11px] font-black">
                    ₹{exampleWinTotal?.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-[11px]">
                    3 kills only
                  </span>
                  <span className="text-[#1DB954] text-[11px] font-black">
                    ₹{exampleKillOnly?.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-[11px]">
                    0 kills
                  </span>
                  <span className="text-white/20 text-[11px] font-black">
                    ₹0
                  </span>
                </div>
              </div>
            </>
          ) : (
            // Pre-D+ BR tournament — no reward fields configured.
            <div className="flex items-center justify-between">
              <span className="text-white/30 text-[11px] font-black uppercase tracking-widest">
                Prize Pool
              </span>
              <span className="text-[#1DB954] font-black text-base">
                ₹{prizePool?.toLocaleString("en-IN")}
              </span>
            </div>
          )}
        </div>
      )}

      {/* ── Clash Squad ────────────────────────────────────────────── */}
      {matchCategory === "CLASH_SQUAD" && (
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black/40 rounded-xl p-3">
              <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
                Prize Pool
              </p>
              <p className="text-white font-black text-base">
                ₹{prizePool?.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="bg-black/40 rounded-xl p-3">
              <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
                Per Winner
              </p>
              <p className="text-[#1DB954] font-black text-base">
                {prizePerPlayer
                  ? `₹${prizePerPlayer.toLocaleString("en-IN")}`
                  : "—"}
              </p>
              {teamSize && (
                <p className="text-white/20 text-[9px] mt-0.5">
                  Split {teamSize} ways ({matchType})
                </p>
              )}
            </div>
          </div>

          {entryFee > 0 && (
            <div className="flex items-center justify-between text-[11px] border-t border-white/5 pt-3">
              <span className="text-white/30 font-black uppercase tracking-widest text-[10px]">
                Entry Fee
              </span>
              <span className="text-white font-black">
                ₹{entryFee.toLocaleString("en-IN")}
              </span>
            </div>
          )}

          <div className="bg-black/20 rounded-xl px-3 py-2.5">
            <p className="text-white/30 text-[10px]">
              Winning team shares the full prize pool equally.
              Losing team receives nothing.
            </p>
          </div>
        </div>
      )}

      {/* ── Lone Wolf ──────────────────────────────────────────────── */}
      {matchCategory === "LONE_WOLF" && (
        <div className="flex flex-col gap-3">
          <div className="bg-black/40 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
                Winner Takes All
              </p>
              <p className="text-[#1DB954] font-black text-xl">
                ₹{prizePool?.toLocaleString("en-IN")}
              </p>
            </div>
            <span className="text-3xl">🏆</span>
          </div>

          {entryFee > 0 && (
            <div className="flex items-center justify-between text-[11px] border-t border-white/5 pt-3">
              <span className="text-white/30 font-black uppercase tracking-widest text-[10px]">
                Entry Fee
              </span>
              <span className="text-white font-black">
                ₹{entryFee.toLocaleString("en-IN")}
              </span>
            </div>
          )}

          <div className="bg-black/20 rounded-xl px-3 py-2.5">
            <p className="text-white/30 text-[10px]">
              1v1 format. The winner receives the full prize pool.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Slot Grid ──────────────────────────────────────────────────────────────

function SlotCell({ slot, isSelected, isMine, onSelect }) {
  const { slotNumber, occupied } = slot;

  if (isMine) {
    return (
      <div className="relative flex flex-col items-center justify-center rounded-xl border-2 border-[#1DB954] bg-[#1DB954]/10 p-2 min-h-[56px] cursor-default">
        <span className="text-[#1DB954] font-black text-xs">
          {slotNumber}
        </span>
        <span className="text-[#1DB954]/70 text-[8px] font-black uppercase tracking-widest">
          Yours
        </span>
      </div>
    );
  }

  if (occupied) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-white/5 p-2 min-h-[56px] cursor-not-allowed opacity-40">
        <span className="text-white/30 font-black text-xs">
          {slotNumber}
        </span>
        <span className="text-white/20 text-[8px]">🔒</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(slotNumber)}
      className={`flex flex-col items-center justify-center rounded-xl border transition-all p-2 min-h-[56px] ${
        isSelected
          ? "border-[#1DB954] bg-[#1DB954]/20 text-[#1DB954]"
          : "border-white/10 bg-black/40 text-white/50 hover:border-[#1DB954]/50 hover:text-white hover:bg-[#1DB954]/5"
      }`}
    >
      <span className="font-black text-xs">{slotNumber}</span>
      {isSelected && (
        <span className="text-[8px] font-black uppercase tracking-widest">
          ✓
        </span>
      )}
    </button>
  );
}

function SlotGrid({ slotMap, matchCategory, selectedSlot, onSelectSlot }) {
  const { slots, mySlot, availableCount, totalSlots } = slotMap;

  const team1Slots = slots.filter((s) => s.teamNumber === 1);
  const team2Slots = slots.filter((s) => s.teamNumber === 2);
  const soloSlots = slots.filter((s) => s.teamNumber === null);

  const renderCell = (slot) => (
    <SlotCell
      key={slot.slotNumber}
      slot={slot}
      isSelected={selectedSlot === slot.slotNumber}
      isMine={mySlot === slot.slotNumber}
      onSelect={onSelectSlot}
    />
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
          Select Your Slot
        </p>
        <p className="text-white/30 text-[10px]">
          {availableCount} / {totalSlots} available
        </p>
      </div>

      {matchCategory === "CLASH_SQUAD" && (
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[#1DB954] text-[9px] font-black uppercase tracking-widest text-center">
              Team 1
            </p>
            <div className="flex flex-col gap-2">
              {team1Slots.map((slot) => renderCell(slot))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-blue-400 text-[9px] font-black uppercase tracking-widest text-center">
              Team 2
            </p>
            <div className="flex flex-col gap-2">
              {team2Slots.map((slot) => renderCell(slot))}
            </div>
          </div>
        </div>
      )}

      {matchCategory === "BATTLE_ROYALE" && (
        <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
          {soloSlots.map((slot) => renderCell(slot))}
        </div>
      )}

      {matchCategory === "LONE_WOLF" && (
        <div className="grid grid-cols-2 gap-4">
          {soloSlots.map((slot) => renderCell(slot))}
        </div>
      )}

      {selectedSlot && (
        <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-widest text-center">
          Slot {selectedSlot} selected — fill in your details below
        </p>
      )}
    </div>
  );
}

function JoinForm({ onJoin, loading, selectedSlot }) {
  const [ign, setIgn] = useState("");
  const [uid, setUid] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ign.trim() || !uid.trim()) return;
    onJoin({ ign: ign.trim(), uid: uid.trim(), slotNumber: selectedSlot });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="bg-[#1DB954]/5 border border-[#1DB954]/20 rounded-xl px-4 py-3">
        <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-widest">
          Booking Slot #{selectedSlot}
        </p>
      </div>

      <div>
        <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
          In-Game Name (IGN)
        </label>
        <input
          type="text"
          required
          value={ign}
          onChange={(e) => setIgn(e.target.value)}
          placeholder="Your Free Fire name"
          className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors"
        />
      </div>

      <div>
        <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
          Free Fire UID
        </label>
        <input
          type="text"
          required
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          placeholder="Numeric UID (6–12 digits)"
          className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-white transition-all disabled:opacity-50"
      >
        {loading ? "Registering..." : `Confirm Slot #${selectedSlot}`}
      </button>
    </form>
  );
}

function CanceledNotice({ tournament, onBack }) {
  const categoryLabel =
    CATEGORY_LABELS[tournament.matchCategory] ?? tournament.matchCategory;

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            ←
          </div>
          Back to Lobby
        </button>

        {tournament.banner && (
          <div className="h-48 rounded-2xl overflow-hidden mb-6 opacity-30">
            <img
              src={tournament.banner}
              alt={tournament.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex items-start justify-between gap-4 mb-8">
          <div className="flex-1 min-w-0">
            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-1">
              {categoryLabel}
            </p>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white/50 line-through">
              {tournament.title}
            </h1>
          </div>
          <StatusBadge status="CANCELED" />
        </div>

        <div className="bg-red-900/10 border border-red-900/30 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">✕</div>
          <h2 className="text-red-500 font-black uppercase tracking-widest text-lg mb-3">
            Tournament Canceled
          </h2>
          <p className="text-white/30 text-sm max-w-sm mx-auto">
            This tournament has been canceled by the admin. If you had
            registered, your slot has been released.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function TournamentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [tournament, setTournament] = useState(null);
  const [slotMap, setSlotMap] = useState(null);
  const [slotLoading, setSlotLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [joinLoading, setJoinLoading] = useState(false);
  const [joinError, setJoinError] = useState(null);
  const [joinSuccess, setJoinSuccess] = useState(false);

  const userId = user?._id ?? user?.id;

  const fetchTournament = useCallback(async () => {
    if (!id) return;
    try {
      const data = await getTournamentById(id);
      setTournament(data);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch tournament:", err);
      setError("Failed to load tournament details. Please try again.");
    }
  }, [id]);

  const fetchSlots = useCallback(async () => {
    if (!id) return;
    try {
      setSlotLoading(true);
      const data = await getTournamentSlots(id);
      setSlotMap(data);
    } catch (err) {
      console.error("Failed to fetch slot map:", err);
    } finally {
      setSlotLoading(false);
    }
  }, [id]);

  useEffect(() => {
    const initialFetch = async () => {
      setLoading(true);
      await Promise.all([fetchTournament(), fetchSlots()]);
      setLoading(false);
    };
    initialFetch();
  }, [fetchTournament, fetchSlots]);

  useEffect(() => {
    if (!tournament) return;
    if (tournament.status === "CANCELED") return;

    const isRegistered = tournament.participants?.some(
      (p) =>
        p.user === userId ||
        p.user?._id === userId ||
        p.user?.toString() === userId?.toString()
    );

    if (!isRegistered) return;
    if (tournament.status !== "UPCOMING") return;

    const msUntilStart =
      new Date(tournament.startTime).getTime() - Date.now();
    if (msUntilStart > REVEAL_POLL_WINDOW_MS) return;

    const pollId = setInterval(fetchTournament, REVEAL_POLL_INTERVAL_MS);
    return () => clearInterval(pollId);
  }, [tournament, userId, fetchTournament]);

  const handleJoin = async ({ ign, uid, slotNumber }) => {
    setJoinLoading(true);
    setJoinError(null);
    try {
      await joinTournament(id, { ign, uid, slotNumber });
      setJoinSuccess(true);
      setSelectedSlot(null);
      await Promise.all([fetchTournament(), fetchSlots()]);
    } catch (err) {
      const message =
        err.response?.data?.message ?? "Failed to join. Please try again.";
      setJoinError(message);
    } finally {
      setJoinLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#1DB954] border-t-transparent rounded-full animate-spin" />
          <p className="text-white/30 text-xs font-black uppercase tracking-widest">
            Loading match details...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-red-400 text-sm font-black uppercase tracking-widest mb-6">
            {error}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="bg-white text-black font-black uppercase tracking-widest text-xs px-8 py-3 rounded-xl hover:bg-[#1DB954] transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!tournament) return null;

  if (tournament.status === "CANCELED") {
    return (
      <CanceledNotice
        tournament={tournament}
        onBack={() => navigate(-1)}
      />
    );
  }

  const isRegistered = tournament.participants?.some(
    (p) =>
      p.user === userId ||
      p.user?._id === userId ||
      p.user?.toString() === userId?.toString()
  );
  const isFull =
    (tournament.participants?.length ?? 0) >= tournament.maxPlayers;
  const categoryLabel =
    CATEGORY_LABELS[tournament.matchCategory] ?? tournament.matchCategory;
  const hasSlotSystem = slotMap && slotMap.totalSlots > 0;

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="max-w-3xl mx-auto">

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            ←
          </div>
          Back to Lobby
        </button>

        {/* Banner */}
        {tournament.banner && (
          <div className="h-48 rounded-2xl overflow-hidden mb-6">
            <img
              src={tournament.banner}
              alt={tournament.title}
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1 min-w-0">
            <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-[0.4em] mb-1">
              {categoryLabel}
            </p>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
              {tournament.title}
            </h1>
          </div>
          <StatusBadge status={tournament.status} />
        </div>

        {/* Meta grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            {
              label: "Prize Pool",
              value: `₹${
                tournament.prizePool?.toLocaleString("en-IN") ?? 0
              }`,
              accent: true,
            },
            {
              label: "Entry Fee",
              value:
                tournament.entryFee > 0
                  ? `₹${tournament.entryFee.toLocaleString("en-IN")}`
                  : "FREE",
            },
            {
              label: "Players",
              value: `${tournament.participants?.length ?? 0} / ${
                tournament.maxPlayers
              }`,
            },
            { label: "Map", value: tournament.map ?? "—" },
          ].map(({ label, value, accent }) => (
            <div
              key={label}
              className="bg-[#121212] border border-white/5 rounded-xl p-4 text-center"
            >
              <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
                {label}
              </p>
              <p
                className={`text-sm font-black ${
                  accent ? "text-[#1DB954]" : "text-white"
                }`}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Payout preview — shown for all active tournaments */}
        <PayoutPreview tournament={tournament} />

        {/* Countdown — UPCOMING only */}
        {tournament.status === "UPCOMING" && tournament.startTime && (
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 mb-6 text-center">
            <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-3">
              Match Starts In
            </p>
            <CountdownDisplay startTime={tournament.startTime} />
          </div>
        )}

        {/* Room credentials — registered users only */}
        {isRegistered && (
          <div className="mb-6">
            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-3">
              Room Access
            </p>
            <RoomCredentials
              credentialsRevealed={tournament.credentialsRevealed ?? false}
              roomId={tournament.roomId ?? null}
              roomPassword={tournament.roomPassword ?? null}
            />
          </div>
        )}

        {/* Registration section */}
        {tournament.status === "UPCOMING" && (
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 mb-6">
            {isRegistered || joinSuccess ? (
              <div className="text-center py-4">
                <span className="text-3xl mb-3 block">✅</span>
                <p className="text-[#1DB954] font-black uppercase tracking-widest text-sm">
                  You are registered
                </p>
                {slotMap?.mySlot && (
                  <p className="text-white/30 text-xs mt-2">
                    Your slot: #{slotMap.mySlot}
                  </p>
                )}
                <p className="text-white/30 text-xs mt-1">
                  Room credentials appear here 15 minutes before start.
                </p>
              </div>
            ) : isFull ? (
              <div className="text-center py-4">
                <span className="text-3xl mb-3 block">🚫</span>
                <p className="text-white/40 font-black uppercase tracking-widest text-sm">
                  Tournament Full
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-white font-black uppercase tracking-tight text-base mb-5">
                  Register for this Match
                </h2>

                {joinError && (
                  <p className="text-red-400 text-[11px] font-black uppercase tracking-widest mb-4">
                    {joinError}
                  </p>
                )}

                {hasSlotSystem && !slotLoading && (
                  <div className="mb-6">
                    <SlotGrid
                      slotMap={slotMap}
                      matchCategory={tournament.matchCategory}
                      selectedSlot={selectedSlot}
                      onSelectSlot={setSelectedSlot}
                    />
                  </div>
                )}

                {slotLoading && (
                  <div className="flex items-center justify-center py-8 mb-4">
                    <div className="w-6 h-6 border-2 border-[#1DB954] border-t-transparent rounded-full animate-spin" />
                  </div>
                )}

                {(selectedSlot || !hasSlotSystem) && (
                  <JoinForm
                    onJoin={handleJoin}
                    loading={joinLoading}
                    selectedSlot={selectedSlot}
                  />
                )}

                {hasSlotSystem && !selectedSlot && !slotLoading && (
                  <p className="text-white/20 text-[10px] font-black uppercase tracking-widest text-center mt-4">
                    Select a slot above to continue
                  </p>
                )}
              </>
            )}
          </div>
        )}

        {/* Description */}
        {tournament.description && (
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 mb-6">
            <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-3">
              About
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              {tournament.description}
            </p>
          </div>
        )}

        {/* Rules */}
        {Array.isArray(tournament.rules) && tournament.rules.length > 0 && (
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 mb-6">
            <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-3">
              Rules
            </h2>
            <ul className="flex flex-col gap-2">
              {tournament.rules.map((rule, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-white/60"
                >
                  <span className="text-[#1DB954] font-black shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Results button */}
        {(tournament.status === "COMPLETED" ||
          tournament.status === "AWAITING_RESULTS") && (
          <button
            onClick={() => navigate(`/tournaments/${id}/results`)}
            className="w-full bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-white transition-all"
          >
            {tournament.status === "AWAITING_RESULTS"
              ? "Results Pending..."
              : "View Final Results"}
          </button>
        )}
      </div>
    </div>
  );
}