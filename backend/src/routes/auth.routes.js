// backend/src/routes/auth.routes.js

import express from "express";
import rateLimit from "express-rate-limit";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();

const isDev = process.env.NODE_ENV !== "production";

// ── Auth rate limiter ──────────────────────────────────────────────────────
//
// Protects login and register endpoints from brute-force and spam attacks.
//
// Limits are read from environment variables so they can be tuned
// per environment without code changes:
//   AUTH_RATE_LIMIT_WINDOW_MS  — window duration in ms (default: 15 minutes)
//   AUTH_RATE_LIMIT_MAX        — max requests per window (default: 10)
//
// Rate limiting is disabled in development to avoid blocking local testing.
// Always active in production.

const authRateLimiter = rateLimit({
  windowMs: Number(process.env.AUTH_RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: Number(process.env.AUTH_RATE_LIMIT_MAX) || 10,
  // Skip rate limiting in development.
  skip: () => isDev,
  // Consistent error response shape matching the rest of the API.
  handler: (req, res) => {
    res.status(429).json({
      message:
        "Too many attempts from this IP. Please wait 15 minutes before trying again.",
    });
  },
  // Use the standard RateLimit headers (RateLimit-Limit, RateLimit-Remaining, RateLimit-Reset).
  standardHeaders: true,
  // Disable the legacy X-RateLimit headers.
  legacyHeaders: false,
});

// ── Routes ─────────────────────────────────────────────────────────────────

// POST /api/auth/register
// Rate limited: 10 requests per 15 minutes per IP in production.
router.post("/register", authRateLimiter, register);

// POST /api/auth/login
// Rate limited: 10 requests per 15 minutes per IP in production.
router.post("/login", authRateLimiter, login);

export default router;