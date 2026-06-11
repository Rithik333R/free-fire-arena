// frontend/src/App.jsx

import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

// Layout
import Sidebar from "./components/Sidebar";

// Public / Auth pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// Player pages
import Home from "./pages/Home";
import Tournaments from "./pages/Tournaments";
import TournamentDetail from "./pages/TournamentDetail";
import MatchResults from "./pages/MatchResults";
import MyMatches from "./pages/MyMatches";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateTournament from "./pages/admin/CreateTournament";
import EditTournament from "./pages/admin/EditTournament";
import SetRoomCredentials from "./pages/admin/SetRoomCredentials";
import PublishResults from "./pages/admin/PublishResults";

// ── Route Guards ───────────────────────────────────────────────────────────

function RequireAuth({ children }) {
  const { token } = useAuth();
  if (!token) return <Navigate to="/login" replace />;
  return children;
}

function RequireAdmin({ children }) {
  const { token, user } = useAuth();
  if (!token) return <Navigate to="/login" replace />;
  if (user?.role !== "ADMIN") return <Navigate to="/" replace />;
  return children;
}

function RequireGuest({ children }) {
  const { token } = useAuth();
  if (token) return <Navigate to="/" replace />;
  return children;
}

// ── Shared Header ──────────────────────────────────────────────────────────

function AppHeader({ onOpenSidebar }) {
  return (
    <header className="sticky top-0 z-30 bg-black/50 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center">
      <button
        onClick={onOpenSidebar}
        aria-label="Open navigation menu"
        className="text-2xl p-2 rounded-full hover:bg-white/10 transition-colors text-white"
      >
        ☰
      </button>
    </header>
  );
}

// ── App ────────────────────────────────────────────────────────────────────

export default function App() {
  const { token, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#1DB954] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {token && (
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      )}

      <div className="flex flex-col min-h-screen">
        {token && (
          <AppHeader onOpenSidebar={() => setSidebarOpen(true)} />
        )}

        <main className="flex-1 overflow-y-auto">
          <Routes>

            {/* ── Guest-only routes ────────────────────────────────── */}
            <Route
              path="/login"
              element={
                <RequireGuest>
                  <Login />
                </RequireGuest>
              }
            />
            <Route
              path="/register"
              element={
                <RequireGuest>
                  <Register />
                </RequireGuest>
              }
            />

            {/* ── Public routes ────────────────────────────────────── */}
            {/*
              Results page is intentionally public — no RequireAuth.
              MatchResults uses GET /api/tournaments/:id/results which
              requires no authentication. Logged-out users can view
              completed match results directly via URL.
            */}
            <Route
              path="/tournaments/:id/results"
              element={<MatchResults />}
            />

            {/* ── Authenticated player routes ──────────────────────── */}
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/tournaments"
              element={
                <RequireAuth>
                  <Tournaments />
                </RequireAuth>
              }
            />
            <Route
              path="/tournaments/view/:id"
              element={
                <RequireAuth>
                  <TournamentDetail />
                </RequireAuth>
              }
            />
            <Route
              path="/my-matches"
              element={
                <RequireAuth>
                  <MyMatches />
                </RequireAuth>
              }
            />
            <Route
              path="/leaderboard"
              element={
                <RequireAuth>
                  <Leaderboard />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />

            {/* ── Admin-only routes ────────────────────────────────── */}
            <Route
              path="/admin"
              element={
                <RequireAdmin>
                  <AdminDashboard />
                </RequireAdmin>
              }
            />
            <Route
              path="/admin/tournaments/new"
              element={
                <RequireAdmin>
                  <CreateTournament />
                </RequireAdmin>
              }
            />
            <Route
              path="/admin/tournaments/:id/edit"
              element={
                <RequireAdmin>
                  <EditTournament />
                </RequireAdmin>
              }
            />
            <Route
              path="/admin/tournaments/:id/room"
              element={
                <RequireAdmin>
                  <SetRoomCredentials />
                </RequireAdmin>
              }
            />
            <Route
              path="/admin/tournaments/:id/results"
              element={
                <RequireAdmin>
                  <PublishResults />
                </RequireAdmin>
              }
            />

            {/* ── Fallback ─────────────────────────────────────────── */}
            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </main>
      </div>
    </div>
  );
}