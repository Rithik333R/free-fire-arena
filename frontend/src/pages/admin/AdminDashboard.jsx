// frontend/src/pages/admin/AdminDashboard.jsx

import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { getAdminTournaments, cancelTournament } from "../../api/admin.api";
import { getTournamentSlots } from "../../api/tournaments.api";

// ── Helpers ────────────────────────────────────────────────────────────────

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

const FILTER_LABELS = {
  ALL: "All",
  LIVE: "Live",
  UPCOMING: "Upcoming",
  AWAITING_RESULTS: "Pending Results",
  COMPLETED: "Completed",
  CANCELED: "Canceled",
};

const STATUS_FILTERS = [
  "ALL",
  "LIVE",
  "AWAITING_RESULTS",
  "UPCOMING",
  "COMPLETED",
  "CANCELED",
];

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

// ── Slot Viewer ────────────────────────────────────────────────────────────

/**
 * AdminSlotViewer — read-only slot occupancy grid for admin dashboard.
 * Shows IGN per occupied slot. Grouped by team for CS tournaments.
 */
function AdminSlotViewer({ tournament, slotMap }) {
  const { slots, totalSlots, availableCount } = slotMap;
  const { matchCategory, participants } = tournament;

  // Build a lookup: slotNumber → participant IGN.
  const slotToIGN = {};
  (participants ?? []).forEach((p) => {
    if (p.slotNumber !== null && p.slotNumber !== undefined) {
      slotToIGN[p.slotNumber] = p.ign;
    }
  });

  const team1Slots = slots.filter((s) => s.teamNumber === 1);
  const team2Slots = slots.filter((s) => s.teamNumber === 2);
  const soloSlots = slots.filter((s) => s.teamNumber === null);

  const renderSlotCell = (slot) => {
    const ign = slotToIGN[slot.slotNumber];
    const occupied = slot.occupied;

    return (
      <div
        key={slot.slotNumber}
        className={`rounded-xl border p-2 min-h-[52px] flex flex-col items-center justify-center gap-0.5 ${
          occupied
            ? "bg-[#1DB954]/5 border-[#1DB954]/20"
            : "bg-black/20 border-white/5 opacity-40"
        }`}
      >
        <span
          className={`text-[10px] font-black ${
            occupied ? "text-white/60" : "text-white/20"
          }`}
        >
          {slot.slotNumber}
        </span>
        {occupied && ign ? (
          <span className="text-[#1DB954] text-[9px] font-black truncate max-w-full px-1 text-center leading-tight">
            {ign}
          </span>
        ) : occupied ? (
          <span className="text-white/30 text-[9px]">—</span>
        ) : (
          <span className="text-white/10 text-[9px]">empty</span>
        )}
      </div>
    );
  };

  return (
    <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-4">
      {/* Summary */}
      <div className="flex items-center justify-between">
        <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">
          Slot Occupancy
        </p>
        <p className="text-white/40 text-[10px]">
          {totalSlots - availableCount} / {totalSlots} filled
        </p>
      </div>

      {/* CLASH SQUAD — two team columns */}
      {matchCategory === "CLASH_SQUAD" && (
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[#1DB954] text-[9px] font-black uppercase tracking-widest text-center">
              Team 1
            </p>
            <div className="flex flex-col gap-1.5">
              {team1Slots.map((slot) => renderSlotCell(slot))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-blue-400 text-[9px] font-black uppercase tracking-widest text-center">
              Team 2
            </p>
            <div className="flex flex-col gap-1.5">
              {team2Slots.map((slot) => renderSlotCell(slot))}
            </div>
          </div>
        </div>
      )}

      {/* BATTLE ROYALE — flat grid */}
      {matchCategory === "BATTLE_ROYALE" && (
        <div className="grid grid-cols-6 sm:grid-cols-8 gap-1.5">
          {soloSlots.map((slot) => renderSlotCell(slot))}
        </div>
      )}

      {/* LONE WOLF — two slots */}
      {matchCategory === "LONE_WOLF" && (
        <div className="grid grid-cols-2 gap-3">
          {soloSlots.map((slot) => renderSlotCell(slot))}
        </div>
      )}
    </div>
  );
}

// ── Tournament Admin Card ──────────────────────────────────────────────────

function TournamentAdminCard({ tournament, onCancelSuccess }) {
  const navigate = useNavigate();
  const [canceling, setCanceling] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [slotMap, setSlotMap] = useState(null);
  const [slotLoading, setSlotLoading] = useState(false);
  const [slotError, setSlotError] = useState(null);

  const formattedDate = tournament.startTime
    ? new Date(tournament.startTime).toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "TBA";

  const participantCount = tournament.participants?.length ?? 0;
  const hasResults =
    Array.isArray(tournament.results) && tournament.results.length > 0;

  // Slot viewer is only relevant for active tournaments.
  const showSlotViewer =
    tournament.status === "UPCOMING" || tournament.status === "LIVE";

  // ── Slot fetch ─────────────────────────────────────────────────────
  const handleToggleSlots = async () => {
    if (expanded) {
      setExpanded(false);
      return;
    }

    setExpanded(true);

    // Only fetch if we don't have data yet.
    if (slotMap) return;

    try {
      setSlotLoading(true);
      setSlotError(null);
      const data = await getTournamentSlots(tournament._id);
      setSlotMap(data);
    } catch (err) {
      console.error("Failed to fetch slot map:", err);
      setSlotError("Could not load slot data.");
    } finally {
      setSlotLoading(false);
    }
  };

  // ── Cancel handler ─────────────────────────────────────────────────
  const handleCancel = async () => {
    const confirmed = window.confirm(
      `Cancel "${tournament.title}"?\n\nThis cannot be undone. The tournament will be marked as CANCELED and hidden from the player lobby.`
    );
    if (!confirmed) return;

    setCanceling(true);
    try {
      await cancelTournament(tournament._id);
      onCancelSuccess();
    } catch (err) {
      const message =
        err.response?.data?.message ?? "Failed to cancel tournament.";
      alert(message);
    } finally {
      setCanceling(false);
    }
  };

  // ── Action buttons ─────────────────────────────────────────────────
  const actions = [];

  const isEditable =
    tournament.status === "UPCOMING" ||
    tournament.status === "LIVE" ||
    tournament.status === "AWAITING_RESULTS";

  if (isEditable) {
    actions.push({
      label: "Edit",
      onClick: () =>
        navigate(`/admin/tournaments/${tournament._id}/edit`),
      style:
        "bg-white/5 hover:bg-white/10 border border-white/10 text-white/60",
    });
  }

  if (tournament.status === "UPCOMING") {
    actions.push({
      label: "Set Credentials",
      onClick: () =>
        navigate(`/admin/tournaments/${tournament._id}/room`),
      style:
        "bg-[#1DB954]/10 hover:bg-[#1DB954]/20 border border-[#1DB954]/20 text-[#1DB954]",
    });
  }

  if (tournament.status === "AWAITING_RESULTS") {
    actions.push({
      label: "Publish Results",
      onClick: () =>
        navigate(`/admin/tournaments/${tournament._id}/results`),
      style:
        "bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400",
    });
  }

  if (tournament.status === "COMPLETED" && hasResults) {
    actions.push({
      label: "View Results",
      onClick: () =>
        navigate(`/tournaments/${tournament._id}/results`),
      style:
        "bg-white/5 hover:bg-white/10 border border-white/10 text-white/60",
    });
  }

  if (tournament.status === "COMPLETED" && !hasResults) {
    actions.push({
      label: "Add Results",
      onClick: () =>
        navigate(`/admin/tournaments/${tournament._id}/results`),
      style:
        "bg-white/5 hover:bg-white/10 border border-white/10 text-white/40",
    });
  }

  // ── Render ─────────────────────────────────────────────────────────
  return (
    <div
      className={`bg-[#121212] border rounded-2xl p-6 flex flex-col gap-4 transition-all ${
        tournament.status === "CANCELED"
          ? "border-red-900/20 opacity-60"
          : "border-white/5 hover:border-white/10"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-black uppercase tracking-tight text-base truncate">
            {tournament.title}
          </h3>
          <p className="text-white/30 text-[11px] mt-1">
            {formattedDate}
          </p>
        </div>
        <StatusBadge status={tournament.status} />
      </div>

      {/* Meta row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-black/40 rounded-xl p-3 text-center">
          <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
            Mode
          </p>
          <p className="text-white text-[11px] font-black uppercase">
            {tournament.matchCategory?.replace("_", " ") ?? "—"}
          </p>
        </div>
        <div className="bg-black/40 rounded-xl p-3 text-center">
          <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
            Players
          </p>
          <p className="text-white text-[11px] font-black">
            {participantCount} / {tournament.maxPlayers}
          </p>
        </div>
        <div className="bg-black/40 rounded-xl p-3 text-center">
          <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
            Prize Pool
          </p>
          <p className="text-[#1DB954] text-[11px] font-black">
            ₹{tournament.prizePool?.toLocaleString("en-IN") ?? "0"}
          </p>
        </div>
      </div>

      {/* Action buttons */}
      {actions.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {actions.map((action) => (
            <button
              key={action.label}
              onClick={action.onClick}
              className={`flex-1 text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl transition-all ${action.style}`}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}

      {/* Slot viewer toggle — UPCOMING and LIVE only */}
      {showSlotViewer && (
        <button
          onClick={handleToggleSlots}
          className="w-full text-[10px] font-black uppercase tracking-widest py-2 rounded-xl border border-white/5 text-white/30 hover:text-white/60 hover:border-white/10 transition-all flex items-center justify-center gap-2"
        >
          <span>{expanded ? "▲ Hide Slots" : "▼ View Slots"}</span>
          {!expanded && participantCount > 0 && (
            <span className="text-white/20">
              ({participantCount} registered)
            </span>
          )}
        </button>
      )}

      {/* Slot viewer content */}
      {expanded && showSlotViewer && (
        <>
          {slotLoading && (
            <div className="flex items-center justify-center py-6">
              <div className="w-5 h-5 border-2 border-[#1DB954] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          {slotError && (
            <p className="text-red-400/60 text-[10px] font-black uppercase tracking-widest text-center py-4">
              {slotError}
            </p>
          )}
          {slotMap && !slotLoading && (
            <AdminSlotViewer
              tournament={tournament}
              slotMap={slotMap}
            />
          )}
        </>
      )}

      {/* Cancel button */}
      {tournament.status === "UPCOMING" && (
        <button
          onClick={handleCancel}
          disabled={canceling}
          className="w-full text-[10px] font-black uppercase tracking-widest py-2 rounded-xl border border-red-500/20 text-red-500/60 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/40 transition-all disabled:opacity-30"
        >
          {canceling ? "Canceling..." : "Cancel Tournament"}
        </button>
      )}
    </div>
  );
}

// ── Summary Card ───────────────────────────────────────────────────────────

function SummaryCard({ label, value, accent, urgent }) {
  return (
    <div
      className={`border rounded-2xl p-5 text-center ${
        urgent
          ? "bg-blue-500/5 border-blue-500/20"
          : "bg-[#121212] border-white/5"
      }`}
    >
      <p
        className={`font-black text-2xl mb-1 ${
          urgent
            ? "text-blue-400"
            : accent
            ? "text-[#1DB954]"
            : "text-white"
        }`}
      >
        {value}
      </p>
      <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [tournaments, setTournaments] = useState([]);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTournaments = useCallback(async () => {
    try {
      setError(null);
      const data = await getAdminTournaments();
      setTournaments(data);
    } catch (err) {
      console.error("Failed to fetch admin tournaments:", err);
      setError("Failed to load tournaments. Please try again.");
    }
  }, []);

  useEffect(() => {
    const initialLoad = async () => {
      setLoading(true);
      await fetchTournaments();
      setLoading(false);
    };
    initialLoad();
  }, [fetchTournaments]);

  const filtered =
    activeFilter === "ALL"
      ? tournaments
      : tournaments.filter((t) => t.status === activeFilter);

  const counts = {
    total: tournaments.length,
    live: tournaments.filter((t) => t.status === "LIVE").length,
    upcoming: tournaments.filter((t) => t.status === "UPCOMING").length,
    awaitingResults: tournaments.filter(
      (t) => t.status === "AWAITING_RESULTS"
    ).length,
    completed: tournaments.filter((t) => t.status === "COMPLETED").length,
    canceled: tournaments.filter((t) => t.status === "CANCELED").length,
  };

  // ── Render: loading ──────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#1DB954] border-t-transparent rounded-full animate-spin" />
          <p className="text-white/30 text-xs font-black uppercase tracking-widest">
            Loading command center...
          </p>
        </div>
      </div>
    );
  }

  // ── Render: error ────────────────────────────────────────────────────
  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-red-400 text-sm font-black uppercase tracking-widest mb-6">
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-white text-black font-black uppercase tracking-widest text-xs px-8 py-3 rounded-xl hover:bg-[#1DB954] transition-all"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // ── Render: main ─────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">

        {/* Page header */}
        <header className="mb-8 flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-[0.4em] mb-2">
              Admin · {user?.username}
            </p>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
              Command Center
            </h1>
          </div>
          <button
            onClick={() => navigate("/admin/tournaments/new")}
            className="bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs px-6 py-3 rounded-xl hover:bg-white transition-all shrink-0"
          >
            + New Tournament
          </button>
        </header>

        {/* Summary stats */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
          <SummaryCard label="Total" value={counts.total} />
          <SummaryCard
            label="Live"
            value={counts.live}
            accent={counts.live > 0}
          />
          <SummaryCard
            label="Pending"
            value={counts.awaitingResults}
            urgent={counts.awaitingResults > 0}
          />
          <SummaryCard label="Upcoming" value={counts.upcoming} />
          <SummaryCard label="Completed" value={counts.completed} />
          <SummaryCard label="Canceled" value={counts.canceled} />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {STATUS_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeFilter === f
                  ? "bg-[#1DB954] text-black"
                  : "bg-white/5 text-white/40 hover:text-white hover:bg-white/10"
              }`}
            >
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>

        {/* Tournament list */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center bg-[#121212] border border-white/5 rounded-2xl">
            <span className="text-3xl mb-4">📋</span>
            <p className="text-white/30 text-sm font-black uppercase tracking-widest">
              No{" "}
              {activeFilter === "ALL"
                ? ""
                : FILTER_LABELS[activeFilter].toLowerCase()}{" "}
              tournaments
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((tournament) => (
              <TournamentAdminCard
                key={tournament._id}
                tournament={tournament}
                onCancelSuccess={fetchTournaments}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}