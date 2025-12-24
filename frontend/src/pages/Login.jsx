import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      login(res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (stayLoggedIn) {
        localStorage.setItem("rememberMe", "true");
      }

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    // "items-center" and "justify-center" ensure the card stays dead-center
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-6 py-12">
      
      {/* Brand Header - Responsive Text Size */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase text-center">
          🔥 FF <span className="text-[#1DB954]">Arena</span>
        </h1>
      </div>

      {/* Login Card - Mobile width: 100% | Desktop width: max 450px */}
      <div className="w-full max-w-[450px] bg-[#121212] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center tracking-tight">
          Log in to continue
        </h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6 text-sm font-bold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-lg outline-none transition-all placeholder:text-[#535353] text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b3b3b3] ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[#242424] text-white border border-transparent focus:border-[#1DB954]/50 p-4 rounded-lg outline-none transition-all placeholder:text-[#535353] text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between text-xs md:text-sm py-1">
            <label className="flex items-center cursor-pointer text-[#b3b3b3] hover:text-white transition group">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2 accent-[#1DB954] bg-[#242424] border-none rounded cursor-pointer"
                checked={stayLoggedIn}
                onChange={(e) => setStayLoggedIn(e.target.checked)}
              />
              <span className="font-bold">Stay logged in</span>
            </label>
            
            <Link 
              to="/forgot-password" 
              className="text-[#b3b3b3] hover:text-[#1DB954] font-bold transition"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1DB954] text-black font-black py-4 rounded-full mt-4 hover:scale-[1.02] active:scale-[0.95] transition-all shadow-lg shadow-[#1DB954]/20 uppercase tracking-widest text-sm"
          >
            Log In
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-[#b3b3b3] text-xs md:text-sm font-bold">
            Don't have an account?{" "}
            <Link to="/register" className="text-white hover:text-[#1DB954] transition underline decoration-[#1DB954] underline-offset-4">
              Sign up for FF Arena
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}