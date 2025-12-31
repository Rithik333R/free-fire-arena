import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPanel() {
  const [tournaments, setTournaments] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [form, setForm] = useState({ roomId: "", roomPassword: "", status: "UPCOMING" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  
  // Modal State
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
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedId) return;
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.patch(`http://localhost:5000/api/admin/tournaments/${selectedId}/room`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage({ text: "ARENA UPDATED SUCCESSFULLY", type: "success" });
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
          {/* FORM SIDE */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#121212] p-8 rounded-[2.5rem] border border-white/5 h-fit">
            <h2 className="text-xl font-black italic uppercase mb-6">Edit Match Data</h2>
            <form onSubmit={handleUpdate} className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase text-white/30 ml-2">Match</label>
                <select 
                  className="w-full bg-black border border-white/10 p-4 rounded-xl mt-2 outline-none focus:border-[#1DB954] font-bold text-sm"
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
                className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954] font-bold"
                value={form.status}
                onChange={(e) => setForm({...form, status: e.target.value})}
              >
                <option value="UPCOMING">UPCOMING</option>
                <option value="LIVE">LIVE</option>
                <option value="COMPLETED">COMPLETED</option>
              </select>

              <button 
                type="submit" 
                disabled={loading || !selectedId}
                className="w-full bg-[#1DB954] text-black font-black py-4 rounded-xl uppercase hover:scale-[1.02] transition-all disabled:opacity-30"
              >
                {loading ? "Saving..." : "Push Updates"}
              </button>
            </form>
          </motion.div>

          {/* LIST SIDE (Live Feed) */}
          <div className="space-y-6">
            <h2 className="text-xl font-black italic uppercase flex items-center gap-2">Live Status Feed</h2>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {tournaments.map(t => (
                <div key={t._id} className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-[#1DB954]/30 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-bold">{t.title}</p>
                        <p className={`text-[9px] font-black uppercase mt-1 ${t.status === 'LIVE' ? 'text-red-500' : 'text-[#1DB954]'}`}>{t.status}</p>
                    </div>
                    <button 
                      onClick={() => setViewingMatch(t)}
                      className="text-[10px] font-black bg-white/10 hover:bg-[#1DB954] hover:text-black px-3 py-1.5 rounded-lg transition-all uppercase tracking-widest"
                    >
                      View Players
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PARTICIPANTS MODAL */}
      <AnimatePresence>
        {viewingMatch && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setViewingMatch(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-[#121212] border border-white/10 w-full max-w-xl rounded-[2rem] p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-black italic uppercase">{viewingMatch.title}</h2>
                  <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-widest">Registered Participants ({viewingMatch.participants.length})</p>
                </div>
                <button onClick={() => setViewingMatch(null)} className="text-white/40 hover:text-white text-2xl">&times;</button>
              </div>

              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {viewingMatch.participants.length > 0 ? (
                  viewingMatch.participants.map((p, idx) => (
                    <div key={idx} className="bg-white/5 p-4 rounded-xl flex justify-between items-center border border-white/5">
                      <div>
                        <p className="text-xs font-black text-white/40 uppercase tracking-tighter">Player {idx + 1}</p>
                        <p className="text-lg font-bold text-white">{p.ign}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black text-[#1DB954] uppercase">In-Game UID</p>
                        <p className="text-sm font-mono text-white/60">{p.uid}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center py-10 text-white/20 font-bold uppercase italic">No players registered yet.</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}