// frontend/src/pages/admin/PublishResults.jsx

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getTournamentById,
  publishResults,
} from "../../api/tournaments.api";

// ─────────────────────────────────────────────────────────────────────────────
// Phase B4 — Results are now linked to registered participants.
// Each result slot lets the admin select from the registered participant list.
// The user ObjectId, IGN, and UID are captured at publish time.
//
// Phase C will add: prize pool sum validation, result review step before
// final publish, and audit trail for who published results.
// ─────────────────────────────────────────────────────────────────────────────

// ── Constants ──────────────────────────────────────────────────────────────

const BR_RESULT_SLOTS = 10;

// ── Helpers ────────────────────────────────────────────────────────────────

/**
 * Builds initial result slots based on matchCategory.
 * matchCategory is the source of truth for mode per project rules.
 */
function buildInitialSlots(matchCategory) {
  switch (matchCategory) {
    case "BATTLE_ROYALE":
      return Array.from({ length: BR_RESULT_SLOTS }, (_, i) => ({
        rank: String(i + 1),
        user: null,
        ign: "",
        uid: "",
        kills: 0,
        prize: 0,
        isManual: false,
      }));

    case "CLASH_SQUAD":
      return [
        { rank: "Winner", user: null, ign: "", uid: "", kills: 0, prize: 0, isManual: false },
        { rank: "Runner Up", user: null, ign: "", uid: "", kills: 0, prize: 0, isManual: false },
      ];

    case "LONE_WOLF":
      return [
        { rank: "Winner", user: null, ign: "", uid: "", kills: null, prize: 0, isManual: false },
      ];

    default:
      return [
        { rank: "1st Place", user: null, ign: "", uid: "", kills: 0, prize: 0, isManual: false },
      ];
  }
}

const CATEGORY_LABELS = {
  BATTLE_ROYALE: "Battle Royale",
  CLASH_SQUAD: "Clash Squad",
  LONE_WOLF: "Lone Wolf",
};

// ── Sub-components ─────────────────────────────────────────────────────────

function ResultSlot({
  slot,
  index,
  participants,
  onChange,
  onSelectParticipant,
  onToggleManual,
  isLoneWolf,
  isBattleRoyale,
}) {
  const showKills = !isLoneWolf;

  return (
    <div className="bg-black/40 border border-white/5 rounded-2xl p-5 flex flex-col gap-4">
      {/* Slot header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1DB954]/10 border border-[#1DB954]/20 flex items-center justify-center shrink-0">
            <span className="text-[#1DB954] text-[10px] font-black">
              {isBattleRoyale ? `#${slot.rank}` : slot.rank.slice(0, 1)}
            </span>
          </div>
          <p className="text-white/50 text-[10px] font-black uppercase tracking-widest">
            {isBattleRoyale ? `Placement #${slot.rank}` : slot.rank}
          </p>
        </div>

        {/* Manual entry toggle */}
        <button
          type="button"
          onClick={() => onToggleManual(index)}
          className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-white/50 transition-colors"
        >
          {slot.isManual ? "← Select Player" : "Manual Entry"}
        </button>
      </div>

      {/* Participant selector or manual IGN entry */}
      {!slot.isManual ? (
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">
            Select Registered Player
          </label>
          <select
            value={slot.user ?? ""}
            onChange={(e) => onSelectParticipant(index, e.target.value)}
            className="w-full bg-[#121212] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#1DB954] transition-colors"
          >
            <option value="">— Select player —</option>
            {participants.map((p) => (
              <option key={p.user} value={p.user}>
                {p.ign} ({p.uid})
              </option>
            ))}
          </select>
          {/* Show selected player details */}
          {slot.ign && (
            <p className="text-[#1DB954] text-[10px] font-black mt-2">
              ✓ {slot.ign} · UID: {slot.uid}
            </p>
          )}
        </div>
      ) : (
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">
            In-Game Name (Manual)
          </label>
          <input
            type="text"
            required
            value={slot.ign}
            onChange={(e) => onChange(index, "ign", e.target.value)}
            placeholder="Type IGN manually"
            className="w-full bg-[#121212] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors"
          />
        </div>
      )}

      {/* Kills and Prize */}
      <div
        className={`grid gap-4 ${
          showKills ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {showKills && (
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">
              {isBattleRoyale ? "Total Kills" : "Squad Kills"}
            </label>
            <input
              type="number"
              min={0}
              required
              value={slot.kills}
              onChange={(e) =>
                onChange(index, "kills", Number(e.target.value))
              }
              className="w-full bg-[#121212] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#1DB954] transition-colors"
            />
          </div>
        )}

        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">
            Prize (₹)
          </label>
          <input
            type="number"
            min={0}
            required
            value={slot.prize}
            onChange={(e) =>
              onChange(index, "prize", Number(e.target.value))
            }
            className="w-full bg-[#121212] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-[#1DB954] font-black focus:outline-none focus:border-[#1DB954] transition-colors"
          />
        </div>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function PublishResults() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tournament, setTournament] = useState(null);
  const [slots, setSlots] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Fetch tournament — participants list comes with the tournament document.
  useEffect(() => {
    if (!id) return;

    const fetchTournament = async () => {
      try {
        setFetchLoading(true);
        setFetchError(null);
        const data = await getTournamentById(id);
        setTournament(data);
        setSlots(buildInitialSlots(data.matchCategory));
      } catch (err) {
        console.error("Failed to fetch tournament:", err);
        setFetchError("Could not load tournament details.");
      } finally {
        setFetchLoading(false);
      }
    };

    fetchTournament();
  }, [id]);

  // ── Slot handlers ──────────────────────────────────────────────────

  const handleSlotChange = (index, field, value) => {
    setSlots((prev) =>
      prev.map((slot, i) =>
        i === index ? { ...slot, [field]: value } : slot
      )
    );
  };

  /**
   * handleSelectParticipant — when admin selects a player from the dropdown,
   * auto-fill the slot's user ObjectId, IGN, and UID from the participant record.
   */
  const handleSelectParticipant = (index, userId) => {
    if (!userId) {
      // Cleared selection — reset slot identity fields.
      setSlots((prev) =>
        prev.map((slot, i) =>
          i === index
            ? { ...slot, user: null, ign: "", uid: "" }
            : slot
        )
      );
      return;
    }

    const participant = tournament.participants.find(
      (p) => p.user === userId || p.user?.toString() === userId
    );

    if (!participant) return;

    setSlots((prev) =>
      prev.map((slot, i) =>
        i === index
          ? {
              ...slot,
              user: userId,
              ign: participant.ign,
              uid: participant.uid,
            }
          : slot
      )
    );
  };

  const handleToggleManual = (index) => {
    setSlots((prev) =>
      prev.map((slot, i) =>
        i === index
          ? {
              ...slot,
              isManual: !slot.isManual,
              // Clear identity fields when switching modes.
              user: null,
              ign: "",
              uid: "",
            }
          : slot
      )
    );
  };

  // ── Submit ─────────────────────────────────────────────────────────

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all slots have an IGN.
    const emptyIgn = slots.some((s) => !s.ign.trim());
    if (emptyIgn) {
      setSubmitError(
        "All placement slots must have a player selected or IGN entered."
      );
      return;
    }

    const confirmed = window.confirm(
      `Publish final results for "${tournament?.title}"?\n\nThis marks the tournament as COMPLETED and is immediately visible to players.`
    );
    if (!confirmed) return;

    setSubmitLoading(true);

    try {
      // Build result payload — include user ref and uid when available.
      // Remove isManual flag before sending to backend.
      const results = slots.map((slot) => ({
        rank: slot.rank,
        ...(slot.user && { user: slot.user }),
        ign: slot.ign.trim(),
        ...(slot.uid && { uid: slot.uid }),
        ...(slot.kills !== null && { kills: slot.kills }),
        prize: slot.prize,
      }));

      await publishResults(id, { results });
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

  const isLoneWolf = tournament.matchCategory === "LONE_WOLF";
  const isBattleRoyale = tournament.matchCategory === "BATTLE_ROYALE";
  const categoryLabel =
    CATEGORY_LABELS[tournament.matchCategory] ?? tournament.matchCategory;
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

        {/* Page header */}
        <header className="mb-8">
          <div className="inline-block bg-[#1DB954]/10 text-[#1DB954] border border-[#1DB954]/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            {categoryLabel} · Publish Results
          </div>
          <h1 className="text-2xl font-black italic uppercase tracking-tighter text-white">
            {tournament.title}
          </h1>
          <p className="text-white/30 text-xs mt-2">
            Prize Pool: ₹{tournament.prizePool?.toLocaleString("en-IN")} ·{" "}
            {participants.length} registered player
            {participants.length !== 1 ? "s" : ""}
          </p>
        </header>

        {/* No participants warning */}
        {participants.length === 0 && (
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl px-5 py-4 mb-6">
            <p className="text-yellow-400/70 text-[10px] font-black uppercase tracking-widest">
              ⚠ No registered participants found. Use manual entry for all slots.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {slots.map((slot, index) => (
            <ResultSlot
              key={index}
              slot={slot}
              index={index}
              participants={participants}
              onChange={handleSlotChange}
              onSelectParticipant={handleSelectParticipant}
              onToggleManual={handleToggleManual}
              isLoneWolf={isLoneWolf}
              isBattleRoyale={isBattleRoyale}
            />
          ))}

          {/* Submit error */}
          {submitError && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-4">
              <p className="text-red-400 text-[11px] font-black uppercase tracking-widest">
                {submitError}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={submitLoading}
            className="w-full bg-white text-black font-black uppercase tracking-widest text-xs py-5 rounded-xl hover:bg-[#1DB954] transition-all disabled:opacity-50 mt-4"
          >
            {submitLoading ? "Publishing..." : "🏆 Finalize & Publish Results"}
          </button>
        </form>
      </div>
    </div>
  );
}