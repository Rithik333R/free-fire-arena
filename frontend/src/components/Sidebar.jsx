import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login", { replace: true });
  };

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
        <h1 className="text-xl font-black text-[#1DB954] mb-10">🔥 FF Arena</h1>

        <nav className="flex-1 space-y-2">
          {["Home", "Tournaments", "Profile"].map((item) => (
            <div
              key={item}
              className="px-4 py-3 text-[#b3b3b3] hover:text-white rounded-lg hover:bg-white/5 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-6 bg-[#1DB954] text-black font-black py-4 rounded-full hover:scale-105 transition"
        >
          Logout
        </button>
      </motion.aside>
    </>
  );
}
