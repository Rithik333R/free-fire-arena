import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPanel() {
  const [tournaments, setTournaments] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [form, setForm] = useState({ 
    roomId: "", 
    roomPassword: "", 
    status: "UPCOMING",
    matchCategory: "CLASH_SQUAD" 
  });
  const [participantResults, setParticipantResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [viewingMatch, setViewingMatch] = useState(null);

  const fetchTournaments = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage({ text: "SESSION EXPIRED: PLEASE RE-LOGIN", type: "error" });
        return;
      }

      const res = await axios.get("http://localhost:5000/api/admin/tournaments", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTournaments(res.data);
      setMessage({ text: "", type: "" });
    } catch (err) {
      if (err.response?.status === 401) {
        setMessage({ text: "AUTH FAILED: LOG IN AGAIN", type: "error" });
      } else {
        setMessage({ text: "FAILED TO LOAD TOURNAMENTS", type: "error" });
      }
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  const handleSelectChange = (e) => {
    const id = e.target.value;
    setSelectedId(id);
    const selectedMatch = tournaments.find(t => t._id === id);
    if (selectedMatch) {
      setForm({
        roomId: selectedMatch.roomId || "",
        roomPassword: selectedMatch.roomPassword || "",
        status: selectedMatch.status || "UPCOMING",
        matchCategory: selectedMatch.matchCategory || "CLASH_SQUAD"
      });
      
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
    updated[index][field] = Number(value);
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
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-[#1DB954]">Command Center</h1>
          <p className="text-white/40 font-black text-[10px] tracking-[0.4em] uppercase">Control Panel v2.0</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#121212] p-8 rounded-[2.5rem] border border-white/5 h-fit shadow-2xl">
            <h2 className="text-xl font-black italic uppercase mb-6 text-[#1DB954]">Tournament Logic</h2>
            
            <form onSubmit={handleUpdate} className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase text-white/30 ml-2 italic">Select Match</label>
                <select 
                  className="w-full bg-black border border-white/10 p-4 rounded-xl mt-2 outline-none focus:border-[#1DB954] font-bold text-sm text-white cursor-pointer"
                  onChange={handleSelectChange}
                  value={selectedId}
                  required
                >
                  <option value="">{tournaments.length === 0 ? "Loading Matches..." : "-- Choose Tournament --"}</option>
                  {tournaments.map((t) => (
                    <option key={t._id} value={t._id}>[{t.status}] {t.title}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase text-white/30 ml-2 italic">Scoring Mode</label>
                <select 
                  className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954] font-bold text-white"
                  value={form.matchCategory}
                  onChange={(e) => setForm({...form, matchCategory: e.target.value})}
                >
                  <option value="BATTLE_ROYALE">BATTLE ROYALE (Rank 1 = 20pts + Kills)</option>
                  <option value="CLASH_SQUAD">CLASH SQUAD (Kills Only)</option>
                  <option value="LONE_WOLF">LONE WOLF (Kills Only)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Room ID" value={form.roomId} className="bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954]" onChange={(e) => setForm({...form, roomId: e.target.value})} />
                <input placeholder="Room Pass" value={form.roomPassword} className="bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954]" onChange={(e) => setForm({...form, roomPassword: e.target.value})} />
              </div>

              <select className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-[#1DB954] font-bold text-white" value={form.status} onChange={(e) => setForm({...form, status: e.target.value})}>
                <option value="UPCOMING">UPCOMING</option>
                <option value="LIVE">LIVE</option>
                <option value="COMPLETED">COMPLETED</option>
              </select>

              {selectedId && (form.status === "LIVE" || form.status === "COMPLETED") && (
                <div className="pt-6 border-t border-white/5 space-y-4">
                  <h3 className="text-xs font-black uppercase text-white/40 tracking-widest">Performance Data (Kills | Rank)</h3>
                  {participantResults.map((p, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-black/50 p-3 rounded-lg border border-white/5">
                      <span className="text-xs font-bold truncate w-24 italic underline decoration-[#1DB954]">{p.ign}</span>
                      <div className="flex gap-2">
                        <input type="number" value={p.kills} className="w-14 bg-black border border-[#1DB954]/30 p-2 rounded text-xs text-center text-[#1DB954]" onChange={(e) => handleStatChange(idx, 'kills', e.target.value)} />
                        <input type="number" value={p.rank} className="w-14 bg-black border border-white/10 p-2 rounded text-xs text-center" onChange={(e) => handleStatChange(idx, 'rank', e.target.value)} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button type="submit" disabled={loading || !selectedId} className={`w-full font-black py-4 rounded-xl uppercase transition-all shadow-lg ${!selectedId ? "bg-white/5 text-white/10" : "bg-[#1DB954] text-black hover:scale-[1.02]"}`}>
                {loading ? "Processing..." : "Push Updates"}
              </button>
              {message.text && <p className={`mt-4 text-center text-[10px] font-black ${message.type === 'error' ? 'text-red-500' : 'text-[#1DB954]'}`}>{message.text}</p>}
            </form>
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-xl font-black italic uppercase underline decoration-[#1DB954] underline-offset-8">Live Status Feed</h2>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {tournaments.map(t => (
                <div key={t._id} className="bg-white/5 p-5 rounded-2xl border border-white/5 flex justify-between items-center">
                    <div>
                        <p className="text-sm font-bold">{t.title}</p>
                        <p className={`text-[8px] font-black uppercase mt-1 ${t.status === 'LIVE' ? 'text-red-500' : 'text-[#1DB954]'}`}>{t.status} - {t.matchCategory}</p>
                    </div>
                    <button onClick={() => setViewingMatch(t)} className="text-[10px] font-black bg-white/5 hover:bg-[#1DB954] hover:text-black px-4 py-2 rounded-lg uppercase">Inspect</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}