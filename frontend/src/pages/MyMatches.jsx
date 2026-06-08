// frontend/src/pages/MyMatches.jsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getRegisteredTournaments } from "../api/tournaments.api";

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

function MatchCard({ match, userId }) {
  const navigate = useNavigate();

  const myParticipant = match.participants?.find(
    (p) => p.user === userId || p.user?._id === userId
  );

  const formattedDate = match.startTime
    ? new Date(match.startTime).toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "TBA";

  const hasResults =
    Array.isArray(match.results) && match.results.length > 0;

  const isCanceled = match.status === "CANCELED";

  return (
    <div
      className={`bg-[#121212] border rounded-2xl p-6 flex flex-col gap-4 transition-all ${
        isCanceled
          ? "border-red-900/20 opacity-60"
          : "border-white/5 hover:border-white/10"
      }`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-black uppercase tracking-tight text-base truncate">
            {match.title}
          </h3>
          <p className="text-white/40 text-[11px] font-medium mt-1">
            {formattedDate}
          </p>
        </div>
        <StatusBadge status={match.status} />
      </div>

      {/* Match metadata */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-black/40 rounded-xl p-3 text-center">
          <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
            Mode
          </p>
          <p className="text-white text-[11px] font-black uppercase">
            {match.matchCategory?.replace("_", " ") ?? "—"}
          </p>
        </div>
        <div className="bg-black/40 rounded-xl p-3 text-center">
          <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
            Prize Pool
          </p>
          <p className="text-[#1DB954] text-[11px] font-black">
            ₹{match.prizePool?.toLocaleString("en-IN") ?? "0"}
          </p>
        </div>
        <div className="bg-black/40 rounded-xl p-3 text-center">
          <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
            Your IGN
          </p>
          <p className="text-white text-[11px] font-black truncate">
            {myParticipant?.ign ?? "—"}
          </p>
        </div>
      </div>

      {/* Status-specific notices */}
      {match.status === "AWAITING_RESULTS" && (
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl px-4 py-3">
          <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">
            ⏳ Match ended — results are being finalized by the admin
          </p>
        </div>
      )}

      {isCanceled && (
        <div className="bg-red-900/10 border border-red-900/30 rounded-xl px-4 py-3">
          <p className="text-red-500/80 text-[10px] font-black uppercase tracking-widest">
            ✕ This tournament was canceled by the admin
          </p>
        </div>
      )}

      {/* Action buttons — hidden for canceled tournaments */}
      {!isCanceled && (
        <div className="flex gap-3 pt-1">
          <button
            onClick={() => navigate(`/tournaments/view/${match._id}`)}
            className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl transition-all"
          >
            Match Detail
          </button>
          {match.status === "COMPLETED" && hasResults && (
            <button
              onClick={() =>
                navigate(`/tournaments/${match._id}/results`)
              }
              className="flex-1 bg-[#1DB954]/10 hover:bg-[#1DB954]/20 border border-[#1DB954]/20 text-[#1DB954] text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl transition-all"
            >
              View Results
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function EmptyState() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
        <span className="text-2xl">🎮</span>
      </div>
      <h3 className="text-white font-black uppercase tracking-widest text-sm mb-2">
        No Matches Yet
      </h3>
      <p className="text-white/30 text-xs max-w-xs mb-8">
        You have not joined any tournaments. Head to the lobby to find
        your next match.
      </p>
      <button
        onClick={() => navigate("/tournaments")}
        className="bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs px-8 py-3 rounded-xl hover:bg-white transition-all"
      >
        Browse Tournaments
      </button>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function MyMatches() {
  const { user } = useAuth();
  const [myMatches, setMyMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyMatches = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getRegisteredTournaments();
        setMyMatches(data);
      } catch (err) {
        console.error("Failed to fetch registered matches:", err);
        setError("Failed to load your matches. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMyMatches();
  }, []);

  // ── Render: loading ──────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#1DB954] border-t-transparent rounded-full animate-spin" />
          <p className="text-white/30 text-xs font-black uppercase tracking-widest">
            Loading your matches...
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
      <div className="max-w-3xl mx-auto">

        {/* Page header */}
        <header className="mb-10">
          <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-[0.4em] mb-2">
            Player Hub
          </p>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            My Matches
          </h1>
          {myMatches.length > 0 && (
            <p className="text-white/30 text-xs mt-2">
              {myMatches.length} tournament
              {myMatches.length !== 1 ? "s" : ""} registered
            </p>
          )}
        </header>

        {/* Match list or empty state */}
        {myMatches.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="flex flex-col gap-4">
            {myMatches.map((match) => (
              <MatchCard
                key={match._id}
                match={match}
                userId={user?._id ?? user?.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}