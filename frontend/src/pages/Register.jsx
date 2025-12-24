import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Connects to your backend auth.routes.js -> register controller
      await axios.post("http://localhost:5000/api/auth/register", form);
      
      // On success, send user to login page
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Flex centering ensures the card doesn't go to the side
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-6 py-10">
      
      {/* Branding Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">
          🔥 FF <span className="text-[#1DB954]">Arena</span>
        </h1>
      </motion.div>

      {/* Registration Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[450px] bg-[#121212] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl"
      >
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2 text-center tracking-tight">
          Sign up for free
        </h2>
        <p className="text-[#b3b3b3] text-center text-sm mb-8 font-medium">
          Start your journey in the arena.
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6 text-xs font-bold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Field */}
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Create a username"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-xl outline-none transition-all placeholder:text-[#535353] text-sm"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-xl outline-none transition-all placeholder:text-[#535353] text-sm"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-xl outline-none transition-all placeholder:text-[#535353] text-sm"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1DB954] text-black font-black py-4 rounded-full mt-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#1DB954]/20 uppercase tracking-widest text-sm disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-[#b3b3b3] text-xs md:text-sm font-bold">
            Already have an account?{" "}
            <Link to="/login" className="text-white hover:text-[#1DB954] transition underline decoration-[#1DB954] underline-offset-4 font-black">
              Log in here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}