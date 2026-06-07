// frontend/src/pages/Leaderboard.jsx

import { useState, useEffect } from "react";
import { getLeaderboard } from "../api/leaderboard.api";

// ── Helpers ────────────────────────────────────────────────────────────────

/**
 * Returns up to two uppercase initials from a username or IGN string.
 * Used as avatar fallback since the User model has no avatar field yet.
 */
function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

// ── Sub-components ─────────────────────────────────────────────────────────

function Avatar({ name, avatar, size = "md" }) {
  const sizeClasses = {
    sm: "w-8 h-8 text-[10px]",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-lg",
  };

  if (avatar) {
    return (
      <img
        src={avatar}
        alt={name}
        className={`${sizeClasses[size]} rounded-full object-cover border-2 border-white/10`}
      />
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-[#1DB954]/20 border-2 border-[#1DB954]/30 flex items-center justify-center font-black text-[#1DB954]`}
    >
      {getInitials(name)}
    </div>
  );
}

function PodiumCard({ player, position }) {
  const config = {
    1: {
      order: "order-2",
      height: "h-32",
      label: "🥇",
      ring: "ring-2 ring-yellow-400/60",
      nameColor: "text-yellow-400",
    },
    2: {
      order: "order-1",
      height: "h-24",
      label: "🥈",
      ring: "ring-2 ring-white/20",
      nameColor: "text-white",
    },
    3: {
      order: "order-3",
      height: "h-20",
      label: "🥉",
      ring: "ring-2 ring-orange-400/40",
      nameColor: "text-orange-400",
    },
  };

  const c = config[position];

  return (
    <div className={`flex flex-col items-center gap-3 ${c.order}`}>
      <Avatar name={player.ign || player.username} avatar={player.avatar} size="lg" />
      <div className="text-center">
        <p className={`font-black uppercase tracking-tight text-sm ${c.nameColor}`}>
          {player.ign || player.username}
        </p>
        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-0.5">
          {player.totalPoints} pts
        </p>
      </div>
      <div
        className={`w-full min-w-[80px] ${c.height} bg-white/5 ${c.ring} rounded-t-xl flex items-end justify-center pb-3`}
      >
        <span className="text-xl">{c.label}</span>
      </div>
    </div>
  );
}

function LeaderboardRow({ player, rank }) {
  const rankColor =
    rank === 1
      ? "text-yellow-400"
      : rank === 2
      ? "text-white/60"
      : rank === 3
      ? "text-orange-400"
      : "text-white/20";

  return (
    <div className="flex items-center gap-4 bg-[#121212] border border-white/5 rounded-xl px-5 py-4 hover:border-white/10 transition-all">
      {/* Rank */}
      <span className={`w-6 text-center font-black text-sm shrink-0 ${rankColor}`}>
        {rank}
      </span>

      {/* Avatar */}
      <Avatar name={player.ign || player.username} avatar={player.avatar} size="sm" />

      {/* Identity */}
      <div className="flex-1 min-w-0">
        <p className="text-white font-black text-sm truncate">
          {player.ign || player.username}
        </p>
        <p className="text-white/30 text-[10px] truncate">@{player.username}</p>
      </div>

      {/* Stats */}
      <div className="flex gap-6 shrink-0">
        <div className="text-right">
          <p className="text-[#1DB954] font-black text-sm">{player.totalPoints}</p>
          <p className="text-white/30 text-[9px] uppercase tracking-widest">Points</p>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-white font-black text-sm">{player.totalKills}</p>
          <p className="text-white/30 text-[9px] uppercase tracking-widest">Kills</p>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-white font-black text-sm">{player.totalMatches}</p>
          <p className="text-white/30 text-[9px] uppercase tracking-widest">Matches</p>
        </div>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getLeaderboard();
        setPlayers(data);
      } catch (err) {
        console.error("Failed to fetch leaderboard:", err);
        setError("Failed to load leaderboard. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  // ── Render: loading ──────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#1DB954] border-t-transparent rounded-full animate-spin" />
          <p className="text-white/30 text-xs font-black uppercase tracking-widest">
            Loading leaderboard...
          </p>
        </div>
      </div>
    );
  }

  // ── Render: error ────────────────────────────────────────────────────────
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

  // ── Render: empty ────────────────────────────────────────────────────────
  if (players.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-white/30 text-sm font-black uppercase tracking-widest">
            No rankings yet. Complete tournaments to appear here.
          </p>
        </div>
      </div>
    );
  }

  const top3 = players.slice(0, 3);
  const rest = players.slice(3);

  // ── Render: main ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        {/* Page header */}
        <header className="mb-10">
          <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-[0.4em] mb-2">
            Global Rankings
          </p>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            Leaderboard
          </h1>
          <p className="text-white/30 text-xs mt-2">
            Top {players.length} players ranked by total points
          </p>
        </header>

        {/* Podium — top 3 */}
        {top3.length >= 2 && (
          <div className="flex items-end justify-center gap-4 mb-12">
            {top3.map((player, i) => (
              <PodiumCard key={player._id} player={player} position={i + 1} />
            ))}
          </div>
        )}

        {/* Full ranked list */}
        <div className="flex flex-col gap-3">
          {players.map((player, i) => (
            <LeaderboardRow key={player._id} player={player} rank={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}