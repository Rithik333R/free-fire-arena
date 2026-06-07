// frontend/src/pages/admin/SetRoomCredentials.jsx

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTournamentById, setRoomCredentials } from "../../api/tournaments.api";

export default function SetRoomCredentials() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [matchTitle, setMatchTitle] = useState(null);
  const [formData, setFormData] = useState({ roomId: "", roomPassword: "" });
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  // Fetch the tournament title so the admin knows which match they are updating.
  useEffect(() => {
    if (!id) return;

    const fetchMatch = async () => {
      try {
        const data = await getTournamentById(id);
        setMatchTitle(data.title);
      } catch (err) {
        console.error("Failed to fetch match title:", err);
        setFetchError("Could not load match details.");
      }
    };

    fetchMatch();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    // Trim check — prevent whitespace-only credentials.
    if (!formData.roomId.trim() || !formData.roomPassword.trim()) {
      setSubmitError("Room ID and password cannot be empty.");
      return;
    }

    setLoading(true);

    try {
      await setRoomCredentials(id, {
        roomId: formData.roomId.trim(),
        roomPassword: formData.roomPassword.trim(),
      });
      navigate("/admin");
    } catch (err) {
      const message =
        err.response?.data?.message ??
        err.response?.data?.error ??
        "Failed to update credentials. Please try again.";
      setSubmitError(message);
    } finally {
      setLoading(false);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 flex items-center justify-center">
      <div className="max-w-xl w-full">

        {/* Back button */}
        <button
          onClick={() => navigate("/admin")}
          className="group mb-8 flex items-center gap-2 text-white/40 hover:text-[#1DB954] transition-all font-black uppercase text-[10px] tracking-widest"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954]/50 transition-all">
            ←
          </div>
          Back to Dashboard
        </button>

        <div className="bg-[#121212] border border-white/5 rounded-2xl p-8 md:p-10">

          {/* Header */}
          <header className="mb-8">
            <div className="inline-block bg-red-500/10 text-red-400 border border-red-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              Admin · Room Credentials
            </div>

            {fetchError ? (
              <p className="text-red-400 text-sm font-black uppercase tracking-widest">
                {fetchError}
              </p>
            ) : matchTitle === null ? (
              <div className="h-8 w-48 bg-white/5 rounded-lg animate-pulse" />
            ) : (
              <h1 className="text-2xl font-black italic uppercase tracking-tighter text-[#1DB954]">
                {matchTitle}
              </h1>
            )}

            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mt-3">
              Credentials reveal to registered players 15 min before start
            </p>
          </header>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Free Fire Room ID
              </label>
              <input
                type="text"
                name="roomId"
                required
                value={formData.roomId}
                onChange={handleChange}
                placeholder="e.g. 55667788"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-xl font-mono text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors tracking-wider"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                Room Password
              </label>
              <input
                type="text"
                name="roomPassword"
                required
                value={formData.roomPassword}
                onChange={handleChange}
                placeholder="e.g. JOINFAST12"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-xl font-mono text-white placeholder-white/20 focus:outline-none focus:border-[#1DB954] transition-colors tracking-wider"
              />
            </div>

            {/* Error */}
            {submitError && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-4">
                <p className="text-red-400 text-[11px] font-black uppercase tracking-widest">
                  {submitError}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1DB954] text-black font-black uppercase tracking-widest text-xs py-5 rounded-xl hover:bg-white transition-all disabled:opacity-50"
            >
              {loading ? "Transmitting..." : "Push Credentials to Players"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}