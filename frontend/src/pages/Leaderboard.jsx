import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // For the back button functionality

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/leaderboard");
        setPlayers(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching leaderboard", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-[#1DB954] font-black italic animate-pulse text-2xl uppercase tracking-tighter">
          Loading Elites...
        </div>
      </div>
    );
  }

  const topThree = players.slice(0, 3);
  const theRest = players.slice(3);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* BACK BUTTON */}
        <button 
          onClick={() => navigate("/")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            ←
          </div>
          Return to Arena
        </button>

        <header className="text-center mb-16">
          <h1 className="text-6xl font-black italic uppercase tracking-tighter mb-2">
            Hall of <span className="text-[#1DB954]">Fame</span>
          </h1>
          <p className="text-white/40 font-black text-[10px] tracking-[0.5em] uppercase">
            Global Tournament Rankings
          </p>
        </header>

        {/* PODIUM SECTION */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 mb-16 px-4">
          {topThree[1] && <PodiumCard player={topThree[1]} rank={2} height="h-52" color="border-gray-400" />}
          {topThree[0] && <PodiumCard player={topThree[0]} rank={1} height="h-72" color="border-[#1DB954]" isGold />}
          {topThree[2] && <PodiumCard player={topThree[2]} rank={3} height="h-44" color="border-amber-700" />}
        </div>

        {/* LIST SECTION */}
        <div className="bg-[#121212] rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-5 p-6 border-b border-white/5 text-[10px] font-black uppercase tracking-widest text-white/30">
            <span>Rank</span>
            <span>Player</span>
            <span className="text-center">Matches</span>
            <span className="text-center">Kills</span>
            <span className="text-right">Total Points</span>
          </div>
          
          <div className="divide-y divide-white/5">
            {theRest.length > 0 ? (
              theRest.map((p, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  key={p._id} 
                  className="grid grid-cols-5 p-6 items-center hover:bg-[#1DB954]/5 transition-colors"
                >
                  <span className="font-black italic text-xl text-white/10">#{index + 4}</span>
                  <div>
                    <p className="font-bold text-sm text-white">{p.ign}</p>
                    <p className="text-[9px] text-white/30 font-black uppercase tracking-tighter">@{p.username}</p>
                  </div>
                  <span className="text-center font-mono text-sm text-white/60">{p.totalMatches}</span>
                  <span className="text-center font-mono text-sm text-white/60">{p.totalKills}</span>
                  <span className="text-right font-black text-[#1DB954] text-2xl italic">{p.totalPoints}</span>
                </motion.div>
              ))
            ) : (
              players.length < 4 && (
                <div className="p-10 text-center text-white/10 font-black uppercase text-xs tracking-[0.3em]">
                  End of Rankings
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PodiumCard({ player, rank, height, color, isGold }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className={`relative flex flex-col items-center w-full md:w-64 bg-[#121212] border-t-4 ${color} rounded-t-[2.5rem] p-6 ${height} justify-center shadow-2xl`}
    >
      <div className={`absolute -top-6 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl border-4 bg-black ${color} ${isGold ? 'text-[#1DB954]' : 'text-white'}`}>
        {rank}
      </div>
      <p className="text-[10px] font-black text-white/40 uppercase mb-1 tracking-widest">Global Elite</p>
      
      <h3 className={`text-2xl font-black truncate w-full text-center uppercase italic ${isGold ? 'text-[#1DB954]' : 'text-white'}`}>
        {player.ign}
      </h3>
      
      <div className="mt-4 text-center">
        <p className="text-5xl font-black tracking-tighter text-white">{player.totalPoints}</p>
        <p className={`text-[9px] font-black uppercase tracking-[0.2em] ${isGold ? 'text-[#1DB954]' : 'text-white/20'}`}>
          Total Score
        </p>
        <div className="mt-2 flex gap-2 justify-center opacity-40">
           <span className="text-[9px] font-bold uppercase">{player.totalKills} Kills</span>
           <span className="text-[9px] font-bold text-white/50">|</span>
           <span className="text-[9px] font-bold uppercase">{player.totalMatches} Matches</span>
        </div>
      </div>
    </motion.div>
  );
}