import express from "express";
import Tournament from "../models/Tournament.js";
import authMiddleware from "../middleware/auth.middleware.js"; 

const router = express.Router();

// @route   GET /api/tournaments
// @desc    Get all tournaments for the Lobby
router.get("/", async (req, res) => {
  try {
    const tournaments = await Tournament.find().sort({ startTime: 1 });
    res.json(tournaments);
  } catch (err) {
    console.error("Fetch All Error:", err);
    res.status(500).json({ message: "Failed to fetch tournaments" });
  }
});

// @route   GET /api/tournaments/:id
// @desc    Get a single tournament by ID for the Detail page
router.get("/:id", async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) {
      return res.status(404).json({ message: "Tournament not found" });
    }
    res.json(tournament);
  } catch (err) {
    console.error("Fetch One Error:", err);
    res.status(500).json({ message: "Server error fetching match details" });
  }
});

// @route   POST /api/tournaments/:id/join
// @desc    Register a user for a match
router.post("/:id/join", authMiddleware, async (req, res) => {
  try {
    const { ign, uid } = req.body;

    if (!ign || !uid) {
      return res.status(400).json({ message: "In-Game Name (IGN) and UID are required" });
    }

    const tournament = await Tournament.findById(req.params.id);

    if (!tournament) {
      return res.status(404).json({ message: "Tournament not found" });
    }

    if (tournament.status !== "UPCOMING") {
      return res.status(400).json({ message: `Registration is closed. Match is ${tournament.status}` });
    }

    if (tournament.participants.length >= tournament.maxPlayers) {
      return res.status(400).json({ message: "The arena is full!" });
    }

    const alreadyJoined = tournament.participants.some(
      (p) => p.user.toString() === req.user.id.toString()
    );

    if (alreadyJoined) {
      return res.status(400).json({ message: "You have already registered for this match" });
    }

    tournament.participants.push({
      user: req.user.id,
      ign: ign.trim(),
      uid: uid.trim(),
      joinedAt: new Date()
    });

    await tournament.save();

    res.status(200).json({
      success: true,
      message: "Successfully joined the arena!",
      participantCount: tournament.participants.length
    });

  } catch (error) {
    console.error("Join Error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
});

export default router;