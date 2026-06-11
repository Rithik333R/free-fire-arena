// frontend/src/pages/Profile.jsx

import { useState, useEffect } from "react";
import { getUserProfile } from "../api/user.api";

// ─────────────────────────────────────────────────────────────────────────────
// Phase D fix — TD-016 resolved.
// Stats and match history now sourced from GET /api/users/profile.
// Single backend call replaces two client-side calls + independent computation.
// Stats guaranteed to match leaderboard — same aggregation formula.
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
  CANCELED: {
    label: "CANCELED",
    classes: "bg-red-900/20 text-red-600 border border-red-900/30",
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
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getUserProfile();
        setProfileData(data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        setError("Failed to load profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

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

  if (!profileData) return null;

  const { user, stats, recentMatches } = profileData;

  // ── Render: main ─────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="max-w-3xl mx-auto">

        {/* Profile header */}
        <div className="bg-[#121212] border border-white/5 rounded-2xl p-8 mb-6 flex items-center gap-6">
          {/* Avatar — initials until Phase F adds avatar field */}
          <div className="w-20 h-20 rounded-full bg-[#1DB954]/20 border-2 border-[#1DB954]/30 flex items-center justify-center shrink-0">
            <span className="text-2xl font-black text-[#1DB954]">
              {getInitials(user.username)}
            </span>
          </div>

          {/* Identity */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-black uppercase tracking-tighter text-white truncate">
              {user.username}
            </h1>
            <p className="text-white/30 text-xs mt-1 truncate">
              {user.email}
            </p>
            <span
              className={`inline-block mt-2 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                user.role === "ADMIN"
                  ? "bg-[#1DB954]/20 text-[#1DB954] border border-[#1DB954]/30"
                  : "bg-white/5 text-white/40 border border-white/10"
              }`}
            >
              {user.role}
            </span>
          </div>
        </div>

        {/* Stats grid — sourced from backend aggregation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <StatCard
            label="Total Points"
            value={stats.totalPoints}
            accent
          />
          <StatCard
            label="Total Kills"
            value={stats.totalKills}
          />
          <StatCard
            label="Matches"
            value={stats.totalMatches}
            sub="with results"
          />
          <StatCard
            label="Prize Earned"
            value={
              stats.totalPrize > 0
                ? `₹${stats.totalPrize.toLocaleString("en-IN")}`
                : "₹0"
            }
          />
        </div>

        {/* No stats notice */}
        {stats.totalMatches === 0 && recentMatches.length > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 mb-6">
            <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">
              Stats appear once tournament results are published and linked to your account.
            </p>
          </div>
        )}

        {/* Tournament history */}
        <div>
          <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-4">
            Tournament History ({recentMatches.length})
          </h2>

          {recentMatches.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center bg-[#121212] border border-white/5 rounded-2xl">
              <span className="text-3xl mb-4">🎮</span>
              <p className="text-white/30 text-sm font-black uppercase tracking-widest">
                No tournaments joined yet
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {recentMatches.map((match) => (
                <div
                  key={match._id}
                  className="bg-[#121212] border border-white/5 rounded-xl px-5 py-4 flex items-center gap-4 hover:border-white/10 transition-all"
                >
                  {/* Tournament info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-black text-sm truncate">
                      {match.title}
                    </p>
                    <p className="text-white/30 text-[10px] mt-0.5">
                      {CATEGORY_LABELS[match.matchCategory] ??
                        match.matchCategory}
                      {match.startTime &&
                        ` · ${new Date(match.startTime).toLocaleDateString(
                          "en-IN",
                          { dateStyle: "medium" }
                        )}`}
                    </p>
                    {/* IGN and slot */}
                    {match.myParticipant?.ign && (
                      <p className="text-white/20 text-[10px] mt-0.5">
                        IGN: {match.myParticipant.ign}
                        {match.myParticipant.slotNumber &&
                          ` · Slot #${match.myParticipant.slotNumber}`}
                      </p>
                    )}
                  </div>

                  {/* Result if published */}
                  {match.myResult ? (
                    <div className="text-right shrink-0 hidden sm:block">
                      <p className="text-[#1DB954] text-[11px] font-black">
                        {match.myResult.rank}
                      </p>
                      {match.myResult.kills !== null &&
                        match.myResult.kills !== undefined && (
                          <p className="text-white/30 text-[9px] uppercase tracking-widest">
                            {match.myResult.kills} kills
                          </p>
                        )}
                      {match.myResult.prize > 0 && (
                        <p className="text-[#1DB954] text-[9px] font-black">
                          ₹{match.myResult.prize.toLocaleString("en-IN")}
                        </p>
                      )}
                    </div>
                  ) : null}

                  <StatusBadge status={match.status} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}