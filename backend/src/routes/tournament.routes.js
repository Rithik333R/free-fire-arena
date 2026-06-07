// backend/src/routes/tournament.routes.js

import express from "express";
import Tournament from "../models/Tournament.js";
import authMiddleware from "../middleware/auth.middleware.js";
import adminMiddleware from "../middleware/admin.middleware.js";

const router = express.Router();

// ── Validation helpers ─────────────────────────────────────────────────────

const VALID_CATEGORIES = ["BATTLE_ROYALE", "CLASH_SQUAD", "LONE_WOLF"];
const VALID_MATCH_TYPES = [
  "1v1", "2v2", "3v3", "4v4",
  "Solo", "Duo", "Squad", "Full Room",
];

function validateTournamentBody(body) {
  const {
    title,
    matchCategory,
    matchType,
    startTime,
    endTime,
    prizePool,
    maxPlayers,
    entryFee,
  } = body;

  if (!title || typeof title !== "string" || !title.trim()) {
    return "Tournament title is required.";
  }
  if (!matchCategory || !VALID_CATEGORIES.includes(matchCategory)) {
    return `matchCategory must be one of: ${VALID_CATEGORIES.join(", ")}.`;
  }
  if (matchType !== undefined && matchType !== null && matchType !== "") {
    if (!VALID_MATCH_TYPES.includes(matchType)) {
      return `matchType must be one of: ${VALID_MATCH_TYPES.join(", ")}.`;
    }
  }
  if (!startTime) return "startTime is required.";
  if (!endTime) return "endTime is required.";

  const start = new Date(startTime);
  const end = new Date(endTime);

  if (isNaN(start.getTime())) return "startTime is not a valid date.";
  if (isNaN(end.getTime())) return "endTime is not a valid date.";
  if (start <= new Date()) return "startTime must be in the future.";
  if (end <= start) return "endTime must be after startTime.";

  if (prizePool === undefined || prizePool === null || prizePool === "") {
    return "prizePool is required.";
  }
  if (isNaN(Number(prizePool)) || Number(prizePool) <= 0) {
    return "prizePool must be a positive number.";
  }
  if (maxPlayers === undefined || maxPlayers === null || maxPlayers === "") {
    return "maxPlayers is required.";
  }
  if (isNaN(Number(maxPlayers)) || Number(maxPlayers) < 2) {
    return "maxPlayers must be at least 2.";
  }
  if (entryFee !== undefined && entryFee !== null && entryFee !== "") {
    if (isNaN(Number(entryFee)) || Number(entryFee) < 0) {
      return "entryFee must be a non-negative number.";
    }
  }

  return null;
}

function validateJoinBody(body) {
  const { ign, uid } = body;

  if (!ign || typeof ign !== "string" || !ign.trim()) {
    return "IGN (in-game name) is required.";
  }
  if (ign.trim().length < 2 || ign.trim().length > 30) {
    return "IGN must be between 2 and 30 characters.";
  }
  if (!uid || typeof uid !== "string" || !uid.trim()) {
    return "UID is required.";
  }
  if (!/^\d{6,12}$/.test(uid.trim())) {
    return "UID must be a numeric string between 6 and 12 digits.";
  }

  return null;
}

function validateCredentialsBody(body) {
  const { roomId, roomPassword } = body;

  if (!roomId || typeof roomId !== "string" || !roomId.trim()) {
    return "Room ID is required.";
  }
  if (!roomPassword || typeof roomPassword !== "string" || !roomPassword.trim()) {
    return "Room password is required.";
  }

  return null;
}

// ── Public routes ──────────────────────────────────────────────────────────

router.get("/", async (req, res) => {
  try {
    const tournaments = await Tournament.find().sort({ startTime: 1 });
    res.json(tournaments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tournaments." });
  }
});

// ── Authenticated player routes ────────────────────────────────────────────

router.get("/registered", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const matches = await Tournament.find({
      "participants.user": userId,
    }).sort({ startTime: 1 });
    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: "Error fetching your matches." });
  }
});

router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) {
      return res.status(404).json({ message: "Tournament not found." });
    }

    const userId = req.user.id;
    const now = new Date();
    const startTime = new Date(tournament.startTime);
    const fifteenMinsBefore = new Date(
      startTime.getTime() - 15 * 60 * 1000
    );

    const isRegistered = tournament.participants.some(
      (p) => p.user.toString() === userId.toString()
    );

    const shouldReveal = now >= fifteenMinsBefore && isRegistered;
    const responseData = tournament.toObject();

    if (shouldReveal) {
      const secureMatch = await Tournament.findById(req.params.id).select(
        "+roomId +roomPassword"
      );
      responseData.credentialsRevealed = true;
      responseData.roomId = secureMatch.roomId ?? null;
      responseData.roomPassword = secureMatch.roomPassword ?? null;
    } else {
      responseData.credentialsRevealed = false;
      delete responseData.roomId;
      delete responseData.roomPassword;
    }

    res.json(responseData);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

router.post("/:id/join", authMiddleware, async (req, res) => {
  try {
    const joinError = validateJoinBody(req.body);
    if (joinError) {
      return res.status(400).json({ message: joinError });
    }

    const { ign, uid } = req.body;
    const tournament = await Tournament.findById(req.params.id);

    if (!tournament || tournament.status !== "UPCOMING") {
      return res.status(400).json({ message: "Registration is not open." });
    }
    if (tournament.participants.length >= tournament.maxPlayers) {
      return res.status(400).json({ message: "Tournament is full." });
    }

    const alreadyJoined = tournament.participants.some(
      (p) => p.user.toString() === req.user.id
    );
    if (alreadyJoined) {
      return res.status(400).json({
        message: "Already registered for this tournament.",
      });
    }

    const uidTaken = tournament.participants.some(
      (p) => p.uid === uid.trim()
    );
    if (uidTaken) {
      return res.status(400).json({
        message: "This UID is already registered for this tournament.",
      });
    }

    tournament.participants.push({
      user: req.user.id,
      ign: ign.trim(),
      uid: uid.trim(),
    });
    await tournament.save();

    res.status(200).json({ success: true, message: "Registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Join failed." });
  }
});

// ── Admin routes ───────────────────────────────────────────────────────────

router.post("/", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const validationError = validateTournamentBody(req.body);
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    const newTournament = new Tournament(req.body);
    const savedTournament = await newTournament.save();
    res.status(201).json(savedTournament);
  } catch (err) {
    console.error("Error creating tournament:", err);
    res.status(500).json({ error: "Failed to create tournament." });
  }
});

router.put(
  "/:id/credentials",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const credError = validateCredentialsBody(req.body);
      if (credError) {
        return res.status(400).json({ message: credError });
      }

      const { roomId, roomPassword } = req.body;

      const updatedMatch = await Tournament.findByIdAndUpdate(
        req.params.id,
        {
          roomId: roomId.trim(),
          roomPassword: roomPassword.trim(),
        },
        { new: true }
      );

      if (!updatedMatch) {
        return res.status(404).json({ message: "Tournament not found." });
      }

      res.status(200).json({
        success: true,
        message: "Credentials updated successfully.",
      });
    } catch (err) {
      console.error("Error updating credentials:", err);
      res.status(500).json({ error: "Failed to update credentials." });
    }
  }
);

// PUT /api/tournaments/:id/results
// Admin: publishes final results and moves tournament to COMPLETED.
//
// State machine:
//   AWAITING_RESULTS → COMPLETED   (normal post-match flow)
//   COMPLETED → COMPLETED          (admin correcting published results)
//
// Each result row now persists user ObjectId and uid when provided
// (B4.3 fix — previously these fields were silently discarded).
router.put(
  "/:id/results",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const { results } = req.body;

      if (!Array.isArray(results) || results.length === 0) {
        return res.status(400).json({
          message: "Results must be a non-empty array.",
        });
      }

      const invalidRow = results.some(
        (r) => !r.ign || typeof r.ign !== "string" || !r.ign.trim()
      );
      if (invalidRow) {
        return res.status(400).json({
          message: "Each result entry must have a valid IGN.",
        });
      }

      const tournament = await Tournament.findById(req.params.id);
      if (!tournament) {
        return res.status(404).json({ message: "Tournament not found." });
      }

      const publishableStates = ["AWAITING_RESULTS", "COMPLETED"];
      if (!publishableStates.includes(tournament.status)) {
        return res.status(400).json({
          message: `Results can only be published for tournaments in AWAITING_RESULTS or COMPLETED status. Current status: ${tournament.status}.`,
        });
      }

      // Map result rows — persist user ref and uid when present.
      // user defaults to null (not empty string) to avoid ObjectId cast errors.
      // uid defaults to null for manual entry slots.
      tournament.results = results.map((r) => ({
        rank: r.rank,
        user: r.user ?? null,
        ign: r.ign.trim(),
        uid: r.uid ?? null,
        kills: r.kills ?? 0,
        prize: r.prize ?? 0,
      }));

      tournament.status = "COMPLETED";
      await tournament.save();

      res.status(200).json(tournament);
    } catch (err) {
      console.error("Error publishing results:", err);
      res.status(500).json({ error: "Failed to publish results." });
    }
  }
);

export default router;