import { useState } from "react";
import { Menu } from "lucide-react";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-neutral-900 text-white">
      
      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 h-full bg-black transition-all duration-300 ease-in-out
        ${open ? "w-56" : "w-16"} flex flex-col`}
      >
        {/* Logo / Menu */}
        <div className="flex items-center gap-3 p-4">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-300 hover:text-white transition"
          >
            <Menu size={22} />
          </button>

          {open && (
            <span className="text-green-500 font-bold text-lg transition-opacity">
              FF Arena
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-2">
          {["Home", "Tournaments", "Profile"].map((item) => (
            <div
              key={item}
              className="group flex items-center gap-4 px-4 py-3 cursor-pointer
              hover:bg-neutral-800 transition-all duration-300"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition" />
              {open && (
                <span className="text-gray-300 group-hover:text-white">
                  {item}
                </span>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 flex flex-col transition-all duration-300
        ${open ? "ml-56" : "ml-16"}`}
      >
        {/* Top Bar */}
        <header className="h-14 bg-neutral-800 flex items-center justify-between px-6">
          <span className="text-sm text-gray-400">
            Welcome to Free Fire Arena
          </span>

          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
            className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </header>

        {/* Page Content */}
        <section className="flex-1 p-8 overflow-y-auto">
          {children}
        </section>
      </main>
    </div>
  );
}
