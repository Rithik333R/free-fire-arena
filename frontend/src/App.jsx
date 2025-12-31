import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tournaments from "./pages/Tournaments";
import TournamentDetail from "./pages/TournamentDetail";
import MyMatches from "./pages/MyMatches";
import AdminPanel from "./pages/AdminPanel"; // Ensure this exists!


export default function App() {
  const [open, setOpen] = useState(false);
  const { token, user, loading } = useAuth(); 

  // Prevent rendering if the AuthContext is still checking the local token
  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#1DB954] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Sidebar: Only visible when logged in */}
      {token && <Sidebar open={open} setOpen={setOpen} />} 

      <main className="flex-1"> 
        <Routes>
          {/* DASHBOARD */}
          <Route 
            path="/" 
            element={token ? <Home open={open} setOpen={setOpen} /> : <Navigate to="/login" />} 
          />
          
          {/* PUBLIC TOURNAMENT ROUTES */}
          <Route path="/tournaments" element={<Tournaments setOpen={setOpen} />} />
          <Route path="/tournaments/view/:id" element={<TournamentDetail setOpen={setOpen} />} />

          {/* MY HUB */}
          <Route 
            path="/my-matches" 
            element={token ? <MyMatches setOpen={setOpen} /> : <Navigate to="/login" />} 
          />

          {/* ADMIN CONTROL PANEL - Protected by Role */}
          <Route 
            path="/admin" 
            element={
              (token && user?.role === "ADMIN") 
                ? <AdminPanel /> 
                : <Navigate to="/" />
            } 
          />

          {/* AUTH ROUTES */}
          <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}