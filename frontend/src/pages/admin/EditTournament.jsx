// frontend/src/pages/admin/EditTournament.jsx

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTournamentById } from "../../api/tournaments.api";
import { editTournament } from "../../api/admin.api";

// ── Helpers ────────────────────────────────────────────────────────────────

/**
 * toDatetimeLocal — converts an ISO date string to the format required
 * by datetime-local inputs: "YYYY-MM-DDTHH:mm"
 */
function toDatetimeLocal(isoString) {
  if (!isoString) return "";
  const date = new Date(isoString);
  // Pad to ensure correct format.
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
}

/**
 * toISOString — converts a datetime-local input value to UTC ISO string.
 */
function toISOString(localDatetime) {
  if (!localDatetime) return null;
  return new Date(localDatetime).toISOString();
}

const CATEGORY_LABELS = {
  BATTLE_ROYALE: "Battle Royale",
  CLASH_SQUAD: "Clash Squad",
  LONE_WOLF: "Lone Wolf",
};

// ── Page ───────────────────────────────────────────────────────────────────

export default function EditTournament() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tournament, setTournament] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form state — initialized from fetched tournament data.
  const [form, setForm] = useState({
    title: "",
    description: "",
    banner: "",
    startTime: "",
    endTime: "",
    prizePool: "",
    winnerPrize: "",
    perKillReward: "",
  });

  // Rules managed as a list.
  const [rules, setRules] = useState([]);
  const [newRule, setNewRule] = useState("");

  // ── Fetch existing tournament ──────────────────────────────────────

  useEffect(() => {
    if (!id) return;

    const fetchTournament = async () => {
      try {
        setFetchLoading(true);
        setFetchError(null);
        const data = await getTournamentById(id);
        setTournament(data);

        // Pre-fill form with existing values.
        setForm({
          title: data.title ?? "",
          description: data.description ?? "",
          banner: data.banner ?? "",
          startTime: toDatetimeLocal(data.startTime),
          endTime: toDatetimeLocal(data.endTime),
          prizePool: data.prizePool ?? "",
          winnerPrize: data.winnerPrize ?? 0,
          perKillReward: data.perKillReward ?? 0,
        });
        setRules(data.rules ?? []);
      } catch (err) {
        console.error("Failed to fetch tournament:", err);
        setFetchError("Could not load tournament details.");
      } finally {
        setFetchLoading(false);
      }
    };

    fetchTournament();
  }, [id]);

  // ── Form handlers ──────────────────────────────────────────────────

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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

    if (end <= start) return "End time must be after start time.";

    if (!form.prizePool || Number(form.prizePool) <= 0) {
      return "Prize pool must be greater than 0.";
    }
    if (Number(form.winnerPrize) < 0) {
      return "Winner prize must be a non-negative number.";
    }
    if (Number(form.perKillReward) < 0) {
      return "Per kill reward must be a non-negative number.";
    }

    return null;
  };

  // ── Submit ─────────────────────────────────────────────────────────

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);

    const validationError = validate();
    if (validationError) {
      setSubmitError(validationError);
      return;
    }

    setSubmitLoading(true);

    try {
      await editTournament(id, {
        title: form.title.trim(),
        description: form.description.trim(),
        banner: form.banner.trim() || undefined,
        rules,
        startTime: toISOString(form.startTime),
        endTime: toISOString(form.endTime),
        prizePool: Number(form.prizePool),
        winnerPrize: Number(form.winnerPrize),
        perKillReward: Number(form.perKillReward),
      });

      setSubmitSuccess(true);
      // Brief success state then redirect.
      setTimeout(() => navigate("/admin"), 1200);
    } catch (err) {
      const message =
        err.response?.data?.message ??
        err.response?.data?.error ??
        "Failed to update tournament. Please try again.";
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
            Loading tournament...
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

  const hasParticipants = (tournament.participants?.length ?? 0) > 0;
  const isUpcoming = tournament.status === "UPCOMING";
  const timesLocked = !isUpcoming;

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
          <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-[0.4em] mb-2">
            Admin · Edit
          </p>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            Edit Tournament
          </h1>
        </header>

        {/* Locked fields notice */}
        {(hasParticipants || timesLocked) && (
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl px-5 py-4 mb-6 flex flex-col gap-1">
            {hasParticipants && (
              <p className="text-yellow-400/80 text-[10px] font-black uppercase tracking-widest">
                ⚠ Match Category, Match Type, and Max Players are locked — players have already registered.
              </p>
            )}
            {timesLocked && (
              <p className="text-yellow-400/80 text-[10px] font-black uppercase tracking-widest">
                ⚠ Start and End times cannot be changed — tournament is {tournament.status.toLowerCase()}.
              </p>
            )}
          </div>
        )}

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
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors resize-none"
              />
            </div>
          </div>

          {/* ── Section: Locked Mode Info ───────────────────────────── */}
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 flex flex-col gap-4">
            <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Match Mode
              {hasParticipants && (
                <span className="ml-2 text-yellow-400/60">— Locked</span>
              )}
            </h2>

            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  label: "Category",
                  value:
                    CATEGORY_LABELS[tournament.matchCategory] ??
                    tournament.matchCategory,
                },
                {
                  label: "Format",
                  value: tournament.matchType ?? "—",
                },
                {
                  label: "Max Players",
                  value: tournament.maxPlayers,
                },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-black/40 rounded-xl p-4 text-center"
                >
                  <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-white/60 text-sm font-black">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section: Schedule ───────────────────────────────────── */}
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 flex flex-col gap-5">
            <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Schedule
              {timesLocked && (
                <span className="ml-2 text-yellow-400/60">— Locked</span>
              )}
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
                  disabled={timesLocked}
                  value={form.startTime}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1DB954] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
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
                  disabled={timesLocked}
                  value={form.endTime}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1DB954] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* ── Section: Prize & Rewards ────────────────────────────── */}
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 flex flex-col gap-5">
            <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Prize & Rewards
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
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1DB954] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                  Winner Prize (₹)
                </label>
                <input
                  type="number"
                  name="winnerPrize"
                  min={0}
                  value={form.winnerPrize}
                  onChange={handleChange}
                  placeholder="BR only"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                  Per Kill Reward (₹)
                </label>
                <input
                  type="number"
                  name="perKillReward"
                  min={0}
                  value={form.perKillReward}
                  onChange={handleChange}
                  placeholder="BR only"
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

            {/* Existing rules */}
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
              {rules.length === 0 && (
                <p className="text-white/20 text-xs text-center py-4">
                  No rules added yet.
                </p>
              )}
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

          {/* Error */}
          {submitError && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-4">
              <p className="text-red-400 text-[11px] font-black uppercase tracking-widest">
                {submitError}
              </p>
            </div>
          )}

          {/* Success */}
          {submitSuccess && (
            <div className="bg-[#1DB954]/10 border border-[#1DB954]/20 rounded-xl px-5 py-4">
              <p className="text-[#1DB954] text-[11px] font-black uppercase tracking-widest">
                Tournament updated successfully. Redirecting...
              </p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitLoading || submitSuccess}
            className="w-full bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs py-5 rounded-xl hover:bg-white transition-all disabled:opacity-50"
          >
            {submitLoading ? "Saving Changes..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}