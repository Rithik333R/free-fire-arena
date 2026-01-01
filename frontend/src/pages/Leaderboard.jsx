import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/leaderboard");
        setPlayers(res.data);
      } catch (err) {
        console.error("Error fetching leaderboard", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading) return <div className="text-white p-10 font-black italic">LOADING ELITES...</div>;

  const topThree = players.slice(0, 3);
  const theRest = players.slice(3);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-black italic uppercase tracking-tighter mb-2">
            Hall of <span className="text-[#1DB954]">Fame</span>
          </h1>
          <p className="text-white/40 font-black text-[10px] tracking-[0.5em] uppercase">Global Kill Leaderboard</p>
        </header>

        {/* PODIUM SECTION */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 mb-16 px-4">
          {/* 2nd Place */}
          {topThree[1] && (
            <PodiumCard player={topThree[1]} rank={2} height="h-48" color="border-gray-400" />
          )}
          {/* 1st Place */}
          {topThree[0] && (
            <PodiumCard player={topThree[0]} rank={1} height="h-64" color="border-[#1DB954]" isGold />
          )}
          {/* 3rd Place */}
          {topThree[2] && (
            <PodiumCard player={topThree[2]} rank={3} height="h-40" color="border-amber-700" />
          )}
        </div>

        {/* LIST SECTION */}
        <div className="bg-[#121212] rounded-[2rem] border border-white/5 overflow-hidden">
          <div className="grid grid-cols-4 p-6 border-b border-white/5 text-[10px] font-black uppercase tracking-widest text-white/30">
            <span>Rank</span>
            <span>Player</span>
            <span className="text-center">Matches</span>
            <span className="text-right">Total Kills</span>
          </div>
          <div className="divide-y divide-white/5">
            {theRest.map((p, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                key={p._id} 
                className="grid grid-cols-4 p-6 items-center hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-black italic text-xl text-white/20">#{index + 4}</span>
                <div>
                  <p className="font-bold text-sm">{p.username}</p>
                  <p className="text-[10px] text-[#1DB954] font-black uppercase">{p.ign}</p>
                </div>
                <span className="text-center font-mono text-sm text-white/60">{p.totalMatches}</span>
                <span className="text-right font-black text-[#1DB954] text-xl">{p.totalKills}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component for the Podium
function PodiumCard({ player, rank, height, color, isGold }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative flex flex-col items-center w-full md:w-64 bg-[#121212] border-t-4 ${color} rounded-t-3xl p-6 ${height} justify-center shadow-2xl`}
    >
      <div className={`absolute -top-6 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl border-4 bg-black ${color} ${isGold ? 'text-[#1DB954]' : 'text-white'}`}>
        {rank}
      </div>
      <p className="text-[10px] font-black text-white/40 uppercase mb-1">Top Fragger</p>
      <h3 className={`text-xl font-black truncate w-full text-center uppercase italic ${isGold ? 'text-[#1DB954]' : 'text-white'}`}>
        {player.username}
      </h3>
      <div className="mt-4 text-center">
        <p className="text-4xl font-black tracking-tighter">{player.totalKills}</p>
        <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">Confirmed Kills</p>
      </div>
    </motion.div>
  );
}