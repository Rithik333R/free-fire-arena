// frontend/src/pages/MatchResults.jsx

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTournamentById } from "../api/tournaments.api";

// ── Helpers ────────────────────────────────────────────────────────────────

const CATEGORY_LABELS = {
  BATTLE_ROYALE: "Battle Royale",
  CLASH_SQUAD: "Clash Squad",
  LONE_WOLF: "Lone Wolf",
};

const PODIUM_CONFIG = {
  0: {
    label: "🥇",
    ring: "ring-2 ring-yellow-400/60",
    nameColor: "text-yellow-400",
    order: "order-2",
    height: "h-28",
  },
  1: {
    label: "🥈",
    ring: "ring-2 ring-white/20",
    nameColor: "text-white",
    order: "order-1",
    height: "h-20",
  },
  2: {
    label: "🥉",
    ring: "ring-2 ring-orange-400/40",
    nameColor: "text-orange-400",
    order: "order-3",
    height: "h-16",
  },
};

// ── Sub-components ─────────────────────────────────────────────────────────

function PodiumCard({ result, index }) {
  const config = PODIUM_CONFIG[index];

  return (
    <div className={`flex flex-col items-center gap-2 ${config.order}`}>
      <div
        className={`w-14 h-14 rounded-full bg-white/5 ${config.ring} flex items-center justify-center`}
      >
        <span className="text-xl font-black text-white">
          {result.ign?.slice(0, 2).toUpperCase() ?? "??"}
        </span>
      </div>
      <div className="text-center">
        <p className={`font-black uppercase tracking-tight text-sm ${config.nameColor}`}>
          {result.ign ?? "Unknown"}
        </p>
        {result.kills !== undefined && result.kills !== null && (
          <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
            {result.kills} kills
          </p>
        )}
        {result.prize > 0 && (
          <p className="text-[#1DB954] text-[10px] font-black mt-0.5">
            ₹{result.prize.toLocaleString("en-IN")}
          </p>
        )}
      </div>
      <div
        className={`w-full min-w-[80px] ${config.height} bg-white/5 ${config.ring} rounded-t-xl flex items-end justify-center pb-2`}
      >
        <span className="text-lg">{config.label}</span>
      </div>
    </div>
  );
}

function ResultRow({ result, rank }) {
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

      {/* IGN avatar placeholder */}
      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
        <span className="text-[10px] font-black text-white/40">
          {result.ign?.slice(0, 2).toUpperCase() ?? "??"}
        </span>
      </div>

      {/* Identity */}
      <div className="flex-1 min-w-0">
        <p className="text-white font-black text-sm truncate">
          {result.ign ?? "Unknown Player"}
        </p>
        {result.rank && (
          <p className="text-white/30 text-[10px]">Placement: {result.rank}</p>
        )}
      </div>

      {/* Stats */}
      <div className="flex gap-6 shrink-0">
        {result.kills !== undefined && result.kills !== null && (
          <div className="text-right">
            <p className="text-white font-black text-sm">{result.kills}</p>
            <p className="text-white/30 text-[9px] uppercase tracking-widest">
              Kills
            </p>
          </div>
        )}
        {result.prize > 0 && (
          <div className="text-right">
            <p className="text-[#1DB954] font-black text-sm">
              ₹{result.prize.toLocaleString("en-IN")}
            </p>
            <p className="text-white/30 text-[9px] uppercase tracking-widest">
              Prize
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function NoResults() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
        <span className="text-2xl">⏳</span>
      </div>
      <h3 className="text-white font-black uppercase tracking-widest text-sm mb-2">
        Results Pending
      </h3>
      <p className="text-white/30 text-xs max-w-xs">
        The admin has not published results for this tournament yet. Check back
        after the match ends.
      </p>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function MatchResults() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchMatch = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getTournamentById(id);
        setMatch(data);
      } catch (err) {
        console.error("Failed to fetch match results:", err);
        setError("Failed to load results. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMatch();
  }, [id]);

  // ── Render: loading ──────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#1DB954] border-t-transparent rounded-full animate-spin" />
          <p className="text-white/30 text-xs font-black uppercase tracking-widest">
            Loading results...
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
            onClick={() => navigate(-1)}
            className="bg-white text-black font-black uppercase tracking-widest text-xs px-8 py-3 rounded-xl hover:bg-[#1DB954] transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // ── Render: not found ────────────────────────────────────────────────────
  if (!match) return null;

  const hasResults = Array.isArray(match.results) && match.results.length > 0;
  const top3 = hasResults ? match.results.slice(0, 3) : [];
  const categoryLabel =
    CATEGORY_LABELS[match.matchCategory] ?? match.matchCategory ?? "Tournament";

  // ── Render: main ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            ←
          </div>
          Back
        </button>

        {/* Page header */}
        <header className="mb-10">
          <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-[0.4em] mb-2">
            {categoryLabel} · Final Results
          </p>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            {match.title}
          </h1>
          {match.endTime && (
            <p className="text-white/30 text-xs mt-2">
              Ended{" "}
              {new Date(match.endTime).toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
          )}
        </header>

        {/* Results or pending state */}
        {!hasResults ? (
          <NoResults />
        ) : (
          <>
            {/* Podium — top 3 */}
            {top3.length >= 2 && (
              <div className="flex items-end justify-center gap-6 mb-12">
                {top3.map((result, i) => (
                  <PodiumCard key={i} result={result} index={i} />
                ))}
              </div>
            )}

            {/* Full results list */}
            <div className="flex flex-col gap-3">
              <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">
                Full Standings
              </h2>
              {match.results.map((result, i) => (
                <ResultRow key={i} result={result} rank={i + 1} />
              ))}
            </div>

            {/* Prize pool summary */}
            {match.prizePool > 0 && (
              <div className="mt-8 bg-[#1DB954]/5 border border-[#1DB954]/20 rounded-2xl p-6 text-center">
                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">
                  Total Prize Pool
                </p>
                <p className="text-[#1DB954] text-3xl font-black">
                  ₹{match.prizePool.toLocaleString("en-IN")}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}