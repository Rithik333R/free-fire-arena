// frontend/src/pages/Tournaments.jsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTournaments } from "../api/tournaments.api";

// ── Helpers ────────────────────────────────────────────────────────────────

const STATUS_FILTERS = ["ALL", "LIVE", "UPCOMING", "AWAITING_RESULTS", "COMPLETED"];

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

// Human-readable filter tab labels.
const FILTER_LABELS = {
  ALL: "All",
  LIVE: "Live",
  UPCOMING: "Upcoming",
  AWAITING_RESULTS: "Pending Results",
  COMPLETED: "Completed",
};

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

// ── Sub-components ─────────────────────────────────────────────────────────

function TournamentCard({ tournament }) {
  const navigate = useNavigate();

  const formattedDate = tournament.startTime
    ? new Date(tournament.startTime).toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "TBA";

  const spotsLeft =
    tournament.maxPlayers - (tournament.participants?.length ?? 0);
  const isFull = spotsLeft <= 0;

  return (
    <div className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all flex flex-col">
      {/* Banner */}
      {tournament.banner && (
        <div className="h-36 overflow-hidden">
          <img
            src={tournament.banner}
            alt={tournament.title}
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      )}

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-white font-black uppercase tracking-tight text-base leading-tight flex-1 min-w-0">
            {tournament.title}
          </h3>
          <StatusBadge status={tournament.status} />
        </div>

        {/* Meta grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-black/40 rounded-xl p-3">
            <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
              Mode
            </p>
            <p className="text-white text-[11px] font-black uppercase">
              {tournament.matchCategory?.replace("_", " ") ?? "—"}
            </p>
          </div>
          <div className="bg-black/40 rounded-xl p-3">
            <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
              Prize Pool
            </p>
            <p className="text-[#1DB954] text-[11px] font-black">
              ₹{tournament.prizePool?.toLocaleString("en-IN") ?? "0"}
            </p>
          </div>
          <div className="bg-black/40 rounded-xl p-3">
            <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
              Starts
            </p>
            <p className="text-white text-[11px] font-black">
              {formattedDate}
            </p>
          </div>
          <div className="bg-black/40 rounded-xl p-3">
            <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
              Spots Left
            </p>
            <p
              className={`text-[11px] font-black ${
                isFull ? "text-red-400" : "text-white"
              }`}
            >
              {isFull
                ? "FULL"
                : `${spotsLeft} / ${tournament.maxPlayers}`}
            </p>
          </div>
        </div>

        {/* Entry fee */}
        <div className="flex items-center justify-between">
          <span className="text-white/30 text-[10px] uppercase tracking-widest font-black">
            Entry Fee
          </span>
          <span className="text-white text-[11px] font-black">
            {tournament.entryFee > 0
              ? `₹${tournament.entryFee.toLocaleString("en-IN")}`
              : "FREE"}
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate(`/tournaments/view/${tournament._id}`)}
          className="w-full mt-auto bg-white/5 hover:bg-[#1DB954] hover:text-black border border-white/10 hover:border-transparent text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-xl transition-all"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

function FilterTab({ label, active, onClick, count }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
        active
          ? "bg-[#1DB954] text-black"
          : "bg-white/5 text-white/40 hover:text-white hover:bg-white/10"
      }`}
    >
      {label}
      {count !== undefined && (
        <span
          className={`ml-2 ${active ? "text-black/60" : "text-white/20"}`}
        >
          {count}
        </span>
      )}
    </button>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAllTournaments();
        setTournaments(data);
      } catch (err) {
        console.error("Failed to fetch tournaments:", err);
        setError("Failed to load tournaments. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  // Client-side filter.
  const filtered =
    activeFilter === "ALL"
      ? tournaments
      : tournaments.filter((t) => t.status === activeFilter);

  // Count per status for filter tab badges.
  const counts = STATUS_FILTERS.reduce((acc, f) => {
    acc[f] =
      f === "ALL"
        ? tournaments.length
        : tournaments.filter((t) => t.status === f).length;
    return acc;
  }, {});

  // ── Render: loading ──────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#1DB954] border-t-transparent rounded-full animate-spin" />
          <p className="text-white/30 text-xs font-black uppercase tracking-widest">
            Loading tournaments...
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
      <div className="max-w-5xl mx-auto">

        {/* Page header */}
        <header className="mb-8">
          <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-[0.4em] mb-2">
            Arena Lobby
          </p>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            Tournaments
          </h1>
        </header>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {STATUS_FILTERS.map((f) => (
            <FilterTab
              key={f}
              label={FILTER_LABELS[f]}
              active={activeFilter === f}
              onClick={() => setActiveFilter(f)}
              count={counts[f]}
            />
          ))}
        </div>

        {/* Tournament grid or empty state */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-white/30 text-sm font-black uppercase tracking-widest">
              No {activeFilter === "ALL" ? "" : FILTER_LABELS[activeFilter].toLowerCase()}{" "}
              tournaments found.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((tournament) => (
              <TournamentCard
                key={tournament._id}
                tournament={tournament}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}