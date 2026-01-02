import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        
        // 1. Fetch Global Stats for Summary
        const leaderRes = await axios.get("http://localhost:5000/api/leaderboard");
        const currentUserStats = leaderRes.data.find(p => p._id === user.id);
        setStats(currentUserStats);

        // 2. Fetch Detailed Tournament History
        // This assumes your backend has a route to get tournaments by participant ID
        const tournamentRes = await axios.get("http://localhost:5000/api/tournaments");
        const myHistory = tournamentRes.data.filter(t => 
          t.participants.some(p => p.user === user.id) && t.status === "COMPLETED"
        );
        setHistory(myHistory);

      } catch (err) {
        console.error("Profile fetch error", err);
      } finally {
        setLoading(false);
      }
    };
    if (user?.id) fetchProfileData();
  }, [user]);

  if (loading) return <div className="p-20 text-[#1DB954] font-black animate-pulse uppercase italic">Synchronizing Data...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* TOP NAV */}
        <button onClick={() => navigate("/")} className="mb-8 text-[10px] font-black uppercase text-white/30 hover:text-[#1DB954] transition-colors tracking-widest">
          ← Back to Arena
        </button>

        {/* PROFILE HEADER */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12 bg-[#121212] p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1DB954]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="w-40 h-40 bg-[#1DB954] rounded-full flex items-center justify-center text-6xl font-black text-black italic shadow-[0_0_50px_rgba(29,185,84,0.3)]">
            {stats?.ign?.charAt(0) || user?.username?.charAt(0)}
          </div>
          
          <div className="text-center md:text-left z-10">
            <h1 className="text-6xl font-black uppercase italic tracking-tighter leading-none mb-2">{stats?.ign || "RECRUIT"}</h1>
            <p className="text-white/30 font-black text-xs uppercase tracking-[0.4em] mb-4">Official ID: {user?.username}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
               <Badge text="VETERAN" />
               <Badge text={`LEVEL ${stats?.totalMatches || 0}`} />
            </div>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard label="Total Points" value={stats?.totalPoints || 0} color="text-[#1DB954]" />
          <StatCard label="Confirmed Kills" value={stats?.totalKills || 0} />
          <StatCard label="Matches Played" value={stats?.totalMatches || 0} />
        </div>

        {/* BATTLE HISTORY TABLE */}
        <div className="bg-[#121212] rounded-[2.5rem] border border-white/5 overflow-hidden">
          <div className="p-8 border-b border-white/5">
            <h2 className="text-xl font-black italic uppercase tracking-tighter">Battle History</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black uppercase text-white/20 tracking-widest bg-white/[0.02]">
                  <th className="p-6">Tournament</th>
                  <th className="p-6 text-center">Rank</th>
                  <th className="p-6 text-center">Kills</th>
                  <th className="p-6 text-right">Points Earned</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {history.length > 0 ? history.map((match) => {
                  const myPerformance = match.participants.find(p => p.user === user.id);
                  return (
                    <tr key={match._id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="p-6">
                        <p className="font-bold text-sm group-hover:text-[#1DB954] transition-colors">{match.title}</p>
                        <p className="text-[9px] font-black text-white/20 uppercase mt-1">{match.matchCategory}</p>
                      </td>
                      <td className="p-6 text-center font-black italic text-xl text-white/40">#{myPerformance?.rank}</td>
                      <td className="p-6 text-center font-mono text-sm">{myPerformance?.kills}</td>
                      <td className="p-6 text-right font-black text-[#1DB954] text-xl">
                        {/* Logic: Rank 1 BR gets +20, else just kills */}
                        {(match.matchCategory === "BATTLE_ROYALE" && myPerformance?.rank === 1) 
                          ? myPerformance?.kills + 20 
                          : myPerformance?.kills}
                      </td>
                    </tr>
                  );
                }) : (
                  <tr>
                    <td colSpan="4" className="p-12 text-center text-white/10 font-black uppercase text-xs tracking-widest">
                      No combat records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color = "text-white" }) {
  return (
    <div className="bg-[#121212] p-8 rounded-[2rem] border border-white/5 text-center transition-transform hover:scale-105">
      <p className="text-[10px] font-black uppercase text-white/20 tracking-[0.2em] mb-2">{label}</p>
      <p className={`text-5xl font-black italic tracking-tighter ${color}`}>{value}</p>
    </div>
  );
}

function Badge({ text }) {
  return <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest text-white/60 uppercase">{text}</span>;
}