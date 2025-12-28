import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tournaments from "./pages/Tournaments";
import TournamentDetail from "./pages/TournamentDetail";

export default function App() {
  const [open, setOpen] = useState(false);
  const { token } = useAuth(); 

  return (
    <div className="flex min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* 1. Sidebar: Only visible when a user is logged in */}
      {token && <Sidebar open={open} setOpen={setOpen} />} 

      {/* 2. Main Content Area */}
      <main className="flex-1"> 
        <Routes>
          {/* --- DASHBOARD ROUTE --- */}
          <Route 
            path="/" 
            element={token ? <Home open={open} setOpen={setOpen} /> : <Navigate to="/login" />} 
          />
          
         {/* --- TOURNAMENT LIST PAGE --- */}
          <Route path="/tournaments" element={<Tournaments setOpen={setOpen} />} />
<Route path="/tournaments/view/:id" element={<TournamentDetail setOpen={setOpen} />} />

          {/* --- AUTH ROUTES --- */}
          <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />

          {/* Fallback: Redirect any unknown path to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}