// frontend/src/pages/Home.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ─────────────────────────────────────────────────────────────────────────────
// PHASE D NOTE — TD-016 (placeholder stats)
// The stats below are placeholder values. Real per-user stats require:
//   GET /api/users/profile
// Scheduled for Phase D. Do not add client-side stat computation here.
// ─────────────────────────────────────────────────────────────────────────────

const PLACEHOLDER_STATS = [
  { label: "Matches Played", value: "—" },
  { label: "Total Kills", value: "—" },
  { label: "Win Rate", value: "—" },
];

const QUICK_LINKS = [
  { label: "My Matches", path: "/my-matches", icon: "🎮" },
  { label: "Profile", path: "/profile", icon: "👤" },
  { label: "Leaderboard", path: "/leaderboard", icon: "🏆" },
  { label: "Tournaments", path: "/tournaments", icon: "⚔️" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="px-8 pt-12 pb-8">
        <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-[0.4em] mb-3">
          Free Fire Arena
        </p>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
          Welcome to the{" "}
          <span className="text-[#1DB954]">Arena 🔥</span>
        </h1>
        <p className="text-white/40 mt-4 max-w-xl text-sm leading-relaxed">
          Compete in Free Fire tournaments, earn prize money, and climb the
          global leaderboard.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <button
            onClick={() => navigate("/tournaments")}
            className="bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs px-8 py-4 rounded-xl hover:bg-white transition-all"
          >
            Browse Tournaments
          </button>
          <button
            onClick={() => navigate("/leaderboard")}
            className="bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
          >
            Leaderboard
          </button>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-6">
        {PLACEHOLDER_STATS.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -4 }}
            className="bg-[#121212] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors"
          >
            <p className="text-white/30 uppercase text-[10px] font-black tracking-widest">
              {stat.label}
            </p>
            <h2 className="text-5xl font-black mt-3 text-white">
              {stat.value}
            </h2>
            <p className="text-white/20 text-[10px] mt-2 uppercase tracking-widest">
              Coming in Phase D
            </p>
          </motion.div>
        ))}
      </section>

      {/* ── Quick links ───────────────────────────────────────────────── */}
      <section className="px-8 pb-16">
        <h2 className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-4">
          Quick Access
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {QUICK_LINKS.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className="bg-[#121212] border border-white/5 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-white/10 hover:bg-white/5 transition-all"
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">
                {link.label}
              </span>
            </button>
          ))}
        </div>
      </section>

    </div>
  );
}