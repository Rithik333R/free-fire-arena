import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Import these!
import { useAuth } from "./context/AuthContext";           // Import this!
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tournaments from "./pages/Tournaments";


export default function App() {
  const [open, setOpen] = useState(false);
  const { token } = useAuth(); 

  return (
    <div className="flex min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Sidebar shows only if logged in */}
      {token && <Sidebar open={open} setOpen={setOpen} />} 

      <main className="flex-1"> {/* Added a main wrapper for layout consistency */}
        <Routes>
          {/* Main Home Route */}
          <Route 
            path="/" 
            element={token ? <Home open={open} setOpen={setOpen} /> : <Navigate to="/login" />} 
          />
          
          {/* 🏆 NEW: Protected Tournaments Route */}
          <Route 
  path="/tournaments" 
  element={token ? <Tournaments setOpen={setOpen} /> : <Navigate to="/login" />} 
/>

          <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}