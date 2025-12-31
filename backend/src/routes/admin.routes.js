import express from "express";
import Tournament from "../models/Tournament.js";
import authMiddleware from "../middleware/auth.middleware.js";
import adminMiddleware from "../middleware/admin.middleware.js";

const router = express.Router();

// @route   GET /api/admin/tournaments
// @desc    Get all tournaments for admin management
router.get("/tournaments", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const tournaments = await Tournament.find().sort({ startTime: -1 });
    res.json(tournaments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tournaments" });
  }
});

// @route   PATCH /api/admin/tournaments/:id/room
// @desc    Update Room Credentials and Status
router.patch("/tournaments/:id/room", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { roomId, roomPassword, status } = req.body;
    
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) return res.status(404).json({ message: "Match not found" });

    if (roomId !== undefined) tournament.roomId = roomId;
    if (roomPassword !== undefined) tournament.roomPassword = roomPassword;
    if (status !== undefined) tournament.status = status;

    await tournament.save();
    
    // Security: Do not return the tournament object with secrets
    res.json({ success: true, message: "Tournament updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;