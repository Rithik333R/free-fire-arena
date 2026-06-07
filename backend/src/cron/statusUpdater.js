// backend/src/cron/statusUpdater.js

import cron from "node-cron";
import Tournament from "../models/Tournament.js";

/**
 * startCronJobs — initializes all scheduled background tasks.
 *
 * Tournament status state machine (cron-driven transitions):
 *
 *   UPCOMING → LIVE             (cron: startTime <= now)
 *   LIVE → AWAITING_RESULTS     (cron: endTime <= now AND endTime exists)
 *
 * Admin-driven transitions (not handled here):
 *   AWAITING_RESULTS → COMPLETED  (admin publishes results)
 */
const startCronJobs = () => {
  cron.schedule("* * * * *", async () => {
    const now = new Date();

    try {
      // ── 1. UPCOMING → LIVE ───────────────────────────────────────────
      // Tournaments whose start time has passed.
      const liveResult = await Tournament.updateMany(
        {
          status: "UPCOMING",
          startTime: { $lte: now },
        },
        {
          $set: { status: "LIVE" },
        }
      );

      if (liveResult.modifiedCount > 0) {
        console.log(
          `[CRON] ${liveResult.modifiedCount} tournament(s) moved UPCOMING → LIVE`
        );
      }

      // ── 2. LIVE → AWAITING_RESULTS ───────────────────────────────────
      // Tournaments whose end time has passed.
      //
      // AWAITING_RESULTS means the match is over but the admin has not
      // yet published results. The admin publishing results will move
      // the tournament to COMPLETED.
      //
      // endTime guards ($exists, $ne null) protect against legacy documents
      // that were created before endTime was added to the schema.
      const awaitingResult = await Tournament.updateMany(
        {
          status: "LIVE",
          endTime: { $lte: now, $exists: true, $ne: null },
        },
        {
          $set: { status: "AWAITING_RESULTS" },
        }
      );

      if (awaitingResult.modifiedCount > 0) {
        console.log(
          `[CRON] ${awaitingResult.modifiedCount} tournament(s) moved LIVE → AWAITING_RESULTS`
        );
      }

      // ── 3. Orphan detection ──────────────────────────────────────────
      // LIVE tournaments with no endTime cannot auto-transition.
      // Log a warning — these require manual admin intervention via
      // PATCH /api/admin/tournaments/:id/room to set status manually.
      const orphans = await Tournament.find({
        status: "LIVE",
        $or: [
          { endTime: { $exists: false } },
          { endTime: null },
        ],
      }).select("_id title");

      if (orphans.length > 0) {
        console.warn(
          `[CRON] WARNING: ${orphans.length} LIVE tournament(s) have no endTime and cannot auto-transition:`
        );
        orphans.forEach((t) => {
          console.warn(`  → ${t._id} "${t.title}"`);
        });
      }
    } catch (error) {
      console.error("[CRON] Error during status update:", error);
    }
  });

  console.log("[CRON] Tournament status scheduler started.");
};

export default startCronJobs;