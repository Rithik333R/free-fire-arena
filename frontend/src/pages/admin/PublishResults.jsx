// frontend/src/pages/admin/PublishResults.jsx

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getTournamentById,
  publishResults,
} from "../../api/tournaments.api";

// ─────────────────────────────────────────────────────────────────────────────
// Phase D+7 — Mode-aware result publishing.
// Prizes are calculated by the backend based on tournament configuration.
// Admin selects participants from registered list — no manual IGN typing.
// ─────────────────────────────────────────────────────────────────────────────

// ── Helpers ────────────────────────────────────────────────────────────────

const CATEGORY_LABELS = {
  BATTLE_ROYALE: "Battle Royale",
  CLASH_SQUAD: "Clash Squad",
  LONE_WOLF: "Lone Wolf",
};

/**
 * getTeamSize — extracts team size from matchType string.
 * "4v4" → 4, "2v2" → 2
 */
function getTeamSize(matchType) {
  if (!matchType) return null;
  const match = matchType.match(/^(\d+)v\d+$/i);
  if (!match) return null;
  return parseInt(match[1], 10);
}

/**
 * calculateBRPreview — client-side prize preview for BR.
 * Mirrors the backend calculation in tournamentRules.js.
 */
function calculateBRPreview(winner, killPlayers, winnerPrize, perKillReward) {
  if (!winner) return [];

  const rows = [];
  const winnerKills = Number(winner.kills ?? 0);
  rows.push({
    ign: winner.ign || "—",
    kills: winnerKills,
    prize: (winnerPrize ?? 0) + winnerKills * (perKillReward ?? 0),
    label: "Winner",
  });

  killPlayers
    .filter((p) => p.participantId && Number(p.kills) > 0)
    .sort((a, b) => Number(b.kills) - Number(a.kills))
    .forEach((p) => {
      const participant = p._participantData;
      rows.push({
        ign: participant?.ign || "—",
        kills: Number(p.kills),
        prize: Number(p.kills) * (perKillReward ?? 0),
        label: "Kill Reward",
      });
    });

  return rows;
}

// ── Sub-components — Battle Royale ─────────────────────────────────────────

function BRPublishForm({
  participants,
  winnerPrize,
  perKillReward,
  onSubmit,
  loading,
}) {
  const [winner, setWinner] = useState({ participantId: "", kills: 0 });
  const [killPlayers, setKillPlayers] = useState([]);
  const [error, setError] = useState(null);

  // Participants not yet assigned anywhere.
  const assignedIds = new Set([
    winner.participantId,
    ...killPlayers.map((k) => k.participantId),
  ]);
  const unassigned = participants.filter(
    (p) => !assignedIds.has(String(p._id ?? p.user))
  );

  const handleWinnerChange = (field, value) => {
    setWinner((prev) => ({ ...prev, [field]: value }));
  };

  const addKillPlayer = () => {
    setKillPlayers((prev) => [
      ...prev,
      { participantId: "", kills: 0, _participantData: null },
    ]);
  };

  const updateKillPlayer = (index, field, value) => {
    setKillPlayers((prev) =>
      prev.map((p, i) => {
        if (i !== index) return p;
        if (field === "participantId") {
          const found = participants.find(
            (pt) => String(pt._id ?? pt.user) === value
          );
          return { ...p, participantId: value, _participantData: found ?? null };
        }
        return { ...p, [field]: value };
      })
    );
  };

  const removeKillPlayer = (index) => {
    setKillPlayers((prev) => prev.filter((_, i) => i !== index));
  };

  const winnerParticipant = participants.find(
    (p) => String(p._id ?? p.user) === winner.participantId
  );

  // Prize preview rows.
  const previewRows = calculateBRPreview(
    winner.participantId
      ? { ...winnerParticipant, kills: winner.kills }
      : null,
    killPlayers,
    winnerPrize,
    perKillReward
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!winner.participantId) {
      setError("Please select a winner.");
      return;
    }

    const winnerData = {
      user: winnerParticipant?.user ?? null,
      ign: winnerParticipant?.ign ?? "",
      uid: winnerParticipant?.uid ?? null,
      kills: Number(winner.kills),
    };

    const killRewardPlayers = killPlayers
      .filter((p) => p.participantId && Number(p.kills) > 0)
      .map((p) => ({
        user: p._participantData?.user ?? null,
        ign: p._participantData?.ign ?? "",
        uid: p._participantData?.uid ?? null,
        kills: Number(p.kills),
      }));

    onSubmit({ winner: winnerData, killRewardPlayers });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

      {/* Winner selection */}
      <div className="bg-black/40 border border-white/5 rounded-2xl p-5 flex flex-col gap-4">
        <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-widest">
          🏆 Winner (Placement #1)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">
              Select Player *
            </label>
            <select
              required
              value={winner.participantId}
              onChange={(e) =>
                handleWinnerChange("participantId", e.target.value)
              }
              className="w-full bg-[#121212] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#1DB954] transition-colors"
            >
              <option value="">— Select winner —</option>
              {participants.map((p) => (
                <option
                  key={String(p._id ?? p.user)}
                  value={String(p._id ?? p.user)}
                >
                  Slot {p.slotNumber ?? "?"} · {p.ign}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">
              Kills *
            </label>
            <input
              type="number"
              min={0}
              required
              value={winner.kills}
              onChange={(e) =>
                handleWinnerChange("kills", e.target.value)
              }
              className="w-full bg-[#121212] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#1DB954] transition-colors"
            />
          </div>
        </div>

        {winnerParticipant && (
          <p className="text-[#1DB954]/60 text-[10px]">
            UID: {winnerParticipant.uid} · Slot #{winnerParticipant.slotNumber ?? "—"}
          </p>
        )}
      </div>

      {/* Kill reward players */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
            Kill Reward Players
          </p>
          <button
            type="button"
            onClick={addKillPlayer}
            disabled={unassigned.length === 0}
            className="text-[10px] font-black uppercase tracking-widest text-[#1DB954]/60 hover:text-[#1DB954] transition-colors disabled:opacity-30"
          >
            + Add Player
          </button>
        </div>

        {killPlayers.length === 0 && (
          <p className="text-white/20 text-[10px] text-center py-4">
            No kill reward players added. Only the winner will receive a result row.
          </p>
        )}

        {killPlayers.map((kp, index) => {
          const availableForThis = participants.filter(
            (p) =>
              !assignedIds.has(String(p._id ?? p.user)) ||
              String(p._id ?? p.user) === kp.participantId
          );

          return (
            <div
              key={index}
              className="bg-black/40 border border-white/5 rounded-xl p-4 flex gap-3 items-end"
            >
              <div className="flex-1">
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">
                  Player
                </label>
                <select
                  value={kp.participantId}
                  onChange={(e) =>
                    updateKillPlayer(index, "participantId", e.target.value)
                  }
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#1DB954] transition-colors"
                >
                  <option value="">— Select player —</option>
                  {availableForThis.map((p) => (
                    <option
                      key={String(p._id ?? p.user)}
                      value={String(p._id ?? p.user)}
                    >
                      Slot {p.slotNumber ?? "?"} · {p.ign}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-24">
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">
                  Kills
                </label>
                <input
                  type="number"
                  min={0}
                  value={kp.kills}
                  onChange={(e) =>
                    updateKillPlayer(index, "kills", e.target.value)
                  }
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#1DB954] transition-colors"
                />
              </div>

              <button
                type="button"
                onClick={() => removeKillPlayer(index)}
                className="text-white/20 hover:text-red-400 transition-colors font-black text-sm pb-2.5"
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>

      {/* Prize preview */}
      {previewRows.length > 0 && (
        <div className="bg-[#1DB954]/5 border border-[#1DB954]/20 rounded-2xl p-5 flex flex-col gap-3">
          <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-widest">
            Prize Preview
          </p>
          {previewRows.map((row, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>
                <span className="text-white text-sm font-black">
                  {row.ign}
                </span>
                <span className="text-white/30 text-[10px] ml-2">
                  {row.label} · {row.kills} kills
                </span>
              </div>
              <span className="text-[#1DB954] font-black text-sm">
                ₹{row.prize.toLocaleString("en-IN")}
              </span>
            </div>
          ))}
        </div>
      )}

      {error && (
        <p className="text-red-400 text-[11px] font-black uppercase tracking-widest">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white text-black font-black uppercase tracking-widest text-xs py-5 rounded-xl hover:bg-[#1DB954] transition-all disabled:opacity-50"
      >
        {loading ? "Publishing..." : "🏆 Publish Battle Royale Results"}
      </button>
    </form>
  );
}

// ── Sub-components — Clash Squad ───────────────────────────────────────────

function CSPublishForm({
  participants,
  prizePool,
  matchType,
  onSubmit,
  loading,
}) {
  const [winningTeamNumber, setWinningTeamNumber] = useState(null);
  const [error, setError] = useState(null);

  const teamSize = getTeamSize(matchType) ?? 0;
  const prizePerPlayer =
    teamSize > 0 ? Math.floor(prizePool / teamSize) : prizePool;

  const team1 = participants.filter((p) => p.teamNumber === 1);
  const team2 = participants.filter((p) => p.teamNumber === 2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!winningTeamNumber) {
      setError("Please select the winning team.");
      return;
    }

    onSubmit({ winningTeamNumber });
  };

  const TeamColumn = ({ teamNumber, teamPlayers, label, color }) => {
    const isWinner = winningTeamNumber === teamNumber;
    return (
      <div
        className={`flex flex-col gap-3 p-4 rounded-2xl border transition-all ${
          isWinner
            ? "border-[#1DB954]/40 bg-[#1DB954]/5"
            : "border-white/5 bg-black/20"
        }`}
      >
        <div className="flex items-center justify-between">
          <p
            className={`text-[10px] font-black uppercase tracking-widest ${color}`}
          >
            {label}
          </p>
          {isWinner && (
            <span className="text-[#1DB954] text-[10px] font-black uppercase tracking-widest">
              ✓ Winner
            </span>
          )}
        </div>

        {/* Player list */}
        <div className="flex flex-col gap-2">
          {teamPlayers.length === 0 ? (
            <p className="text-white/20 text-[10px] text-center py-2">
              No players in this team
            </p>
          ) : (
            teamPlayers.map((p) => (
              <div
                key={String(p._id ?? p.user)}
                className="flex items-center gap-3 bg-black/40 rounded-xl px-3 py-2"
              >
                <span className="text-white/30 text-[9px] font-black w-12 shrink-0">
                  Slot {p.slotNumber ?? "?"}
                </span>
                <span className="text-white text-sm font-black flex-1 truncate">
                  {p.ign}
                </span>
                {isWinner && (
                  <span className="text-[#1DB954] text-[10px] font-black shrink-0">
                    ₹{prizePerPlayer.toLocaleString("en-IN")}
                  </span>
                )}
              </div>
            ))
          )}
        </div>

        <button
          type="button"
          onClick={() =>
            setWinningTeamNumber(
              winningTeamNumber === teamNumber ? null : teamNumber
            )
          }
          disabled={teamPlayers.length === 0}
          className={`w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all disabled:opacity-30 ${
            isWinner
              ? "bg-[#1DB954] text-black"
              : "bg-white/5 hover:bg-white/10 border border-white/10 text-white/60"
          }`}
        >
          {isWinner ? "✓ Selected as Winner" : "Set as Winner"}
        </button>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

      {/* Prize info */}
      <div className="bg-black/40 border border-white/5 rounded-xl px-5 py-4">
        <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">
          Prize Distribution
        </p>
        <p className="text-white text-sm">
          Prize Pool: ₹{prizePool?.toLocaleString("en-IN")} ·{" "}
          <span className="text-[#1DB954] font-black">
            ₹{prizePerPlayer.toLocaleString("en-IN")} per winning player
          </span>
        </p>
      </div>

      {/* Team columns */}
      <div className="grid grid-cols-2 gap-4">
        <TeamColumn
          teamNumber={1}
          teamPlayers={team1}
          label="Team 1"
          color="text-[#1DB954]"
        />
        <TeamColumn
          teamNumber={2}
          teamPlayers={team2}
          label="Team 2"
          color="text-blue-400"
        />
      </div>

      {/* Winner preview */}
      {winningTeamNumber && (
        <div className="bg-[#1DB954]/5 border border-[#1DB954]/20 rounded-2xl p-5">
          <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-widest mb-2">
            Prize Preview — Team {winningTeamNumber} Wins
          </p>
          {(winningTeamNumber === 1 ? team1 : team2).map((p) => (
            <div
              key={String(p._id ?? p.user)}
              className="flex items-center justify-between py-1"
            >
              <span className="text-white text-sm font-black">
                {p.ign}
              </span>
              <span className="text-[#1DB954] font-black text-sm">
                ₹{prizePerPlayer.toLocaleString("en-IN")}
              </span>
            </div>
          ))}
        </div>
      )}

      {error && (
        <p className="text-red-400 text-[11px] font-black uppercase tracking-widest">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || !winningTeamNumber}
        className="w-full bg-white text-black font-black uppercase tracking-widest text-xs py-5 rounded-xl hover:bg-[#1DB954] transition-all disabled:opacity-50"
      >
        {loading
          ? "Publishing..."
          : winningTeamNumber
          ? `🏆 Publish — Team ${winningTeamNumber} Wins`
          : "Select winning team above"}
      </button>
    </form>
  );
}

// ── Sub-components — Lone Wolf ─────────────────────────────────────────────

function LWPublishForm({ participants, prizePool, onSubmit, loading }) {
  const [winnerId, setWinnerId] = useState("");
  const [error, setError] = useState(null);

  const winner = participants.find(
    (p) => String(p._id ?? p.user) === winnerId
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!winnerId || !winner) {
      setError("Please select the winner.");
      return;
    }

    onSubmit({
      winner: {
        user: winner.user ?? null,
        ign: winner.ign,
        uid: winner.uid ?? null,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

      {/* Prize info */}
      <div className="bg-black/40 border border-white/5 rounded-xl px-5 py-4">
        <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">
          Prize
        </p>
        <p className="text-[#1DB954] font-black text-lg">
          ₹{prizePool?.toLocaleString("en-IN")} — Winner Takes All
        </p>
      </div>

      {/* Player slots */}
      <div className="grid grid-cols-2 gap-4">
        {participants.slice(0, 2).map((p) => {
          const isWinner = winnerId === String(p._id ?? p.user);
          return (
            <button
              key={String(p._id ?? p.user)}
              type="button"
              onClick={() =>
                setWinnerId(
                  isWinner ? "" : String(p._id ?? p.user)
                )
              }
              className={`flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all ${
                isWinner
                  ? "border-[#1DB954]/40 bg-[#1DB954]/5 text-[#1DB954]"
                  : "border-white/5 bg-black/20 text-white/50 hover:border-white/20 hover:text-white"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-black text-lg ${
                  isWinner
                    ? "border-[#1DB954] bg-[#1DB954]/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {p.ign?.slice(0, 2).toUpperCase() ?? "?"}
              </div>
              <div className="text-center">
                <p className="font-black text-sm">{p.ign}</p>
                <p className="text-[10px] opacity-60">
                  Slot {p.slotNumber ?? "?"}
                </p>
              </div>
              {isWinner && (
                <>
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    🏆 Winner
                  </span>
                  <span className="text-[#1DB954] font-black">
                    ₹{prizePool?.toLocaleString("en-IN")}
                  </span>
                </>
              )}
            </button>
          );
        })}
      </div>

      {participants.length === 0 && (
        <p className="text-white/20 text-[10px] text-center py-4">
          No registered participants found.
        </p>
      )}

      {error && (
        <p className="text-red-400 text-[11px] font-black uppercase tracking-widest">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || !winnerId}
        className="w-full bg-white text-black font-black uppercase tracking-widest text-xs py-5 rounded-xl hover:bg-[#1DB954] transition-all disabled:opacity-50"
      >
        {loading ? "Publishing..." : "🏆 Publish Lone Wolf Result"}
      </button>
    </form>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function PublishResults() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tournament, setTournament] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchTournament = async () => {
      try {
        setFetchLoading(true);
        setFetchError(null);
        const data = await getTournamentById(id);
        setTournament(data);
      } catch (err) {
        console.error("Failed to fetch tournament:", err);
        setFetchError("Could not load tournament details.");
      } finally {
        setFetchLoading(false);
      }
    };

    fetchTournament();
  }, [id]);

  const handleSubmit = async (payload) => {
    setSubmitError(null);

    const confirmed = window.confirm(
      `Publish final results for "${tournament?.title}"?\n\nThis marks the tournament as COMPLETED and is immediately visible to players.`
    );
    if (!confirmed) return;

    setSubmitLoading(true);

    try {
      await publishResults(id, payload);
      navigate("/admin");
    } catch (err) {
      const message =
        err.response?.data?.message ??
        err.response?.data?.error ??
        "Failed to publish results. Please try again.";
      setSubmitError(message);
    } finally {
      setSubmitLoading(false);
    }
  };

  // ── Render: loading ────────────────────────────────────────────────
  if (fetchLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#1DB954] border-t-transparent rounded-full animate-spin" />
          <p className="text-white/30 text-xs font-black uppercase tracking-widest">
            Loading match data...
          </p>
        </div>
      </div>
    );
  }

  // ── Render: fetch error ────────────────────────────────────────────
  if (fetchError) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-red-400 text-sm font-black uppercase tracking-widest mb-6">
            {fetchError}
          </p>
          <button
            onClick={() => navigate("/admin")}
            className="bg-white text-black font-black uppercase tracking-widest text-xs px-8 py-3 rounded-xl hover:bg-[#1DB954] transition-all"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (!tournament) return null;

  const { matchCategory, matchType, prizePool, winnerPrize, perKillReward } =
    tournament;
  const categoryLabel = CATEGORY_LABELS[matchCategory] ?? matchCategory;
  const participants = tournament.participants ?? [];

  // ── Render: main ───────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-2xl mx-auto">

        {/* Back button */}
        <button
          onClick={() => navigate("/admin")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            ←
          </div>
          Back to Dashboard
        </button>

        {/* Header */}
        <header className="mb-8">
          <div className="inline-block bg-[#1DB954]/10 text-[#1DB954] border border-[#1DB954]/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            {categoryLabel} · Publish Results
          </div>
          <h1 className="text-2xl font-black italic uppercase tracking-tighter text-white">
            {tournament.title}
          </h1>
          <p className="text-white/30 text-xs mt-2">
            Prize Pool: ₹{prizePool?.toLocaleString("en-IN")} ·{" "}
            {participants.length} registered player
            {participants.length !== 1 ? "s" : ""}
          </p>
        </header>

        {/* Submit error */}
        {submitError && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-4 mb-6">
            <p className="text-red-400 text-[11px] font-black uppercase tracking-widest">
              {submitError}
            </p>
          </div>
        )}

        {/* Mode-specific publish form */}
        {matchCategory === "BATTLE_ROYALE" && (
          <BRPublishForm
            participants={participants}
            winnerPrize={winnerPrize}
            perKillReward={perKillReward}
            onSubmit={handleSubmit}
            loading={submitLoading}
          />
        )}

        {matchCategory === "CLASH_SQUAD" && (
          <CSPublishForm
            participants={participants}
            prizePool={prizePool}
            matchType={matchType}
            onSubmit={handleSubmit}
            loading={submitLoading}
          />
        )}

        {matchCategory === "LONE_WOLF" && (
          <LWPublishForm
            participants={participants}
            prizePool={prizePool}
            onSubmit={handleSubmit}
            loading={submitLoading}
          />
        )}
      </div>
    </div>
  );
}