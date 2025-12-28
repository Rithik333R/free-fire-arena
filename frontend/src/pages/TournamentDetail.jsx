import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

export default function TournamentDetail({ setOpen }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // 🕒 Countdown State
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Fetch specific tournament by ID
    axios.get(`http://localhost:5000/api/tournaments/${id}`)
      .then((res) => {
        setMatch(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, [id]);

  // 🕒 Countdown Timer Logic
  useEffect(() => {
    if (!match || match.status !== "UPCOMING") {
        if (match?.status === "LIVE") setTimeLeft("MATCH IS LIVE");
        if (match?.status === "COMPLETED") setTimeLeft("MATCH ENDED");
        return;
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const startTime = new Date(match.startTime).getTime();
      const distance = startTime - now;

      if (distance < 0) {
        setTimeLeft("MATCH STARTED");
        clearInterval(timer);
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [match]);

  if (loading) return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#1DB954] border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-[#1DB954] font-black tracking-widest text-xs animate-pulse uppercase">Syncing Arena Data...</p>
    </div>
  );

  if (!match) return <div className="p-20 text-white text-center font-bold">MATCH NOT FOUND</div>;

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-12 selection:bg-[#1DB954] selection:text-black">
      
      {/* --- TOP BAR --- */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <button 
          onClick={() => navigate(-1)} 
          className="text-[#b3b3b3] hover:text-[#1DB954] font-black flex items-center gap-2 transition-all uppercase text-[10px] tracking-widest group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> ARENA LOBBY
        </button>
        
        {setOpen && (
          <button 
            onClick={() => setOpen(true)}
            className="md:hidden bg-[#1DB954]/10 text-[#1DB954] p-2 rounded-lg border border-[#1DB954]/20"
          >
            ☰
          </button>
        )}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT SECTION: Banner, Stats & Rules */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Hero Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-64 md:h-80 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src={match.banner || "https://wallpaperaccess.com/full/2155823.jpg"} 
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              alt="Tournament Banner"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex gap-2 mb-4">
                <span className="bg-[#1DB954] text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  {match.status}
                </span>
                <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/10">
                  {match.matchType || "4v4"}
                </span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] drop-shadow-2xl">
                {match.title}
              </h1>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "PRIZE POOL", value: `₹${match.prizePool}`, color: "text-[#1DB954]" },
              { label: "ENTRY FEE", value: match.entryFee === 0 ? "FREE" : `₹${match.entryFee}`, color: "text-white" },
              { label: "MAP", value: match.map || "BERMUDA", color: "text-white" },
              { label: "VERSION", value: "MOBILE", color: "text-white" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#121212] p-5 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors">
                <p className="text-[#666] text-[10px] font-black uppercase mb-1 tracking-widest">{stat.label}</p>
                <p className={`text-xl font-black ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Match Rules */}
          <section className="bg-[#121212] p-8 rounded-[2.5rem] border border-white/5">
            <h2 className="text-xl font-black mb-8 uppercase flex items-center gap-3 tracking-tighter">
              <span className="w-1.5 h-6 bg-[#1DB954] rounded-full"></span>
              Official Match Rules
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {match.rules?.map((rule, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white/[0.03] rounded-2xl border border-white/5 group hover:border-[#1DB954]/40 transition-all">
                  <span className="text-[#1DB954] font-black text-xl italic opacity-30 group-hover:opacity-100 transition-opacity">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <p className="text-sm font-bold text-[#b3b3b3] group-hover:text-white uppercase tracking-tight leading-tight">{rule}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT SECTION: Action Sidebar */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#1DB954] p-8 rounded-[3rem] text-black shadow-[0_20px_60px_rgba(29,185,84,0.25)] sticky top-8"
          >
            <h3 className="font-black text-4xl uppercase italic leading-none mb-1 tracking-tighter">JOIN ARENA</h3>
            <p className="font-black text-[10px] opacity-60 mb-8 uppercase tracking-[0.2em]">
              SLOTS: {match.participants?.length || 0} / {match.maxPlayers}
            </p>

            <button className="w-full bg-black text-white font-black py-5 rounded-2xl hover:scale-95 transition-all uppercase tracking-[0.15em] text-xs shadow-2xl mb-8 group">
              REGISTER <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <div className="space-y-4">
               <div className="flex justify-between items-center py-2 border-b border-black/10">
                 <span className="text-[10px] font-black uppercase opacity-60">Status</span>
                 <span className="font-black text-xs uppercase tracking-widest">{match.status}</span>
               </div>
               <div className="flex justify-between items-center py-2 border-b border-black/10">
                 <span className="text-[10px] font-black uppercase opacity-60">Kickoff Time</span>
                 <span className="font-black text-xs">
                   {new Date(match.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                 </span>
               </div>
            </div>
          </motion.div>
          
          {/* Real-time Countdown Box */}
          <div className="bg-[#121212] border border-yellow-500/20 p-8 rounded-[3rem] flex flex-col items-center text-center">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping"></div>
                <h4 className="text-yellow-500 font-black text-[10px] uppercase tracking-[0.2em]">ROOM ACCESS</h4>
             </div>
             
             <p className="text-4xl font-black text-white mb-4 font-mono tracking-tighter tabular-nums">
                {timeLeft}
             </p>
             
             <p className="text-[#666] text-[10px] font-bold leading-relaxed uppercase max-w-[200px]">
               ID and Password will be revealed here 15 mins before start.
             </p>
          </div>
        </div>

      </div>
    </div>
  );
}