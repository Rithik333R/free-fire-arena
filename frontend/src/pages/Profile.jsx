// frontend/src/pages/Profile.jsx

import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { getLeaderboard } from "../api/leaderboard.api";
import { getRegisteredTournaments } from "../api/tournaments.api";

// ─────────────────────────────────────────────────────────────────────────────
// Phase B5 fix — TD-016 (partially resolved)
//
// Stats now sourced from leaderboard entry — same source as Leaderboard page.
// Match history sourced from GET /api/tournaments/registered — no more
// client-side filtering of all tournaments.
//
// Remaining Phase D work:
//   - Replace dual API calls with a single GET /api/users/profile endpoint
//     that returns { stats, recentMatches } in one round trip.
//   - Add avatar field to User model.
//   - Add Free Fire UID to User model at profile level.
// ─────────────────────────────────────────────────────────────────────────────

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

function StatCard({ label, value, accent, sub }) {
  return (
    <div className="bg-[#121212] border border-white/5 rounded-2xl p-5 text-center">
      <p
        className={`font-black text-2xl mb-1 ${
          accent ? "text-[#1DB954]" : "text-white"
        }`}
      >
        {value}
      </p>
      <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">
        {label}
      </p>
      {sub && (
        <p className="text-white/20 text-[9px] mt-1 uppercase tracking-widest">
          {sub}
        </p>
      )}
    </div>
  );
}

function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function Profile() {
  const { user } = useAuth();

  const [leaderboardEntry, setLeaderboardEntry] = useState(null);
  const [joinedTournaments, setJoinedTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = user?._id ?? user?.id;

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchProfileData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Parallel calls:
        // 1. Leaderboard — for stats (points, kills, matches, prize)
        // 2. Registered tournaments — for match history
        //
        // Both calls use the centralized API client.
        // No getAllTournaments() — we no longer download all tournaments
        // to filter client-side (Phase A/B fix).
        const [leaderboard, registered] = await Promise.all([
          getLeaderboard(),
          getRegisteredTournaments(),
        ]);

        // Find this user's leaderboard entry by ObjectId.
        const entry = leaderboard.find(
          (p) =>
            p._id === userId ||
            p._id?.toString() === userId?.toString()
        );
        setLeaderboardEntry(entry ?? null);

        // Match history comes directly from registered endpoint —
        // no client-side filter needed.
        setJoinedTournaments(registered);
      } catch (err) {
        console.error("Failed to fetch profile data:", err);
        setError("Failed to load profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [userId]);

  // ── Render: loading ──────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#1DB954] border-t-transparent rounded-full animate-spin" />
          <p className="text-white/30 text-xs font-black uppercase tracking-widest">
            Loading profile...
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

  // Stats — from leaderboard entry (same source as Leaderboard page).
  // Zeros for players with no completed linked results.
  const totalPoints = leaderboardEntry?.totalPoints ?? 0;
  const totalKills = leaderboardEntry?.totalKills ?? 0;
  const totalMatches = leaderboardEntry?.totalMatches ?? 0;
  const totalPrize = leaderboardEntry?.totalPrize ?? 0;
  const displayIGN = leaderboardEntry?.ign ?? user?.username ?? "—";

  // ── Render: main ─────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="max-w-3xl mx-auto">

        {/* Profile header */}
        <div className="bg-[#121212] border border-white/5 rounded-2xl p-8 mb-6 flex items-center gap-6">
          {/* Avatar — initials fallback until Phase D adds avatar field */}
          <div className="w-20 h-20 rounded-full bg-[#1DB954]/20 border-2 border-[#1DB954]/30 flex items-center justify-center shrink-0">
            <span className="text-2xl font-black text-[#1DB954]">
              {getInitials(user?.username)}
            </span>
          </div>

          {/* Identity */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-black uppercase tracking-tighter text-white truncate">
              {user?.username ?? "Player"}
            </h1>
            <p className="text-white/30 text-xs mt-1 truncate">
              {user?.email}
            </p>
            {displayIGN !== user?.username && (
              <p className="text-[#1DB954] text-[11px] font-black uppercase tracking-widest mt-1">
                IGN: {displayIGN}
              </p>
            )}
            <span
              className={`inline-block mt-2 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                user?.role === "ADMIN"
                  ? "bg-[#1DB954]/20 text-[#1DB954] border border-[#1DB954]/30"
                  : "bg-white/5 text-white/40 border border-white/10"
              }`}
            >
              {user?.role ?? "USER"}
            </span>
          </div>
        </div>

        {/* Stats grid — sourced from leaderboard (results[]) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Total Points"
            value={totalPoints}
            accent
          />
          <StatCard
            label="Total Kills"
            value={totalKills}
          />
          <StatCard
            label="Matches"
            value={totalMatches}
            sub="with results"
          />
          <StatCard
            label="Prize Earned"
            value={totalPrize > 0 ? `₹${totalPrize.toLocaleString("en-IN")}` : "₹0"}
          />
        </div>

        {/* No stats notice for new players */}
        {!leaderboardEntry && joinedTournaments.length > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 mb-6">
            <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">
              Stats appear here once tournament results are published and linked to your account.
            </p>
          </div>
        )}

        {/* Tournament history */}
        <div>
          <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-4">
            Tournament History ({joinedTournaments.length})
          </h2>

          {joinedTournaments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center bg-[#121212] border border-white/5 rounded-2xl">
              <span className="text-3xl mb-4">🎮</span>
              <p className="text-white/30 text-sm font-black uppercase tracking-widest">
                No tournaments joined yet
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {joinedTournaments.map((t) => {
                // Find this user's participant record for this tournament.
                const myParticipant = t.participants?.find(
                  (p) =>
                    p.user === userId ||
                    p.user?._id === userId ||
                    p.user?.toString() === userId?.toString()
                );

                // Find this user's result in this tournament if published.
                const myResult = t.results?.find(
                  (r) =>
                    r.user === userId ||
                    r.user?.toString() === userId?.toString()
                );

                return (
                  <div
                    key={t._id}
                    className="bg-[#121212] border border-white/5 rounded-xl px-5 py-4 flex items-center gap-4 hover:border-white/10 transition-all"
                  >
                    {/* Tournament info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-black text-sm truncate">
                        {t.title}
                      </p>
                      <p className="text-white/30 text-[10px] mt-0.5">
                        {CATEGORY_LABELS[t.matchCategory] ?? t.matchCategory}
                        {t.startTime &&
                          ` · ${new Date(t.startTime).toLocaleDateString(
                            "en-IN",
                            { dateStyle: "medium" }
                          )}`}
                      </p>
                    </div>

                    {/* Result if published and linked */}
                    {myResult ? (
                      <div className="text-right shrink-0 hidden sm:block">
                        <p className="text-[#1DB954] text-[11px] font-black">
                          {myResult.rank}
                        </p>
                        {myResult.kills !== null &&
                          myResult.kills !== undefined && (
                            <p className="text-white/30 text-[9px] uppercase tracking-widest">
                              {myResult.kills} kills
                            </p>
                          )}
                        {myResult.prize > 0 && (
                          <p className="text-[#1DB954] text-[9px] font-black">
                            ₹{myResult.prize.toLocaleString("en-IN")}
                          </p>
                        )}
                      </div>
                    ) : myParticipant?.ign ? (
                      // Joined but no linked result yet.
                      <div className="text-right shrink-0 hidden sm:block">
                        <p className="text-white text-[11px] font-black">
                          {myParticipant.ign}
                        </p>
                        <p className="text-white/30 text-[9px] uppercase tracking-widest">
                          IGN
                        </p>
                      </div>
                    ) : null}

                    <StatusBadge status={t.status} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}