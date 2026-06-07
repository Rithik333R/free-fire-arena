// frontend/src/hooks/useAuth.js

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

/**
 * useAuth — consumer hook for AuthContext.
 *
 * Returns: { token, user, loading, login, logout }
 *
 * Must be used inside <AuthProvider>. Throws a descriptive error if called
 * outside the provider tree, which helps catch wiring mistakes early.
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider. Check that AuthProvider wraps your component tree in main.jsx.");
  }
  return context;
}