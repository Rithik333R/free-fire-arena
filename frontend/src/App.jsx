import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Import these!
import { useAuth } from "./context/AuthContext";           // Import this!
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [open, setOpen] = useState(false);
  const { token } = useAuth(); // Access the token here

  return (
    <div className="flex min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* 1. Sidebar only shows if there is a token */}
      {token && <Sidebar open={open} setOpen={setOpen} />} 

      <Routes>
        {/* 2. If logged in, send "/" to Home. If NOT logged in, send to Login */}
        <Route 
          path="/" 
          element={token ? <Home open={open} setOpen={setOpen} /> : <Navigate to="/login" />} 
        />
        
        {/* 3. Login and Register are only for users WITHOUT a token */}
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}