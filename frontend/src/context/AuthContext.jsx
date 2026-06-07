// frontend/src/context/AuthContext.jsx

import { createContext, useState } from "react";

// AuthContext is exported so useAuth (in hooks/useAuth.js) can reference it,
// and so the provider can be imported in main.jsx or App.jsx.
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  // loading is kept for future use (e.g. token validation on startup in Phase E).
  // It is intentionally not wired to anything yet — that work is scoped to Phase E.
  const [loading] = useState(false);

  const login = (newToken, newUser) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}