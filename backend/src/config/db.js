// backend/src/config/db.js

import mongoose from "mongoose";

// ── Connection configuration ───────────────────────────────────────────────

const MAX_RETRIES = 5;
const INITIAL_RETRY_DELAY_MS = 2000; // 2 seconds

/**
 * sleep — non-blocking delay using a Promise.
 * Keeps the event loop free during retry wait periods.
 * @param {number} ms
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * connectDB — connects Mongoose to MongoDB Atlas with exponential backoff retry.
 *
 * Retry strategy:
 *   Attempt 1: immediate
 *   Attempt 2: wait 2s
 *   Attempt 3: wait 4s
 *   Attempt 4: wait 8s
 *   Attempt 5: wait 16s
 *   Give up:   process.exit(1)
 *
 * This handles transient Atlas connectivity issues without crashing
 * the server on the first failure.
 */
const connectDB = async () => {
  let attempt = 0;

  while (attempt < MAX_RETRIES) {
    attempt++;

    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        // Timeout settings — fail fast on bad URI rather than hanging.
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 10000,
      });

      console.log(
        `[DB] Connected to MongoDB Atlas: ${conn.connection.host}`
      );

      // Register connection event handlers for ongoing monitoring.
      mongoose.connection.on("disconnected", () => {
        console.warn("[DB] MongoDB disconnected. Mongoose will attempt to reconnect automatically.");
      });

      mongoose.connection.on("reconnected", () => {
        console.log("[DB] MongoDB reconnected successfully.");
      });

      mongoose.connection.on("error", (err) => {
        console.error("[DB] MongoDB connection error:", err);
      });

      return; // Connection successful — exit the retry loop.
    } catch (err) {
      const isLastAttempt = attempt >= MAX_RETRIES;

      if (isLastAttempt) {
        console.error("─────────────────────────────────────────────");
        console.error(`  [DB] Failed to connect after ${MAX_RETRIES} attempts.`);
        console.error(`  Last error: ${err.message}`);
        console.error("");
        console.error("  Check that:");
        console.error("  1. MONGO_URI in .env is correct");
        console.error("  2. MongoDB Atlas IP allowlist includes this server");
        console.error("  3. The database user credentials are valid");
        console.error("─────────────────────────────────────────────");
        process.exit(1);
      }

      // Calculate exponential backoff delay.
      // attempt 1 failed → wait 2s, attempt 2 failed → wait 4s, etc.
      const delayMs = INITIAL_RETRY_DELAY_MS * Math.pow(2, attempt - 1);

      console.warn(
        `[DB] Connection attempt ${attempt}/${MAX_RETRIES} failed: ${err.message}`
      );
      console.warn(
        `[DB] Retrying in ${delayMs / 1000}s...`
      );

      await sleep(delayMs);
    }
  }
};

export default connectDB;