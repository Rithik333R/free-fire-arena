import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function Tournaments() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("UPCOMING");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/tournaments")
      .then((res) => {
        setMatches(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredMatches = matches.filter((match) => match.status === filter);

  const categories = [
    { id: "LIVE", label: "Live", icon: "⚔️" },
    { id: "UPCOMING", label: "Upcoming", icon: "🕒" },
    { id: "COMPLETED", label: "Finished", icon: "🏁" },
  ];

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center font-black text-[#1DB954] animate-pulse uppercase tracking-[0.3em]">
      Loading Arena...
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* BACK BUTTON */}
        <button 
          onClick={() => navigate("/")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            ←
          </div>
          Back to Dashboard
        </button>

        <header className="mb-10">
          <h1 className="text-4xl font-black italic uppercase mb-2 tracking-tighter">
            Arena <span className="text-[#1DB954]">Lobby</span>
          </h1>
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Choose your battle phase</p>
        </header>

        {/* MINI NAVBAR / CATEGORY FILTER */}
        <div className="flex flex-wrap gap-2 mb-10 bg-[#121212] p-2 rounded-2xl border border-white/5 w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${
                filter === cat.id
                  ? "bg-[#1DB954] text-black shadow-[0_0_20px_rgba(29,185,84,0.2)]"
                  : "text-white/40 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
              <span className={`ml-1 px-1.5 py-0.5 rounded-md text-[8px] ${
                filter === cat.id ? "bg-black/20" : "bg-white/10"
              }`}>
                {matches.filter(m => m.status === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* TOURNAMENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredMatches.length > 0 ? (
              filteredMatches.map((match) => (
                <motion.div 
                  key={match._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#121212] border border-white/10 p-6 rounded-[2rem] flex flex-col justify-between group transition-all hover:border-[#1DB954]/50"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-[10px] px-3 py-1 rounded-full font-black uppercase ${
                        match.status === "LIVE" ? "bg-red-600 text-white animate-pulse" : 
                        match.status === "COMPLETED" ? "bg-white/10 text-white/40" : "bg-[#1DB954] text-black"
                      }`}>
                        {match.status}
                      </span>
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-tighter">{match.matchCategory}</span>
                    </div>
                    <h2 className="text-2xl font-black uppercase italic mb-2 leading-tight group-hover:text-[#1DB954] transition-colors">
                      {match.title}
                    </h2>
                    <p className="text-[#666] text-xs font-bold mb-6 uppercase tracking-widest">
                      {match.map} • {match.matchType}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => navigate(`/tournaments/view/${match._id}`)}
                    className={`w-full py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${
                      match.status === "COMPLETED" 
                        ? "bg-white/5 text-white/40 hover:bg-white/10" 
                        : "bg-white text-black hover:bg-[#1DB954]"
                    }`}
                  >
                    {match.status === "COMPLETED" ? "View Results" : "Enter Match"}
                  </button>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
                <p className="text-white/10 font-black uppercase italic tracking-[0.5em]">
                  No {filter.toLowerCase()} matches found
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}