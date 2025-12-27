import express from "express";
import Tournament from "../models/Tournament.js"; // Note the .js extension

const router = express.Router();

// GET /api/tournaments
router.get("/", async (req, res) => {
  try {
    const tournaments = await Tournament.find().sort({ startTime: 1 });
    res.json(tournaments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tournaments" });
  }
});

// ✅ Change module.exports to:
export default router;