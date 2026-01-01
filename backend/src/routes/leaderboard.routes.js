import express from "express";
import Tournament from "../models/Tournament.js";
import User from "../models/User.js";

const router = express.Router();

// @route   GET /api/leaderboard
// @desc    Get top players based on total kills across all tournaments
router.get("/", async (req, res) => {
  try {
    const leaderboard = await Tournament.aggregate([
      // 1. Only look at completed matches (optional, but recommended)
      { $match: { status: "COMPLETED" } },

      // 2. Break the participants array into individual documents
      { $unwind: "$participants" },

      // 3. Group by the user ID and sum their stats
      {
        $group: {
          _id: "$participants.user",
          totalKills: { $sum: "$participants.kills" },
          totalMatches: { $sum: 1 },
          // We take the last known IGN used by the player
          ign: { $last: "$participants.ign" }
        }
      },

      // 4. Join with the Users collection to get the profile picture or username
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "userDetails"
        }
      },

      // 5. Flatten the user details array
      { $unwind: "$userDetails" },

      // 6. Project the final shape of the data
      {
        $project: {
          _id: 1,
          ign: 1,
          username: "$userDetails.username",
          totalKills: 1,
          totalMatches: 1,
          avatar: "$userDetails.avatar" // If you have an avatar field
        }
      },

      // 7. Sort by highest kills
      { $sort: { totalKills: -1 } },

      // 8. Limit to top 50
      { $limit: 50 }
    ]);

    res.json(leaderboard);
  } catch (err) {
    console.error("Leaderboard Error:", err);
    res.status(500).json({ message: "Failed to generate leaderboard" });
  }
});

export default router;