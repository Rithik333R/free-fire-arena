import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function TournamentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");
  
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ ign: "", uid: "" });
  const [joining, setJoining] = useState(false);

  // Fetch match details - Updated to send Token for Reveal Logic
  const fetchMatch = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:5000/api/tournaments/${id}`, {
        headers: { Authorization: token ? `Bearer ${token}` : "" }
      });
      setMatch(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Fetch Error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatch();
  }, [id]);

  useEffect(() => {
    if (!match || match.status !== "UPCOMING") {
        if (match?.status === "LIVE") setTimeLeft("MATCH IS LIVE");
        if (match?.status === "COMPLETED") setTimeLeft("MATCH ENDED");
        return;
    }

    const timer = setInterval(() => {
      const distance = new Date(match.startTime).getTime() - new Date().getTime();
      
      if (distance < 0) {
        setTimeLeft("MATCH STARTED");
        clearInterval(timer);
        fetchMatch(); // Final refresh when match starts
      } else {
        const h = Math.floor((distance % 86400000) / 3600000);
        const m = Math.floor((distance % 3600000) / 60000);
        const s = Math.floor((distance % 60000) / 1000);
        setTimeLeft(`${h}h ${m}m ${s}s`);

        // AUTO-REFRESH LOGIC: Re-fetch data exactly at the 15-minute mark to reveal ID/Pass
        if (h === 0 && m === 15 && s === 0) {
          fetchMatch();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [match]);

  const handleJoin = async (e) => {
    e.preventDefault();
    setJoining(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:5000/api/tournaments/${id}/join`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Successfully joined the Arena!");
      setShowModal(false);
      fetchMatch(); 
    } catch (err) {
      alert(err.response?.data?.message || "Failed to join");
    } finally {
      setJoining(false);
    }
  };

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-[#1DB954] font-black tracking-widest">LOADING ARENA...</div>;
  if (!match) return <div className="p-20 text-white text-center font-bold uppercase">Match Not Found</div>;

  const token = localStorage.getItem("token");
  const userId = token ? JSON.parse(atob(token.split('.')[1])).id : null;
  const isJoined = match.participants?.some(p => p.user === userId || p.user?._id === userId);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-12">
      <div className="max-w-6xl mx-auto mb-8">
        <button onClick={() => navigate(-1)} className="text-xs font-black text-white/40 hover:text-[#1DB954] transition-colors flex items-center gap-2">
          ← ARENA LOBBY
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative h-[300px] md:h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5">
            <img src={match.banner} alt="banner" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10">
              <div className="flex gap-2 mb-4">
                <span className="bg-[#1DB954] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase">{match.status}</span>
                <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">{match.matchType}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">{match.title}</h1>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "PRIZE POOL", val: `₹${match.prizePool}`, color: "text-[#1DB954]" },
              { label: "ENTRY FEE", val: match.entryFee === 0 ? "FREE" : `₹${match.entryFee}` },
              { label: "MAP", val: match.map },
              { label: "VERSION", val: "MOBILE" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#121212] border border-white/5 p-6 rounded-3xl">
                <p className="text-[10px] font-black text-white/40 mb-1 uppercase tracking-widest">{stat.label}</p>
                <p className={`text-xl font-black uppercase italic ${stat.color || "text-white"}`}>{stat.val}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#121212] border border-white/5 p-8 rounded-[3rem]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-[#1DB954] rounded-full" />
              <h2 className="text-xl font-black uppercase italic tracking-tight">OFFICIAL MATCH RULES</h2>
            </div>
            <ul className="space-y-4">
              {match.rules?.map((rule, idx) => (
                <li key={idx} className="flex gap-4 text-sm font-bold text-white/70">
                  <span className="text-[#1DB954]">0{idx + 1}</span> {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <motion.div className="bg-[#1DB954] p-8 rounded-[3rem] text-black shadow-2xl">
            <h3 className="font-black text-4xl uppercase italic mb-1 tracking-tighter">JOIN ARENA</h3>
            <p className="font-black text-[10px] opacity-60 mb-8 uppercase tracking-widest">
              SLOTS: {match.participants?.length || 0} / {match.maxPlayers}
            </p>

            {isJoined ? (
              <button disabled className="w-full bg-black/10 text-black border-2 border-black/10 font-black py-5 rounded-2xl uppercase text-xs">
                ✅ REGISTERED
              </button>
            ) : match.status !== "UPCOMING" ? (
              <button disabled className="w-full bg-red-600/20 text-black/50 font-black py-5 rounded-2xl uppercase text-xs">
                REGISTRATION CLOSED
              </button>
            ) : (
              <button onClick={() => setShowModal(true)} className="w-full bg-black text-white font-black py-5 rounded-2xl hover:scale-95 transition-all uppercase text-xs">
                REGISTER NOW →
              </button>
            )}
          </motion.div>

          {/* DYNAMIC ROOM ACCESS BOX */}
          <div className="bg-[#121212] border border-white/5 p-8 rounded-[3rem] text-center shadow-xl">
            <p className="text-[10px] font-black text-[#FFD700] mb-4 uppercase flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" /> 
              {match.roomId && match.roomId !== "REVEALING SOON" ? "ROOM IS READY" : "ROOM ACCESS"}
            </p>

            {/* Check if Room ID is actually revealed from Backend */}
            {match.roomId && match.roomId !== "REVEALING SOON" ? (
              <div className="space-y-4 py-2">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="text-[9px] text-white/40 font-black uppercase mb-1">Room ID</p>
                  <p className="text-2xl font-black tracking-widest text-[#1DB954]">{match.roomId}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="text-[9px] text-white/40 font-black uppercase mb-1">Password</p>
                  <p className="text-2xl font-black tracking-widest text-[#1DB954]">{match.roomPassword}</p>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-4xl font-black italic tracking-tighter mb-2">{timeLeft}</h2>
                <p className="text-[10px] font-bold text-white/30 uppercase leading-relaxed">
                  {isJoined 
                    ? "ID AND PASSWORD WILL BE REVEALED HERE 15 MINS BEFORE START."
                    : "YOU MUST REGISTER TO ACCESS ROOM DETAILS."}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-[#121212] border border-white/10 p-10 rounded-[3rem] max-w-md w-full shadow-2xl">
              <h2 className="text-3xl font-black uppercase italic mb-2 tracking-tight">ARENA ENTRY</h2>
              <form onSubmit={handleJoin} className="space-y-5">
                <div>
                  <label className="text-[9px] font-black uppercase text-[#1DB954] ml-2 tracking-widest">In-Game Name (IGN)</label>
                  <input required className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-[#1DB954]" placeholder="e.g. SKYLORD_07" onChange={(e) => setFormData({...formData, ign: e.target.value})} />
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase text-[#1DB954] ml-2 tracking-widest">Player UID</label>
                  <input required className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-[#1DB954]" placeholder="e.g. 283940122" onChange={(e) => setFormData({...formData, uid: e.target.value})} />
                </div>
                <div className="flex gap-3 pt-6">
                  <button type="button" onClick={() => setShowModal(false)} className="flex-1 bg-white/5 text-white/40 font-black py-4 rounded-2xl uppercase text-[10px]">CANCEL</button>
                  <button type="submit" disabled={joining} className="flex-1 bg-[#1DB954] text-black font-black py-4 rounded-2xl uppercase text-[10px]">{joining ? "JOINING..." : "CONFIRM ENTRY"}</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}