// frontend/src/api/axios.js

import axios from "axios";

/**
 * apiClient — the single Axios instance for the entire frontend.
 *
 * Base URL is read from the Vite environment variable VITE_API_URL.
 * Fallback to localhost is for local development only and must not
 * appear in a production build (set VITE_API_URL in the deployment env).
 */
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request interceptor — attaches the JWT to every outgoing request.
 *
 * The token is read from localStorage at call time (not at module load time)
 * so it correctly reflects the current auth state whether the user is logged
 * in or logged out.
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Response interceptor — handles global error conditions.
 *
 * 401 Unauthorized: the token is missing, expired, or invalid.
 * Clear local auth state and redirect to login so the user can
 * re-authenticate. This prevents infinite loops on protected pages.
 *
 * All other errors are passed through to the calling code so each
 * feature can handle domain-specific errors appropriately.
 *
 * NOTE: Direct localStorage manipulation here is a known limitation.
 * A proper auth event bus will be introduced in Phase E when the
 * session management strategy is formalized.
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // Only redirect if not already on the login page to avoid loops.
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;