import express from "express";
import Tournament from "../models/Tournament.js";
import authMiddleware from "../middleware/auth.middleware.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// 1. PUBLIC: Get all tournaments for the Lobby
router.get("/", async (req, res) => {
  try {
    const tournaments = await Tournament.find().sort({ startTime: 1 });
    res.json(tournaments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch lobby." });
  }
});

// 2. SECURE: Get only tournaments the logged-in user joined
router.get("/registered", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const matches = await Tournament.find({ 
      "participants.user": userId 
    }).sort({ startTime: 1 });
    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: "Error fetching your matches." });
  }
});

// 3. SECURE REVEAL: Get specific tournament details
// We use authMiddleware here to ensure we know WHO is asking.
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) return res.status(404).json({ message: "Tournament not found." });

    const userId = req.user.id;
    const now = new Date();
    const startTime = new Date(tournament.startTime);
    const fifteenMinsBefore = new Date(startTime.getTime() - 15 * 60000);

    // CRITICAL SECURITY CHECK
    const isRegistered = tournament.participants.some(
      (p) => p.user.toString() === userId.toString()
    );

    let revealedData = tournament.toObject();

    // Only fetch secrets if: 1. Time is right AND 2. User is registered
    if (now >= fifteenMinsBefore && isRegistered) {
      const secureMatch = await Tournament.findById(req.params.id).select("+roomId +roomPassword");
      revealedData.roomId = secureMatch.roomId;
      revealedData.roomPassword = secureMatch.roomPassword;
    } else {
      // Masking the data even if they are in the JSON
      revealedData.roomId = "REVEALING 15M BEFORE START";
      revealedData.roomPassword = "REVEALING 15M BEFORE START";
    }

    res.json(revealedData);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

// 4. JOIN ARENA
router.post("/:id/join", authMiddleware, async (req, res) => {
  try {
    const { ign, uid } = req.body;
    const tournament = await Tournament.findById(req.params.id);
    
    if (!tournament || tournament.status !== "UPCOMING") {
      return res.status(400).json({ message: "Registration is not open." });
    }

    const alreadyJoined = tournament.participants.some(p => p.user.toString() === req.user.id);
    if (alreadyJoined) return res.status(400).json({ message: "Already in this tournament." });

    tournament.participants.push({ user: req.user.id, ign, uid });
    await tournament.save();
    res.status(200).json({ success: true, message: "Registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Join failed." });
  }
});

export default router;