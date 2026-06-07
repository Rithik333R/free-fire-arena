// frontend/src/pages/admin/CreateTournament.jsx

import { useState } from "react";
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
    description: "Solo players, 1v1 format",
  },
];

// matchType options are only shown for CLASH_SQUAD and LONE_WOLF.
// BATTLE_ROYALE does not use matchType — it is always a full room.
const MATCH_TYPES_BY_CATEGORY = {
  CLASH_SQUAD: ["1v1", "2v2", "3v3", "4v4"],
  LONE_WOLF: ["1v1"],
  BATTLE_ROYALE: [], // not applicable
};

const MAPS = ["Bermuda", "Kalahari", "Purgatory", "Alpine", "Nexterra"];

const DEFAULT_RULES = [
  "No hacks or cheats of any kind",
  "Join the room 15 minutes before start time",
  "Respect all players and admins",
];

// ── Helpers ────────────────────────────────────────────────────────────────

/**
 * Converts a local datetime-local input value to a UTC ISO string.
 * The datetime-local input returns local time — we store as ISO for the backend.
 */
function toISOString(localDatetime) {
  if (!localDatetime) return null;
  return new Date(localDatetime).toISOString();
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function CreateTournament() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Form state — matchCategory is now a first-class field.
  const [form, setForm] = useState({
    title: "",
    game: "Free Fire",
    matchCategory: "CLASH_SQUAD",   // BUG-005 fix: included from the start
    matchType: "4v4",
    map: "Bermuda",
    description: "",
    banner: "",
    startTime: "",
    endTime: "",
    entryFee: 0,
    prizePool: "",
    maxPlayers: "",
  });

  // Rules managed as a list of strings, not a single textarea.
  const [rules, setRules] = useState([...DEFAULT_RULES]);
  const [newRule, setNewRule] = useState("");

  // ── Form handlers ──────────────────────────────────────────────────────

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: value };

      // When matchCategory changes, reset matchType to a valid value
      // for the new category — or clear it for BATTLE_ROYALE.
      if (name === "matchCategory") {
        const types = MATCH_TYPES_BY_CATEGORY[value];
        updated.matchType = types.length > 0 ? types[0] : "";
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

  // ── Validation ─────────────────────────────────────────────────────────

  const validate = () => {
    if (!form.title.trim()) return "Tournament title is required.";
    if (!form.startTime) return "Start time is required.";
    if (!form.endTime) return "End time is required.";

    const start = new Date(form.startTime);
    const end = new Date(form.endTime);
    if (end <= start) return "End time must be after start time.";
    if (start <= new Date()) return "Start time must be in the future.";

    if (!form.prizePool || Number(form.prizePool) <= 0)
      return "Prize pool must be greater than 0.";
    if (!form.maxPlayers || Number(form.maxPlayers) < 2)
      return "Max players must be at least 2.";
    if (rules.length === 0) return "At least one rule is required.";

    return null;
  };

  // ── Submit ─────────────────────────────────────────────────────────────

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
      // Build payload — only include matchType when it is applicable.
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

      // BUG-006 fix: only send matchType when the category supports it.
      // BATTLE_ROYALE does not use matchType — omitting it lets the backend
      // default apply without triggering a schema validation error.
      if (form.matchCategory !== "BATTLE_ROYALE" && form.matchType) {
        payload.matchType = form.matchType;
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

  // ── Derived ────────────────────────────────────────────────────────────

  const matchTypes = MATCH_TYPES_BY_CATEGORY[form.matchCategory] ?? [];
  const showMatchType = matchTypes.length > 0;

  // ── Render ─────────────────────────────────────────────────────────────

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
          <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-[0.4em] mb-2">
            Admin · Create
          </p>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            New Tournament
          </h1>
        </header>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* ── Section: Basic Info ─────────────────────────────────── */}
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 flex flex-col gap-5">
            <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Basic Info
            </h2>

            {/* Title */}
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

            {/* Banner URL */}
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

            {/* Description */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Description
              </label>
              <textarea
                name="description"
                rows={3}
                value={form.description}
                onChange={handleChange}
                placeholder="Brief description of the tournament..."
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors resize-none"
              />
            </div>
          </div>

          {/* ── Section: Match Mode ─────────────────────────────────── */}
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 flex flex-col gap-5">
            <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Match Mode
            </h2>

            {/* matchCategory — source of truth for tournament mode */}
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
                    <p className="text-[10px] opacity-60">{cat.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* matchType — only shown when applicable */}
            {showMatchType && (
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                  Match Format *
                </label>
                <div className="flex gap-3">
                  {matchTypes.map((type) => (
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

          {/* ── Section: Schedule ───────────────────────────────────── */}
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

          {/* ── Section: Prize & Capacity ────────────────────────────── */}
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 flex flex-col gap-5">
            <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Prize & Capacity
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            </div>
          </div>

          {/* ── Section: Rules ───────────────────────────────────────── */}
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 flex flex-col gap-4">
            <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Rules
            </h2>

            {/* Existing rules list */}
            <div className="flex flex-col gap-2">
              {rules.map((rule, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-black/40 border border-white/5 rounded-xl px-4 py-3"
                >
                  <span className="text-[#1DB954] font-black text-[10px] shrink-0">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-white/70 text-sm flex-1">{rule}</span>
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

            {/* Add new rule */}
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

          {/* Error display */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-4">
              <p className="text-red-400 text-[11px] font-black uppercase tracking-widest">
                {error}
              </p>
            </div>
          )}

          {/* Submit */}
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