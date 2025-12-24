import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Both components share the 'open' state */}
      <Sidebar open={open} setOpen={setOpen} />
      <Home open={open} setOpen={setOpen} />
    </div>
  );
}