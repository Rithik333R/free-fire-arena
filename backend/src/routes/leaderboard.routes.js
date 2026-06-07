// backend/src/routes/leaderboard.routes.js

import express from "express";
import Tournament from "../models/Tournament.js";

const router = express.Router();

// ── Scoring constants ──────────────────────────────────────────────────────
//
// Points are awarded based on matchCategory (source of truth for mode).
//
// BATTLE_ROYALE:
//   Placement points: rank "1" = 20pts, all others = 0pts
//   + kills (1pt per kill)
//
// CLASH_SQUAD:
//   kills only (1pt per kill)
//   No placement points — round-based format
//
// LONE_WOLF:
//   10pts per win (appearing in results = win)
//   No kills tracked
//
// Only COMPLETED tournaments with results linked to a user account
// (result.user ObjectId exists) contribute to leaderboard scores.
// Pre-B4 results without user refs are excluded.
//
// Phase B5 — source of truth is now Tournament.results[]
// Previously was Tournament.participants[] which disagreed with
// published results. BUG-009 fix.

const BR_PLACEMENT_POINTS = 20;   // awarded to rank "1" only
const LW_WIN_POINTS = 10;         // awarded per Lone Wolf result row

// ── Route ──────────────────────────────────────────────────────────────────

// GET /api/leaderboard
// Public: returns top 50 players ranked by total points across all
// completed tournaments with published results.
router.get("/", async (req, res) => {
  try {
    const leaderboard = await Tournament.aggregate([

      // ── Stage 1: Only completed tournaments ───────────────────────
      {
        $match: {
          status: "COMPLETED",
          // Must have at least one result row.
          "results.0": { $exists: true },
        },
      },

      // ── Stage 2: Unwind results array ─────────────────────────────
      // Each result row becomes its own document for aggregation.
      {
        $unwind: "$results",
      },

      // ── Stage 3: Only results linked to a user account ────────────
      // Excludes manual-entry rows (user: null) — they cannot be
      // attributed to a leaderboard entry.
      {
        $match: {
          "results.user": { $exists: true, $ne: null },
        },
      },

      // ── Stage 4: Compute per-result points ────────────────────────
      // Points depend on matchCategory (source of truth for mode).
      {
        $addFields: {
          resultPoints: {
            $switch: {
              branches: [
                // BATTLE_ROYALE: placement points + kills
                {
                  case: { $eq: ["$matchCategory", "BATTLE_ROYALE"] },
                  then: {
                    $add: [
                      // 20pts for rank "1", 0 for all others.
                      {
                        $cond: [
                          { $eq: ["$results.rank", "1"] },
                          BR_PLACEMENT_POINTS,
                          0,
                        ],
                      },
                      // Add kills (default 0 if missing).
                      { $ifNull: ["$results.kills", 0] },
                    ],
                  },
                },

                // LONE_WOLF: flat points per win, no kills.
                {
                  case: { $eq: ["$matchCategory", "LONE_WOLF"] },
                  then: LW_WIN_POINTS,
                },
              ],

              // CLASH_SQUAD (and any unrecognized category):
              // kills only, no placement points.
              default: { $ifNull: ["$results.kills", 0] },
            },
          },
        },
      },

      // ── Stage 5: Group by user ─────────────────────────────────────
      {
        $group: {
          _id: "$results.user",
          totalPoints: { $sum: "$resultPoints" },
          totalKills: {
            $sum: { $ifNull: ["$results.kills", 0] },
          },
          totalMatches: { $sum: 1 },
          totalPrize: {
            $sum: { $ifNull: ["$results.prize", 0] },
          },
          // Keep the most recent IGN used in results.
          ign: { $last: "$results.ign" },
        },
      },

      // ── Stage 6: Join with users collection ───────────────────────
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "userDetails",
        },
      },

      // Discard entries where the user account no longer exists.
      {
        $match: {
          "userDetails.0": { $exists: true },
        },
      },

      { $unwind: "$userDetails" },

      // ── Stage 7: Project final shape ──────────────────────────────
      {
        $project: {
          _id: 1,
          ign: 1,
          username: "$userDetails.username",
          // avatar projected for future use — field does not exist on
          // User model yet. Will return null until Phase D adds it.
          avatar: "$userDetails.avatar",
          totalPoints: 1,
          totalKills: 1,
          totalMatches: 1,
          totalPrize: 1,
        },
      },

      // ── Stage 8: Sort and limit ────────────────────────────────────
      { $sort: { totalPoints: -1, totalKills: -1 } },
      { $limit: 50 },
    ]);

    res.json(leaderboard);
  } catch (err) {
    console.error("Leaderboard aggregation error:", err);
    res.status(500).json({ message: "Failed to generate leaderboard." });
  }
});

export default router;