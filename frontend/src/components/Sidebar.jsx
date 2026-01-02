import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom"; 
import { useAuth } from "../context/AuthContext";

export default function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login", { replace: true });
  };

  // Base navigation for everyone
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Tournaments", path: "/tournaments" },
    { name: "Leaderboard", path: "/leaderboard", icon: "🏆" }, // ✅ Added Leaderboard
    { name: "My Hub", path: "/my-matches" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: open ? 0 : -300 }}
        className="fixed top-0 left-0 z-50 h-full w-72 bg-[#121212] border-r border-[#282828] p-6 flex flex-col"
      >
        <h1 className="text-xl font-black text-[#1DB954] mb-10 uppercase italic tracking-tighter">
          🔥 FF Arena
        </h1>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              onClick={() => setOpen(false)} 
              className="block"
            >
              <div className="px-4 py-3 text-[#b3b3b3] font-bold text-sm hover:text-white rounded-lg hover:bg-white/5 cursor-pointer transition-colors flex items-center gap-3">
                {item.icon && <span>{item.icon}</span>}
                {item.name}
              </div>
            </Link>
          ))}

          {/* ADMIN ONLY SECTION */}
          {user?.role === "ADMIN" && (
            <div className="pt-4 mt-4 border-t border-white/5">
              <p className="px-4 mb-2 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Management</p>
              <Link 
                to="/admin"
                onClick={() => setOpen(false)} 
                className="block"
              >
                <div className="px-4 py-3 text-[#1DB954] font-black text-sm hover:brightness-125 rounded-lg hover:bg-[#1DB954]/5 cursor-pointer transition-all border border-[#1DB954]/20">
                  🛡️ Command Center
                </div>
              </Link>
            </div>
          )}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-6 bg-[#1DB954] text-black font-black py-4 rounded-full hover:scale-105 transition uppercase text-xs"
        >
          Logout
        </button>
      </motion.aside>
    </>
  );
}