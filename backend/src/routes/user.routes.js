// backend/src/routes/user.routes.js

import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import Tournament from "../models/Tournament.js";
import User from "../models/User.js";

const router = express.Router();

// GET /api/users/me
// Returns the decoded JWT payload for the logged-in user.
// Lightweight — no DB query.
router.get("/me", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

// GET /api/users/profile
// Returns full profile data for the logged-in user:
//   - user identity fields
//   - aggregated stats from published results
//   - recent match history with participant and result records
//
// This endpoint replaces the client-side stat computation in Profile.jsx.
// Stats are sourced from Tournament.results[] — same source as the leaderboard.
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    // ── 1. Fetch user identity ───────────────────────────────────────
    const user = await User.findById(userId).select(
      "_id username email role"
    );
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // ── 2. Aggregate stats from results[] ───────────────────────────
    // Mirrors the leaderboard aggregation but filtered to one user.
    // Source of truth: Tournament.results[] with user ObjectId ref.
    const statsAgg = await Tournament.aggregate([
      // Only completed tournaments with published results.
      {
        $match: {
          status: "COMPLETED",
          "results.0": { $exists: true },
        },
      },
      // Unwind result rows.
      { $unwind: "$results" },
      // Only results linked to this user.
      {
        $match: {
          "results.user": user._id,
        },
      },
      // Compute per-result points (same formula as leaderboard).
      {
        $addFields: {
          resultPoints: {
            $switch: {
              branches: [
                {
                  case: { $eq: ["$matchCategory", "BATTLE_ROYALE"] },
                  then: {
                    $add: [
                      {
                        $cond: [
                          { $eq: ["$results.rank", "1"] },
                          20,
                          0,
                        ],
                      },
                      { $ifNull: ["$results.kills", 0] },
                    ],
                  },
                },
                {
                  case: { $eq: ["$matchCategory", "LONE_WOLF"] },
                  then: 10,
                },
              ],
              default: { $ifNull: ["$results.kills", 0] },
            },
          },
        },
      },
      // Sum all stats.
      {
        $group: {
          _id: null,
          totalPoints: { $sum: "$resultPoints" },
          totalKills: {
            $sum: { $ifNull: ["$results.kills", 0] },
          },
          totalMatches: { $sum: 1 },
          totalPrize: {
            $sum: { $ifNull: ["$results.prize", 0] },
          },
        },
      },
    ]);

    const stats =
      statsAgg.length > 0
        ? {
            totalPoints: statsAgg[0].totalPoints,
            totalKills: statsAgg[0].totalKills,
            totalMatches: statsAgg[0].totalMatches,
            totalPrize: statsAgg[0].totalPrize,
          }
        : {
            totalPoints: 0,
            totalKills: 0,
            totalMatches: 0,
            totalPrize: 0,
          };

    // ── 3. Fetch match history ───────────────────────────────────────
    // All tournaments the user has joined, sorted newest first.
    const tournaments = await Tournament.find({
      "participants.user": user._id,
    })
      .sort({ startTime: -1 })
      .select(
        "_id title matchCategory matchType status startTime prizePool participants results"
      );

    // Build match history — extract this user's participant and result
    // records from each tournament document.
    const recentMatches = tournaments.map((t) => {
      const myParticipant = t.participants.find(
        (p) => p.user.toString() === userId.toString()
      );

      const myResult =
        t.results?.find(
          (r) =>
            r.user && r.user.toString() === userId.toString()
        ) ?? null;

      return {
        _id: t._id,
        title: t.title,
        matchCategory: t.matchCategory,
        matchType: t.matchType,
        status: t.status,
        startTime: t.startTime,
        prizePool: t.prizePool,
        // Only expose this user's own participation data.
        myParticipant: myParticipant
          ? {
              ign: myParticipant.ign,
              uid: myParticipant.uid,
              slotNumber: myParticipant.slotNumber ?? null,
            }
          : null,
        // Result if published and linked to this user.
        myResult: myResult
          ? {
              rank: myResult.rank,
              kills: myResult.kills ?? null,
              prize: myResult.prize ?? 0,
            }
          : null,
      };
    });

    res.json({
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      stats,
      recentMatches,
    });
  } catch (err) {
    console.error("Profile endpoint error:", err);
    res.status(500).json({ message: "Failed to load profile." });
  }
});

export default router;