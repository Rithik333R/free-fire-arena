// frontend/src/pages/admin/CreateTournament.jsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createTournament } from "../../api/tournaments.api";

// ── Constants ──────────────────────────────────────────────────────────────

const MATCH_CATEGORIES = [
  {
    value: "CLASH_SQUAD",
    label: "Clash Squad",
    description: "Team vs team, round-based",
  },
  {
    value: "BATTLE_ROYALE",
    label: "Battle Royale",
    description: "Full room, last squad standing",
  },
  {
    value: "LONE_WOLF",
    label: "Lone Wolf",
    description: "Solo 1v1 format",
  },
];

// matchType options per category.
// BATTLE_ROYALE and LONE_WOLF do not use matchType for slot derivation
// but LONE_WOLF has a fixed 1v1 format.
const MATCH_TYPES_BY_CATEGORY = {
  CLASH_SQUAD: ["1v1", "2v2", "3v3", "4v4"],
  LONE_WOLF: [],    // no format selector — always 2 slots
  BATTLE_ROYALE: [], // no format selector — uses maxPlayers
};

const MAPS = ["Bermuda", "Kalahari", "Purgatory", "Alpine", "Nexterra"];

const DEFAULT_RULES = [
  "No hacks or cheats of any kind",
  "Join the room 15 minutes before start time",
  "Respect all players and admins",
];

// ── Helpers ────────────────────────────────────────────────────────────────

/**
 * deriveMaxPlayers — calculates slot count from matchCategory + matchType.
 * Returns null when the admin should enter maxPlayers manually (BR only).
 */
function deriveMaxPlayers(matchCategory, matchType) {
  if (matchCategory === "LONE_WOLF") return 2;

  if (matchCategory === "CLASH_SQUAD") {
    const match = matchType?.match(/^(\d+)v\d+$/i);
    if (!match) return null;
    const teamSize = parseInt(match[1], 10);
    return teamSize * 2;
  }

  // BATTLE_ROYALE — admin sets freely.
  return null;
}

function toISOString(localDatetime) {
  if (!localDatetime) return null;
  return new Date(localDatetime).toISOString();
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function CreateTournament() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    title: "",
    game: "Free Fire",
    matchCategory: "CLASH_SQUAD",
    matchType: "4v4",
    map: "Bermuda",
    description: "",
    banner: "",
    startTime: "",
    endTime: "",
    entryFee: 0,
    prizePool: "",
    // maxPlayers is managed separately — derived for CS/LW, free for BR.
    maxPlayers: "",
    // BR reward fields — only sent for BATTLE_ROYALE.
    winnerPrize: "",
    perKillReward: "",
  });

  const [rules, setRules] = useState([...DEFAULT_RULES]);
  const [newRule, setNewRule] = useState("");

  // Derived maxPlayers — recomputed when category or type changes.
  const derivedMaxPlayers = deriveMaxPlayers(form.matchCategory, form.matchType);
  const isBR = form.matchCategory === "BATTLE_ROYALE";
  const isCS = form.matchCategory === "CLASH_SQUAD";
  const isLW = form.matchCategory === "LONE_WOLF";
  const showMatchType = isCS;
  const showMaxPlayersInput = isBR; // only BR lets admin enter freely
  const showRewardFields = isBR;

  // Keep maxPlayers in sync with derived value for CS and LW.
  useEffect(() => {
    if (derivedMaxPlayers !== null) {
      setForm((prev) => ({
        ...prev,
        maxPlayers: String(derivedMaxPlayers),
      }));
    }
  }, [derivedMaxPlayers]);

  // ── Form handlers ──────────────────────────────────────────────────

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: value };

      // When matchCategory changes, reset matchType and reward fields.
      if (name === "matchCategory") {
        const types = MATCH_TYPES_BY_CATEGORY[value];
        updated.matchType = types.length > 0 ? types[0] : "";
        updated.winnerPrize = "";
        updated.perKillReward = "";
        // maxPlayers will be recalculated by the useEffect above.
        if (value === "BATTLE_ROYALE") {
          updated.maxPlayers = "";
        }
      }

      return updated;
    });
  };

  const addRule = () => {
    const trimmed = newRule.trim();
    if (!trimmed) return;
    setRules((prev) => [...prev, trimmed]);
    setNewRule("");
  };

  const removeRule = (index) => {
    setRules((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRuleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addRule();
    }
  };

  // ── Validation ─────────────────────────────────────────────────────

  const validate = () => {
    if (!form.title.trim()) return "Tournament title is required.";
    if (!form.startTime) return "Start time is required.";
    if (!form.endTime) return "End time is required.";

    const start = new Date(form.startTime);
    const end = new Date(form.endTime);

    if (start <= new Date()) return "Start time must be in the future.";
    if (end <= start) return "End time must be after start time.";

    if (!form.prizePool || Number(form.prizePool) <= 0) {
      return "Prize pool must be greater than 0.";
    }

    // BR-specific validation.
    if (isBR) {
      if (!form.maxPlayers || Number(form.maxPlayers) < 2) {
        return "Max players must be at least 2 for Battle Royale.";
      }
      if (form.winnerPrize === "" || Number(form.winnerPrize) < 0) {
        return "Winner prize is required for Battle Royale.";
      }
      if (form.perKillReward === "" || Number(form.perKillReward) < 0) {
        return "Per kill reward is required for Battle Royale.";
      }
    }

    if (rules.length === 0) return "At least one rule is required.";

    return null;
  };

  // ── Submit ─────────────────────────────────────────────────────────

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const payload = {
        title: form.title.trim(),
        game: form.game,
        matchCategory: form.matchCategory,
        map: form.map,
        description: form.description.trim(),
        banner: form.banner.trim() || undefined,
        startTime: toISOString(form.startTime),
        endTime: toISOString(form.endTime),
        entryFee: Number(form.entryFee) || 0,
        prizePool: Number(form.prizePool),
        maxPlayers: Number(form.maxPlayers),
        rules,
      };

      // matchType only sent for CLASH_SQUAD.
      if (isCS && form.matchType) {
        payload.matchType = form.matchType;
      }

      // BR reward fields — required for BR, omitted for other modes.
      if (isBR) {
        payload.winnerPrize = Number(form.winnerPrize);
        payload.perKillReward = Number(form.perKillReward);
      }

      await createTournament(payload);
      navigate("/admin");
    } catch (err) {
      const message =
        err.response?.data?.message ??
        err.response?.data?.error ??
        "Failed to create tournament. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  // ── Payout preview — shown in the Prize section ────────────────────

  const renderPayoutPreview = () => {
    if (isBR && form.prizePool && form.winnerPrize && form.perKillReward) {
      const exampleKills = 5;
      const exampleTotal =
        Number(form.winnerPrize) +
        exampleKills * Number(form.perKillReward);
      return (
        <div className="bg-[#1DB954]/5 border border-[#1DB954]/10 rounded-xl px-4 py-3 mt-2">
          <p className="text-[#1DB954]/70 text-[10px] font-black uppercase tracking-widest mb-1">
            Payout Preview
          </p>
          <p className="text-white/50 text-[10px]">
            Winner (5 kills): ₹{exampleTotal.toLocaleString("en-IN")}
          </p>
          <p className="text-white/50 text-[10px]">
            Kill only (3 kills): ₹
            {(3 * Number(form.perKillReward)).toLocaleString("en-IN")}
          </p>
        </div>
      );
    }

    if (isCS && form.prizePool && form.matchType) {
      const match = form.matchType.match(/^(\d+)v\d+$/i);
      if (match) {
        const teamSize = parseInt(match[1], 10);
        const perPlayer = Math.floor(Number(form.prizePool) / teamSize);
        return (
          <div className="bg-[#1DB954]/5 border border-[#1DB954]/10 rounded-xl px-4 py-3 mt-2">
            <p className="text-[#1DB954]/70 text-[10px] font-black uppercase tracking-widest mb-1">
              Payout Preview
            </p>
            <p className="text-white/50 text-[10px]">
              Winning team ({teamSize} players): ₹
              {perPlayer.toLocaleString("en-IN")} per player
            </p>
          </div>
        );
      }
    }

    if (isLW && form.prizePool) {
      return (
        <div className="bg-[#1DB954]/5 border border-[#1DB954]/10 rounded-xl px-4 py-3 mt-2">
          <p className="text-[#1DB954]/70 text-[10px] font-black uppercase tracking-widest mb-1">
            Payout Preview
          </p>
          <p className="text-white/50 text-[10px]">
            Winner takes all: ₹
            {Number(form.prizePool).toLocaleString("en-IN")}
          </p>
        </div>
      );
    }

    return null;
  };

  // ── Render ─────────────────────────────────────────────────────────

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
        
        <header className="mb-8">
          <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-[0.4em] mb-2">
            Admin · Create
          </p>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            New Tournament
          </h1>
        </header>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* ── Basic Info ──────────────────────────────────────────── */}
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 flex flex-col gap-5">
            <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Basic Info
            </h2>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Tournament Title *
              </label>
              <input
                type="text"
                name="title"
                required
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. Friday Night Clash #12"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Banner Image URL
              </label>
              <input
                type="url"
                name="banner"
                value={form.banner}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Description
              </label>
              <textarea
                name="description"
                rows={3}
                value={form.description}
                onChange={handleChange}
                placeholder="Brief description..."
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors resize-none"
              />
            </div>
          </div>

          {/* ── Match Mode ──────────────────────────────────────────── */}
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 flex flex-col gap-5">
            <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Match Mode
            </h2>

            {/* Category selector */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
                Category *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {MATCH_CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() =>
                      handleChange({
                        target: { name: "matchCategory", value: cat.value },
                      })
                    }
                    className={`p-4 rounded-xl border text-left transition-all ${
                      form.matchCategory === cat.value
                        ? "bg-[#1DB954]/10 border-[#1DB954]/40 text-white"
                        : "bg-black/40 border-white/10 text-white/40 hover:border-white/20 hover:text-white/70"
                    }`}
                  >
                    <p className="font-black text-xs uppercase tracking-widest mb-1">
                      {cat.label}
                    </p>
                    <p className="text-[10px] opacity-60">
                      {cat.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Match format — CS only */}
            {showMatchType && (
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                  Match Format *
                </label>
                <div className="flex gap-3">
                  {MATCH_TYPES_BY_CATEGORY.CLASH_SQUAD.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        handleChange({
                          target: { name: "matchType", value: type },
                        })
                      }
                      className={`flex-1 py-3 rounded-xl border font-black text-xs uppercase tracking-widest transition-all ${
                        form.matchType === type
                          ? "bg-[#1DB954]/10 border-[#1DB954]/40 text-[#1DB954]"
                          : "bg-black/40 border-white/10 text-white/40 hover:border-white/20"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Slot count info */}
            <div className="bg-black/40 rounded-xl p-4">
              <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
                Total Slots
              </p>
              <p className="text-white font-black text-sm">
                {derivedMaxPlayers !== null
                  ? `${derivedMaxPlayers} slots (auto-derived)`
                  : form.maxPlayers
                  ? `${form.maxPlayers} slots`
                  : "Set max players below"}
              </p>
            </div>

            {/* Map */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Map *
              </label>
              <select
                name="map"
                value={form.map}
                onChange={handleChange}
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1DB954] transition-colors"
              >
                {MAPS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* ── Schedule ────────────────────────────────────────────── */}
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 flex flex-col gap-5">
            <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Schedule
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                  Start Time *
                </label>
                <input
                  type="datetime-local"
                  name="startTime"
                  required
                  value={form.startTime}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1DB954] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                  End Time *
                </label>
                <input
                  type="datetime-local"
                  name="endTime"
                  required
                  value={form.endTime}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1DB954] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* ── Prize & Capacity ─────────────────────────────────────── */}
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 flex flex-col gap-5">
            <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Prize & Capacity
            </h2>

            <div
              className={`grid gap-4 ${
                showMaxPlayersInput
                  ? "grid-cols-1 sm:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2"
              }`}
            >
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                  Prize Pool (₹) *
                </label>
                <input
                  type="number"
                  name="prizePool"
                  required
                  min={1}
                  value={form.prizePool}
                  onChange={handleChange}
                  placeholder="e.g. 5000"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                  Entry Fee (₹)
                </label>
                <input
                  type="number"
                  name="entryFee"
                  min={0}
                  value={form.entryFee}
                  onChange={handleChange}
                  placeholder="0 = Free"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors"
                />
              </div>

              {/* Max players — BR only, free input */}
              {showMaxPlayersInput && (
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                    Max Players *
                  </label>
                  <input
                    type="number"
                    name="maxPlayers"
                    required
                    min={2}
                    value={form.maxPlayers}
                    onChange={handleChange}
                    placeholder="e.g. 48"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors"
                  />
                </div>
              )}
            </div>

            {/* BR reward fields */}
            {showRewardFields && (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                      Winner Prize (₹) *
                    </label>
                    <input
                      type="number"
                      name="winnerPrize"
                      required={isBR}
                      min={0}
                      value={form.winnerPrize}
                      onChange={handleChange}
                      placeholder="e.g. 200"
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors"
                    />
                    <p className="text-white/20 text-[9px] mt-1">
                      Flat prize for placement #1
                    </p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                      Per Kill Reward (₹) *
                    </label>
                    <input
                      type="number"
                      name="perKillReward"
                      required={isBR}
                      min={0}
                      value={form.perKillReward}
                      onChange={handleChange}
                      placeholder="e.g. 7"
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors"
                    />
                    <p className="text-white/20 text-[9px] mt-1">
                      Awarded per kill to all players
                    </p>
                  </div>
                </div>

                {/* Payout preview */}
                {renderPayoutPreview()}
              </div>
            )}

            {/* CS and LW payout preview */}
            {!showRewardFields && renderPayoutPreview()}
          </div>

          {/* ── Rules ────────────────────────────────────────────────── */}
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 flex flex-col gap-4">
            <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Rules
            </h2>

            <div className="flex flex-col gap-2">
              {rules.map((rule, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-black/40 border border-white/5 rounded-xl px-4 py-3"
                >
                  <span className="text-[#1DB954] font-black text-[10px] shrink-0">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-white/70 text-sm flex-1">
                    {rule}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeRule(i)}
                    className="text-white/20 hover:text-red-400 transition-colors font-black text-xs shrink-0"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                value={newRule}
                onChange={(e) => setNewRule(e.target.value)}
                onKeyDown={handleRuleKeyDown}
                placeholder="Add a rule and press Enter..."
                className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors"
              />
              <button
                type="button"
                onClick={addRule}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-xs px-4 rounded-xl transition-all"
              >
                Add
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-4">
              <p className="text-red-400 text-[11px] font-black uppercase tracking-widest">
                {error}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs py-5 rounded-xl hover:bg-white transition-all disabled:opacity-50"
          >
            {loading ? "Creating Tournament..." : "Deploy Tournament"}
          </button>
        </form>
      </div>
    </div>
  );
}