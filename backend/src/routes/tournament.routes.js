import express from "express";
import Tournament from "../models/Tournament.js";

const router = express.Router();

// 1. GET ALL TOURNAMENTS (This was missing!)
// This handles http://localhost:5000/api/tournaments
router.get("/", async (req, res) => {
  try {
    const tournaments = await Tournament.find();
    res.json(tournaments);
  } catch (err) {
    res.status(500).json({ message: "Server error fetching tournaments" });
  }
});

// 2. GET SINGLE TOURNAMENT BY ID
// This handles http://localhost:5000/api/tournaments/:id
router.get("/:id", async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) return res.status(404).json({ message: "Match not found" });
    res.json(tournament);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;