import { useEffect, useState } from "react";
import { getTournaments } from "../api/tournaments";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Added for back navigation

// Note: If you want to open the sidebar from here, 
// pass { setOpen } as a prop from App.jsx
export default function Tournaments({ setOpen }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("UPCOMING");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTournaments()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredData = data.filter((t) => t.status === activeTab);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      
      {/* --- TOP NAVIGATION BAR --- */}
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={() => navigate("/")} // Goes back to Home/Dashboard
          className="flex items-center gap-2 text-[#b3b3b3] hover:text-white transition-all font-bold text-sm group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> 
          BACK TO HOME
        </button>

        {/* Mobile Menu Button - only shows if setOpen is passed */}
        {setOpen && (
          <button 
            onClick={() => setOpen(true)}
            className="md:hidden bg-[#1DB954]/10 text-[#1DB954] px-4 py-2 rounded-full text-xs font-black tracking-widest border border-[#1DB954]/20"
          >
            MENU ☰
          </button>
        )}
      </div>

      <header className="mb-10">
        <h1 className="text-4xl font-black tracking-tighter mb-6 uppercase">
          🏆 The <span className="text-[#1DB954]">Arena</span>
        </h1>

        {/* Tab Switcher */}
        <div className="flex gap-4 border-b border-white/10 overflow-x-auto no-scrollbar">
          {["UPCOMING", "LIVE", "COMPLETED"].map((status) => (
            <button
              key={status}
              onClick={() => setActiveTab(status)}
              className={`pb-4 text-sm font-bold tracking-widest transition-all whitespace-nowrap ${
                activeTab === status
                  ? "text-[#1DB954] border-b-2 border-[#1DB954]"
                  : "text-[#b3b3b3] hover:text-white"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </header>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-[#1DB954] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-[#1DB954] font-bold tracking-widest animate-pulse">LOADING MATCHES...</p>
        </div>
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.length > 0 ? (
              filteredData.map((t) => (
                <motion.div
                  key={t._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  className="group bg-[#121212] border border-white/5 hover:border-[#1DB954]/50 p-6 rounded-2xl transition-all shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                        {activeTab === "LIVE" && (
                        <span className="flex items-center gap-2 text-[10px] font-black bg-red-600 px-2 py-1 rounded text-white animate-pulse">
                            ● LIVE
                        </span>
                        )}
                        <span className="text-[10px] font-bold text-[#b3b3b3] uppercase tracking-widest">
                        {t.game || "Free Fire"}
                        </span>
                    </div>

                    <h3 className="text-xl font-black mb-2 group-hover:text-[#1DB954] transition-colors">
                        {t.title}
                    </h3>

                    <div className="space-y-3 mt-4">
                        <div className="flex justify-between text-sm">
                        <span className="text-[#b3b3b3]">Prize Pool</span>
                        <span className="font-bold text-[#1DB954]">₹{t.prizePool}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                        <span className="text-[#b3b3b3]">Entry Fee</span>
                        <span className="font-bold text-white">
                            {t.entryFee === 0 ? "FREE" : `₹${t.entryFee}`}
                        </span>
                        </div>
                        <div className="flex justify-between text-sm">
                        <span className="text-[#b3b3b3]">Slots</span>
                        <span className="font-bold text-white">
                            {t.participants?.length || 0} / {t.maxPlayers}
                        </span>
                        </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => navigate(`/tournaments/${t._id}`)}
                    className="w-full mt-6 bg-white text-black font-black py-3 rounded-full hover:bg-[#1DB954] hover:text-white transition-all text-xs uppercase tracking-widest shadow-lg"
                  >
                    View Match
                  </button>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#b3b3b3] col-span-full py-20 text-center"
              >
                <p className="font-bold text-lg mb-2">No {activeTab.toLowerCase()} matches found.</p>
                <p className="text-sm opacity-50 uppercase tracking-tighter">Check back later for new custom rooms!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}