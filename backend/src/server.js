// backend/src/server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";
import startCronJobs from "./cron/statusUpdater.js";
import { AppError } from "./utils/AppError.js";

// Route imports
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import tournamentRoutes from "./routes/tournament.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import leaderboardRoutes from "./routes/leaderboard.routes.js";

// Load environment variables first.
dotenv.config();

// ── Environment validation ─────────────────────────────────────────────────

const REQUIRED_ENV_VARS = ["MONGO_URI", "JWT_SECRET", "PORT"];

const missingVars = REQUIRED_ENV_VARS.filter(
  (key) => !process.env[key] || process.env[key].trim() === ""
);

if (missingVars.length > 0) {
  console.error("─────────────────────────────────────────────");
  console.error("  SERVER STARTUP FAILED — Missing environment variables:");
  missingVars.forEach((key) => console.error(`  ✗ ${key}`));
  console.error("");
  console.error("  Copy backend/.env.example to backend/.env");
  console.error("  and fill in all required values.");
  console.error("─────────────────────────────────────────────");
  process.exit(1);
}

const INSECURE_PATTERNS = [
  "changeme", "secret", "password", "example", "your_",
];

const insecureVars = ["JWT_SECRET", "MONGO_URI"].filter((key) => {
  const val = (process.env[key] ?? "").toLowerCase();
  return INSECURE_PATTERNS.some((pattern) => val.includes(pattern));
});

if (insecureVars.length > 0) {
  console.warn("─────────────────────────────────────────────");
  console.warn("  WARNING — Potentially insecure values detected:");
  insecureVars.forEach((key) =>
    console.warn(`  ⚠ ${key} appears to use a placeholder value`)
  );
  console.warn("  Rotate these before deploying to production.");
  console.warn("─────────────────────────────────────────────");
}

// ── App setup ──────────────────────────────────────────────────────────────

const app = express();
const PORT = process.env.PORT || 5000;
const isDev = process.env.NODE_ENV !== "production";

// ── CORS ───────────────────────────────────────────────────────────────────

const rawOrigins = process.env.CORS_ORIGIN ?? "http://localhost:5174";

const allowedOrigins = rawOrigins
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

if (isDev) {
  console.log("[CORS] Allowed origins:", allowedOrigins);
}

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    console.warn(`[CORS] Blocked request from origin: ${origin}`);
    return callback(
      new AppError(`CORS policy does not allow origin: ${origin}`, 403)
    );
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

// ── Body parsing ───────────────────────────────────────────────────────────

app.use(express.json());

// ── Request logging ────────────────────────────────────────────────────────

const skipHealthCheck = (req) => req.path === "/api/health";

app.use(
  morgan(isDev ? "dev" : "combined", {
    skip: skipHealthCheck,
  })
);

// ── General API rate limiter ───────────────────────────────────────────────
//
// Loose limit applied to all API routes — protects against general abuse.
// Auth routes have their own tighter limiter defined in auth.routes.js.
//
// Limits are configurable via environment variables:
//   API_RATE_LIMIT_WINDOW_MS  — window duration in ms (default: 15 minutes)
//   API_RATE_LIMIT_MAX        — max requests per window (default: 200)
//
// Disabled in development to avoid blocking local testing.

const apiRateLimiter = rateLimit({
  windowMs: Number(process.env.API_RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: Number(process.env.API_RATE_LIMIT_MAX) || 200,
  skip: () => isDev,
  handler: (req, res) => {
    res.status(429).json({
      message: "Too many requests from this IP. Please slow down.",
    });
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api", apiRateLimiter);

// ── Routes ─────────────────────────────────────────────────────────────────

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tournaments", tournamentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

// ── Health check ───────────────────────────────────────────────────────────

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV ?? "development",
  });
});

// ── 404 handler ────────────────────────────────────────────────────────────

app.use((req, res) => {
  res.status(404).json({
    message: `Route ${req.method} ${req.path} not found.`,
  });
});

// ── Centralized error handler ──────────────────────────────────────────────

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (isDev) {
    console.error(`[ERROR] ${req.method} ${req.path}`, err);
  } else if (!err.isOperational) {
    console.error("[UNEXPECTED ERROR]", err);
  }

  if (err.isOperational) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors)
      .map((e) => e.message)
      .join(". ");
    return res.status(400).json({
      message: `Validation failed: ${messages}`,
    });
  }
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue ?? {})[0] ?? "field";
    const value = err.keyValue?.[field] ?? "";
    return res.status(400).json({
      message: `${field} "${value}" is already in use.`,
    });
  }
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({ message: "Invalid token." });
  }
  if (err.name === "TokenExpiredError") {
    return res
      .status(401)
      .json({ message: "Token has expired. Please log in again." });
  }
  if (err.name === "CastError") {
    return res.status(400).json({
      message: `Invalid ${err.path}: ${err.value}.`,
    });
  }

  return res.status(500).json({
    message: isDev
      ? err.message ?? "Internal server error."
      : "An unexpected error occurred. Please try again later.",
    ...(isDev && { stack: err.stack }),
  });
});

// ── Process-level error handlers ──────────────────────────────────────────

process.on("unhandledRejection", (reason, promise) => {
  console.error("[UNHANDLED REJECTION]", promise, "Reason:", reason);
  if (!isDev) process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.error("[UNCAUGHT EXCEPTION]", err);
  process.exit(1);
});

// ── Start ──────────────────────────────────────────────────────────────────

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log("─────────────────────────────────────────────");
    console.log(`  🔥 Free Fire Arena API`);
    console.log(`  Server:      http://localhost:${PORT}`);
    console.log(`  Health:      http://localhost:${PORT}/api/health`);
    console.log(`  Environment: ${process.env.NODE_ENV ?? "development"}`);
    console.log(`  Logging:     ${isDev ? "dev (concise)" : "combined (Apache)"}`);
    console.log(`  CORS:        ${allowedOrigins.join(", ")}`);
    console.log(`  Rate limit:  ${isDev ? "disabled (dev)" : "active"}`);
    console.log("─────────────────────────────────────────────");
  });

  startCronJobs();
};

startServer();