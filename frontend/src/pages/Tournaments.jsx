import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

export default function Tournaments() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetches all matches for the list
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

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center font-black">LOADING ARENA...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-black italic uppercase mb-10 tracking-tighter">Arena Lobby</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {matches.map((match) => (
          <motion.div 
            key={match._id}
            whileHover={{ y: -5 }}
            className="bg-[#121212] border border-white/10 p-6 rounded-[2rem] flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] bg-[#1DB954] text-black px-3 py-1 rounded-full font-black uppercase mb-4 inline-block">
                {match.status}
              </span>
              <h2 className="text-2xl font-black uppercase italic mb-2 leading-tight">{match.title}</h2>
              <p className="text-[#666] text-xs font-bold mb-6 uppercase">{match.map} • {match.matchType}</p>
            </div>
            
            {/* THIS IS THE CRITICAL LINK */}
            <button 
              onClick={() => navigate(`/tournaments/view/${match._id}`)}
              className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[#1DB954] transition-colors"
            >
              Enter Match
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}