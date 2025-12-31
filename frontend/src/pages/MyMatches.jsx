import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

export default function MyMatches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyMatches = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/tournaments/registered", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMatches(res.data);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMyMatches();
  }, []);

  const getStatusBadge = (match) => {
    const now = new Date().getTime();
    const startTime = new Date(match.startTime).getTime();
    const diff = (startTime - now) / 60000;

    if (match.status === "COMPLETED") return <span className="text-[10px] bg-white/10 px-3 py-1 rounded-full text-white/40 font-black">FINISHED</span>;
    if (match.status === "LIVE") return <span className="text-[10px] bg-red-600 px-3 py-1 rounded-full text-white font-black animate-pulse">LIVE NOW</span>;
    if (diff <= 15 && diff > 0) return <span className="text-[10px] bg-[#1DB954] px-3 py-1 rounded-full text-black font-black shadow-[0_0_10px_#1DB954]">ROOM OPEN</span>;
    return <span className="text-[10px] bg-yellow-500 px-3 py-1 rounded-full text-black font-black">UPCOMING</span>;
  };

  if (loading) return <div className="h-screen bg-black flex items-center justify-center text-[#1DB954] font-black tracking-widest uppercase">Syncing Hub...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-4">My Hub</h1>
          <p className="text-[#1DB954] font-black text-[10px] tracking-[0.4em] uppercase">Your Private Battlefront</p>
        </header>

        {matches.length === 0 ? (
          <div className="bg-[#121212] border border-white/5 rounded-[3rem] p-20 text-center">
            <p className="text-white/20 font-black uppercase mb-8">No active registrations.</p>
            <Link to="/tournaments" className="bg-[#1DB954] text-black px-10 py-5 rounded-xl font-black text-xs uppercase hover:scale-105 transition-all inline-block">Explore Lobby</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {matches.map((match) => (
              <motion.div 
                key={match._id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#121212] border border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-[#1DB954]/40 transition-all"
              >
                <div className="h-40 relative">
                  <img src={match.banner} alt="banner" className="w-full h-full object-cover opacity-30" />
                  <div className="absolute top-6 left-6">{getStatusBadge(match)}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black uppercase italic mb-6">{match.title}</h3>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[9px] text-white/30 font-black uppercase tracking-widest mb-1">Match Start</p>
                      <p className="text-sm font-bold">{new Date(match.startTime).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                    <Link to={`/tournaments/view/${match._id}`} className="bg-white/5 hover:bg-[#1DB954] hover:text-black p-4 rounded-2xl transition-all">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}