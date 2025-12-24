import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home({ open, setOpen }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <main className="flex-1 bg-black min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-black/50 backdrop-blur-xl border-b border-white/5 p-6 flex justify-between items-center">
        <button
          onClick={() => setOpen(true)}
          className="text-2xl p-2 rounded-full hover:bg-white/10"
        >
          ☰
        </button>

        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={handleLogout}
              className="bg-[#1DB954] text-black font-bold px-8 py-2.5 rounded-full hover:scale-105 transition"
            >
              Logout
            </motion.button>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="px-8 pt-12">
        <h1 className="text-6xl font-black tracking-tight">
          Welcome to <span className="text-[#1DB954]">Free Fire Arena 🔥</span>
        </h1>
        <p className="text-[#b3b3b3] mt-4 max-w-xl">
          Your esports journey starts here.
        </p>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {[
          { label: "Matches Played", value: 24 },
          { label: "Total Kills", value: 187 },
          { label: "Win Rate", value: "62%" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -8, backgroundColor: "#282828" }}
            className="bg-[#181818] border border-[#282828] rounded-2xl p-8"
          >
            <p className="text-[#b3b3b3] uppercase text-xs">{stat.label}</p>
            <h2 className="text-5xl font-black mt-3">{stat.value}</h2>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
