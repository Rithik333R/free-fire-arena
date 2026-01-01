import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPanel() {
  const [tournaments, setTournaments] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [form, setForm] = useState({ roomId: "", roomPassword: "", status: "UPCOMING" });
  const [participantResults, setParticipantResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [viewingMatch, setViewingMatch] = useState(null);

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/admin/tournaments", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTournaments(res.data);
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

  const handleSelectChange = (e) => {
    const id = e.target.value;
    setSelectedId(id);
    const selectedMatch = tournaments.find(t => t._id === id);
    if (selectedMatch) {
      setForm({
        roomId: selectedMatch.roomId || "",
        roomPassword: selectedMatch.roomPassword || "",
        status: selectedMatch.status || "UPCOMING"
      });
      
      // ✅ FIX: Ensure we map existing participants to state so they show up
      const initialResults = (selectedMatch.participants || []).map(p => ({
        ...p,
        kills: p.kills || 0,
        rank: p.rank || 0
      }));
      setParticipantResults(initialResults);
    }
  };

  const handleStatChange = (index, field, value) => {
    const updated = [...participantResults];
    updated[index][field] = Number(value); // Ensure it's a number
    setParticipantResults(updated);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedId) return;
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.patch(`http://localhost:5000/api/admin/tournaments/${selectedId}/room`, 
        { ...form, participants: participantResults }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage({ text: "ARENA & STATS UPDATED", type: "success" });
      fetchTournaments();
    } catch (err) {
      setMessage({ text: "UPDATE FAILED", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">Command Center</h1>
          <p className="text-[#1DB954] font-black text-[10px] tracking-[0.4em] uppercase">Control Panel v2.0</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#121212] p-8 rounded-[2.5rem] border border-white/5 h-fit">
            <h2 className="text-xl font-black italic uppercase mb-6 text-[#1DB954]">Tournament Logic</h2>
            <form onSubmit={handleUpdate} className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase text-white/30 ml-2">Match</label>
                <select 
                  className="w-full bg-black border border-white/10 p-4 rounded-xl mt-2 outline-none focus:border-[#1DB954] font-bold text-sm text-white"
                  onChange={handleSelectChange}
                  value={selectedId}
                  required
                >
                  <option value="">-- Choose Tournament --</option>
                  {tournaments.map(t => (
                    <option key={t._id} value={t._id}>[{t.status}] {t.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input 
                  placeholder="Room ID" 
                  value={form.roomId}
                  className="bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954]"
                  onChange={(e) => setForm({...form, roomId: e.target.value})}
                />
                <input 
                  placeholder="Room Pass" 
                  value={form.roomPassword}
                  className="bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954]"
                  onChange={(e) => setForm({...form, roomPassword: e.target.value})}
                />
              </div>

              <select 
                className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954] font-bold text-white"
                value={form.status}
                onChange={(e) => setForm({...form, status: e.target.value})}
              >
                <option value="UPCOMING">UPCOMING</option>
                <option value="LIVE">LIVE</option>
                <option value="COMPLETED">COMPLETED</option>
              </select>

              {/* DYNAMIC RESULT ENTRY SECTION */}
              {selectedId && (form.status === "LIVE" || form.status === "COMPLETED") && (
                <div className="pt-6 border-t border-white/5 space-y-4">
                  <h3 className="text-xs font-black uppercase text-white/40 tracking-widest">Player Performance</h3>
                  {participantResults.length > 0 ? (
                    participantResults.map((p, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-black/50 p-3 rounded-lg border border-white/5">
                        <span className="text-xs font-bold truncate w-24">{p.ign}</span>
                        <div className="flex gap-2">
                          <input 
                            type="number" 
                            placeholder="Kills"
                            value={p.kills}
                            className="w-16 bg-black border border-white/10 p-2 rounded text-xs text-center"
                            onChange={(e) => handleStatChange(idx, 'kills', e.target.value)}
                          />
                          <input 
                            type="number" 
                            placeholder="Rank"
                            value={p.rank}
                            className="w-16 bg-black border border-white/10 p-2 rounded text-xs text-center"
                            onChange={(e) => handleStatChange(idx, 'rank', e.target.value)}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-[10px] text-white/20 italic">No players registered for this match.</p>
                  )}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading || !selectedId}
                className="w-full bg-[#1DB954] text-black font-black py-4 rounded-xl uppercase hover:scale-[1.02] transition-all disabled:opacity-30 shadow-lg shadow-[#1DB954]/20"
              >
                {loading ? "Saving..." : "Push Updates"}
              </button>
              {message.text && (
                <p className={`mt-4 text-center text-[10px] font-black ${message.type === 'error' ? 'text-red-500' : 'text-[#1DB954]'}`}>
                  {message.text}
                </p>
              )}
            </form>
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-xl font-black italic uppercase flex items-center gap-2">Live Status Feed</h2>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {tournaments.map(t => (
                <div key={t._id} className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-[#1DB954]/30 transition-all flex justify-between items-center">
                    <div>
                        <p className="text-sm font-bold">{t.title}</p>
                        <p className={`text-[9px] font-black uppercase mt-1 ${t.status === 'LIVE' ? 'text-red-500' : 'text-[#1DB954]'}`}>{t.status}</p>
                    </div>
                    <button 
                      onClick={() => setViewingMatch(t)}
                      className="text-[10px] font-black bg-white/10 hover:bg-[#1DB954] hover:text-black px-4 py-2 rounded-lg transition-all uppercase tracking-widest"
                    >
                      View Players
                    </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {viewingMatch && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setViewingMatch(null)} className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#121212] border border-white/10 w-full max-w-xl rounded-[2rem] p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-black italic uppercase">{viewingMatch.title}</h2>
                  <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-widest">Performance Review</p>
                </div>
                <button onClick={() => setViewingMatch(null)} className="text-white/40 hover:text-white text-2xl">&times;</button>
              </div>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {viewingMatch.participants.map((p, idx) => (
                    <div key={idx} className="bg-white/5 p-4 rounded-xl flex justify-between items-center border border-white/5">
                      <div>
                        <p className="text-lg font-bold text-white">{p.ign}</p>
                        <p className="text-[10px] font-mono text-white/40">{p.uid}</p>
                      </div>
                      <div className="text-right flex gap-4">
                        <div>
                            <p className="text-[9px] font-black text-[#1DB954] uppercase">Kills</p>
                            <p className="text-xl font-black text-white">{p.kills || 0}</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-black text-white/40 uppercase">Rank</p>
                            <p className="text-xl font-black text-white">#{p.rank || "--"}</p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}