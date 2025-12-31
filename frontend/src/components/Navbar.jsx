import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "ARENA LOBBY", path: "/lobby" },
    { name: "MY HUB", path: "/my-matches" },
  ];

  return (
    <nav className="bg-black/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[100] px-6 md:px-12 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <NavLink to="/lobby" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1DB954] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(29,185,84,0.4)]">
            <span className="text-black font-black text-xl italic">A</span>
          </div>
          <span className="font-black italic tracking-tighter text-2xl uppercase">Arena</span>
        </NavLink>

        {/* NAV LINKS */}
        <div className="flex gap-8 md:gap-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive ? "text-[#1DB954]" : "text-white/40 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#1DB954] shadow-[0_0_10px_#1DB954]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* PROFILE/LOGOUT placeholder */}
        <button className="hidden md:block text-[9px] font-black border border-white/10 px-5 py-2 rounded-full hover:bg-white/5 transition-all text-white/60">
          PROFILE
        </button>
      </div>
    </nav>
  );
}