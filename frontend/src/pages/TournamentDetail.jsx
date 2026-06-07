// frontend/src/pages/TournamentDetail.jsx

import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getTournamentById, joinTournament } from "../api/tournaments.api";

// Reveal polling constants.
// Within REVEAL_POLL_WINDOW_MS of start time, re-fetch every
// REVEAL_POLL_INTERVAL_MS so credentials appear as soon as the
// backend reveals them — no exact-second dependency.
const REVEAL_POLL_WINDOW_MS = 20 * 60 * 1000;  // 20 minutes
const REVEAL_POLL_INTERVAL_MS = 30 * 1000;      // 30 seconds

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
    h: 0,
    m: 0,
    s: 0,
    label: null,
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

/**
 * RoomCredentials — displays room access information.
 *
 * Props:
 *   credentialsRevealed: boolean — from backend, authoritative reveal state
 *   roomId: string | null
 *   roomPassword: string | null
 *
 * Three states:
 *   1. Not revealed — show locked panel with time notice
 *   2. Revealed but credentials not set — admin has not entered them yet
 *   3. Revealed and credentials available — show roomId and roomPassword
 */
function RoomCredentials({ credentialsRevealed, roomId, roomPassword }) {
  // State 1 — not yet in the reveal window.
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

  // State 2 — in reveal window but admin has not set credentials yet.
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

  // State 3 — credentials available.
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

function JoinForm({ onJoin, loading }) {
  const [ign, setIgn] = useState("");
  const [uid, setUid] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ign.trim() || !uid.trim()) return;
    onJoin({ ign: ign.trim(), uid: uid.trim() });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
        className="w-full bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-white transition-all disabled:opacity-50 mt-2"
      >
        {loading ? "Registering..." : "Join Tournament"}
      </button>
    </form>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function TournamentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [tournament, setTournament] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [joinLoading, setJoinLoading] = useState(false);
  const [joinError, setJoinError] = useState(null);
  const [joinSuccess, setJoinSuccess] = useState(false);

  const userId = user?._id ?? user?.id;

  // ── Fetch ──────────────────────────────────────────────────────────

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

  // Initial fetch.
  useEffect(() => {
    const initialFetch = async () => {
      setLoading(true);
      await fetchTournament();
      setLoading(false);
    };
    initialFetch();
  }, [fetchTournament]);

  // Proximity-based credential reveal polling.
  // Polls every 30s when registered and within 20 minutes of start.
  // Reads credentialsRevealed from each response — no string comparison.
  useEffect(() => {
    if (!tournament) return;

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

  // ── Join ───────────────────────────────────────────────────────────

  const handleJoin = async ({ ign, uid }) => {
    setJoinLoading(true);
    setJoinError(null);
    try {
      await joinTournament(id, { ign, uid });
      setJoinSuccess(true);
      await fetchTournament();
    } catch (err) {
      const message =
        err.response?.data?.message ?? "Failed to join. Please try again.";
      setJoinError(message);
    } finally {
      setJoinLoading(false);
    }
  };

  // ── Render: loading ────────────────────────────────────────────────
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

  // ── Render: error ──────────────────────────────────────────────────
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

  // Derived state.
  const isRegistered = tournament.participants?.some(
    (p) =>
      p.user === userId ||
      p.user?._id === userId ||
      p.user?.toString() === userId?.toString()
  );
  const isFull =
    (tournament.participants?.length ?? 0) >= tournament.maxPlayers;
  const canJoin =
    tournament.status === "UPCOMING" && !isRegistered && !isFull;
  const categoryLabel =
    CATEGORY_LABELS[tournament.matchCategory] ?? tournament.matchCategory;

  // ── Render: main ───────────────────────────────────────────────────
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
              value: `₹${tournament.prizePool?.toLocaleString("en-IN") ?? 0}`,
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
            {
              label: "Map",
              value: tournament.map ?? "—",
            },
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

        {/* Countdown — only for UPCOMING matches */}
        {tournament.status === "UPCOMING" && tournament.startTime && (
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 mb-6 text-center">
            <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-3">
              Match Starts In
            </p>
            <CountdownDisplay startTime={tournament.startTime} />
          </div>
        )}

        {/* Room credentials — only for registered users */}
        {isRegistered && (
          <div className="mb-6">
            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-3">
              Room Access
            </p>
            {/* B3 fix: reads credentialsRevealed boolean — no string comparison */}
            <RoomCredentials
              credentialsRevealed={tournament.credentialsRevealed ?? false}
              roomId={tournament.roomId ?? null}
              roomPassword={tournament.roomPassword ?? null}
            />
          </div>
        )}

        {/* Join section */}
        {tournament.status === "UPCOMING" && (
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 mb-6">
            {isRegistered || joinSuccess ? (
              <div className="text-center py-4">
                <span className="text-3xl mb-3 block">✅</span>
                <p className="text-[#1DB954] font-black uppercase tracking-widest text-sm">
                  You are registered
                </p>
                <p className="text-white/30 text-xs mt-2">
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
                <JoinForm onJoin={handleJoin} loading={joinLoading} />
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

        {/* Results button for completed matches */}
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