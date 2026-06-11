// backend/src/routes/tournament.routes.js

import express from "express";
import Tournament from "../models/Tournament.js";
import authMiddleware from "../middleware/auth.middleware.js";
import adminMiddleware from "../middleware/admin.middleware.js";
import {
  getSlotCount,
  getTeamNumber,
  validateSlotNumber,
  calculateBRPrizes,
  calculateCSPrizes,
  calculateLWPrize,
  getTeamSize,
} from "../constants/tournamentRules.js";

const router = express.Router();

// ── Validation helpers ─────────────────────────────────────────────────────

const VALID_CATEGORIES = ["BATTLE_ROYALE", "CLASH_SQUAD", "LONE_WOLF"];
const VALID_MATCH_TYPES = [
  "1v1", "2v2", "3v3", "4v4",
  "Solo", "Duo", "Squad", "Full Room",
];

function validateTournamentBody(body) {
  const {
    title, matchCategory, matchType,
    startTime, endTime, prizePool, maxPlayers, entryFee,
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

function validateBRResultPayload(body) {
  const { winner, killRewardPlayers } = body;

  if (!winner || typeof winner !== "object") {
    return "winner is required for Battle Royale results.";
  }
  if (!winner.ign || typeof winner.ign !== "string" || !winner.ign.trim()) {
    return "winner.ign is required.";
  }
  if (winner.kills === undefined || winner.kills === null) {
    return "winner.kills is required.";
  }
  if (isNaN(Number(winner.kills)) || Number(winner.kills) < 0) {
    return "winner.kills must be a non-negative number.";
  }
  if (killRewardPlayers !== undefined) {
    if (!Array.isArray(killRewardPlayers)) {
      return "killRewardPlayers must be an array.";
    }
    for (const p of killRewardPlayers) {
      if (!p.ign || typeof p.ign !== "string" || !p.ign.trim()) {
        return "Each killRewardPlayer must have a valid ign.";
      }
      if (p.kills === undefined || p.kills === null) {
        return "Each killRewardPlayer must have a kills value.";
      }
      if (isNaN(Number(p.kills)) || Number(p.kills) < 0) {
        return "Each killRewardPlayer.kills must be a non-negative number.";
      }
    }
  }

  return null;
}

function validateCSResultPayload(body) {
  const { winningTeamNumber } = body;

  if (winningTeamNumber === undefined || winningTeamNumber === null) {
    return "winningTeamNumber is required for Clash Squad results.";
  }
  const n = Number(winningTeamNumber);
  if (!Number.isInteger(n) || n < 1 || n > 2) {
    return "winningTeamNumber must be 1 or 2.";
  }

  return null;
}

function validateLWResultPayload(body) {
  const { winner } = body;

  if (!winner || typeof winner !== "object") {
    return "winner is required for Lone Wolf results.";
  }
  if (!winner.ign || typeof winner.ign !== "string" || !winner.ign.trim()) {
    return "winner.ign is required.";
  }

  return null;
}

// ── Public routes ──────────────────────────────────────────────────────────

// GET /api/tournaments
// Public: all non-canceled tournaments.
router.get("/", async (req, res) => {
  try {
    const tournaments = await Tournament.find({
      status: { $ne: "CANCELED" },
    }).sort({ startTime: 1 });
    res.json(tournaments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tournaments." });
  }
});

// ── Authenticated player routes ────────────────────────────────────────────

// GET /api/tournaments/registered
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

// GET /api/tournaments/:id/slots
router.get("/:id/slots", authMiddleware, async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) {
      return res.status(404).json({ message: "Tournament not found." });
    }

    const userId = req.user.id;
    const totalSlots = getSlotCount(
      tournament.matchCategory,
      tournament.matchType,
      tournament.maxPlayers
    );

    if (totalSlots === 0) {
      return res.status(400).json({
        message: "Cannot determine slot count for this tournament configuration.",
      });
    }

    const occupiedSlots = new Set(
      tournament.participants
        .filter((p) => p.slotNumber !== null && p.slotNumber !== undefined)
        .map((p) => p.slotNumber)
    );

    const myParticipant = tournament.participants.find(
      (p) => p.user.toString() === userId.toString()
    );
    const mySlot = myParticipant?.slotNumber ?? null;

    const slots = Array.from({ length: totalSlots }, (_, i) => {
      const slotNumber = i + 1;
      const teamNumber = getTeamNumber(
        tournament.matchCategory,
        tournament.matchType,
        slotNumber
      );
      return {
        slotNumber,
        occupied: occupiedSlots.has(slotNumber),
        teamNumber,
      };
    });

    const availableCount = slots.filter((s) => !s.occupied).length;
    res.json({ totalSlots, slots, availableCount, mySlot });
  } catch (err) {
    console.error("Error fetching slot map:", err);
    res.status(500).json({ message: "Failed to fetch slot map." });
  }
});

// GET /api/tournaments/:id/results
// PUBLIC — no auth required.
// Returns only the public-safe fields needed for the results page.
// Never includes room credentials or private participant data.
// Declared before GET /:id to ensure Express matches it correctly.
router.get("/:id/results", async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id).select(
      "_id title matchCategory matchType map status startTime endTime prizePool results"
    );

    if (!tournament) {
      return res.status(404).json({ message: "Tournament not found." });
    }

    // Sanitize result rows — remove internal user ObjectIds from
    // the public response. Players see IGN, rank, kills, prize only.
    const publicResults = (tournament.results ?? []).map((r) => ({
      rank: r.rank,
      ign: r.ign,
      kills: r.kills,
      prize: r.prize,
    }));

    res.json({
      _id: tournament._id,
      title: tournament.title,
      matchCategory: tournament.matchCategory,
      matchType: tournament.matchType,
      map: tournament.map,
      status: tournament.status,
      startTime: tournament.startTime,
      endTime: tournament.endTime,
      prizePool: tournament.prizePool,
      results: publicResults,
    });
  } catch (err) {
    console.error("Error fetching public results:", err);
    res.status(500).json({ message: "Failed to fetch results." });
  }
});

// GET /api/tournaments/:id
// Secure: full tournament detail with credential reveal.
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

// POST /api/tournaments/:id/join
router.post("/:id/join", authMiddleware, async (req, res) => {
  try {
    const joinError = validateJoinBody(req.body);
    if (joinError) {
      return res.status(400).json({ message: joinError });
    }

    const { ign, uid, slotNumber } = req.body;
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

    const totalSlots = getSlotCount(
      tournament.matchCategory,
      tournament.matchType,
      tournament.maxPlayers
    );

    const slotError = validateSlotNumber(slotNumber, totalSlots);
    if (slotError) {
      return res.status(400).json({ message: slotError });
    }

    const slotNum = Number(slotNumber);

    const slotOccupied = tournament.participants.some(
      (p) => p.slotNumber === slotNum
    );
    if (slotOccupied) {
      return res.status(400).json({
        message: `Slot ${slotNum} is already taken. Please select another slot.`,
      });
    }

    const teamNumber = getTeamNumber(
      tournament.matchCategory,
      tournament.matchType,
      slotNum
    );

    tournament.participants.push({
      user: req.user.id,
      ign: ign.trim(),
      uid: uid.trim(),
      slotNumber: slotNum,
      teamNumber,
    });

    await tournament.save();

    res.status(200).json({
      success: true,
      message: "Registered successfully!",
      slotNumber: slotNum,
      teamNumber,
    });
  } catch (error) {
    console.error("Join error:", error);
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
        { roomId: roomId.trim(), roomPassword: roomPassword.trim() },
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

router.put(
  "/:id/results",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
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

      const { matchCategory, matchType, prizePool, winnerPrize, perKillReward } =
        tournament;

      let computedResults = [];

      if (matchCategory === "BATTLE_ROYALE") {
        const payloadError = validateBRResultPayload(req.body);
        if (payloadError) {
          return res.status(400).json({ message: payloadError });
        }

        const { winner, killRewardPlayers = [] } = req.body;

        const winnerRow = {
          rank: "1",
          user: winner.user ?? null,
          ign: winner.ign.trim(),
          uid: winner.uid ?? null,
          kills: Number(winner.kills),
        };

        const killRows = killRewardPlayers
          .filter((p) => Number(p.kills) > 0)
          .sort((a, b) => Number(b.kills) - Number(a.kills))
          .map((p, i) => ({
            rank: String(i + 2),
            user: p.user ?? null,
            ign: p.ign.trim(),
            uid: p.uid ?? null,
            kills: Number(p.kills),
          }));

        computedResults = calculateBRPrizes(
          [winnerRow, ...killRows],
          winnerPrize ?? 0,
          perKillReward ?? 0
        );
      } else if (matchCategory === "CLASH_SQUAD") {
        const payloadError = validateCSResultPayload(req.body);
        if (payloadError) {
          return res.status(400).json({ message: payloadError });
        }

        const { winningTeamNumber } = req.body;
        const teamNum = Number(winningTeamNumber);

        const winningTeamParticipants = tournament.participants.filter(
          (p) => p.teamNumber === teamNum
        );

        if (winningTeamParticipants.length === 0) {
          return res.status(400).json({
            message: `No participants found for team ${teamNum}.`,
          });
        }

        const expectedTeamSize = getTeamSize(matchType);
        if (
          expectedTeamSize &&
          winningTeamParticipants.length !== expectedTeamSize
        ) {
          return res.status(400).json({
            message: `Team ${teamNum} has ${winningTeamParticipants.length} player(s) but ${matchType} requires ${expectedTeamSize}.`,
          });
        }

        computedResults = calculateCSPrizes(
          winningTeamParticipants,
          prizePool,
          matchType
        );
      } else if (matchCategory === "LONE_WOLF") {
        const payloadError = validateLWResultPayload(req.body);
        if (payloadError) {
          return res.status(400).json({ message: payloadError });
        }

        const { winner } = req.body;
        computedResults = [
          calculateLWPrize(
            {
              user: winner.user ?? null,
              ign: winner.ign.trim(),
              uid: winner.uid ?? null,
            },
            prizePool
          ),
        ];
      } else {
        return res.status(400).json({
          message: `Unsupported matchCategory: ${matchCategory}.`,
        });
      }

      tournament.results = computedResults;
      tournament.status = "COMPLETED";
      await tournament.save();

      res.status(200).json({
        success: true,
        message: "Results published successfully.",
        results: computedResults,
        tournament,
      });
    } catch (err) {
      console.error("Error publishing results:", err);
      res.status(500).json({ error: "Failed to publish results." });
    }
  }
);

export default router;