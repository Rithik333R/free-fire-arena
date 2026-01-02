import express from "express";
import Tournament from "../models/Tournament.js";
import User from "../models/User.js";

const router = express.Router();

// @route   GET /api/leaderboard
// @desc    Get top players based on total points (Mode-Specific Logic)
router.get("/", async (req, res) => {
  try {
    const leaderboard = await Tournament.aggregate([
      { $match: { status: "COMPLETED" } },
      { $unwind: "$participants" },
      {
        $group: {
          _id: "$participants.user",
          // ✅ MODE-SPECIFIC SCORING LOGIC
          totalPoints: {
            $sum: {
              $cond: [
                { $eq: ["$matchCategory", "BATTLE_ROYALE"] },
                // BR Logic: (Rank 1 ? 20pts : 0pts) + Kills
                { 
                  $add: [
                    { $cond: [{ $eq: ["$participants.rank", 1] }, 20, 0] },
                    "$participants.kills"
                  ] 
                },
                // CS / Lone Wolf Logic: Just Kills (Placement points disabled)
                "$participants.kills"
              ]
            }
          },
          totalKills: { $sum: "$participants.kills" },
          totalMatches: { $sum: 1 },
          ign: { $last: "$participants.ign" }
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "userDetails"
        }
      },
      { $unwind: "$userDetails" },
      {
        $project: {
          _id: 1,
          ign: 1,
          username: "$userDetails.username",
          totalPoints: 1,
          totalKills: 1,
          totalMatches: 1,
          avatar: "$userDetails.avatar"
        }
      },
      // Sort by Points now instead of just Kills
      { $sort: { totalPoints: -1 } },
      { $limit: 50 }
    ]);

    res.json(leaderboard);
  } catch (err) {
    console.error("Leaderboard Error:", err);
    res.status(500).json({ message: "Failed to generate leaderboard" });
  }
});

export default router;