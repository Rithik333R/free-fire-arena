// backend/src/routes/admin.routes.js

import express from "express";
import Tournament from "../models/Tournament.js";
import authMiddleware from "../middleware/auth.middleware.js";
import adminMiddleware from "../middleware/admin.middleware.js";

const router = express.Router();

// All routes in this file require authentication and admin role.
// authMiddleware and adminMiddleware are applied to every route.

// ── Validation helpers ─────────────────────────────────────────────────────

const LOCKED_AFTER_REGISTRATION = ["matchCategory", "matchType", "maxPlayers"];

/**
 * validateEditBody — validates fields submitted to the edit endpoint.
 * Returns an error message string if invalid, or null if valid.
 *
 * @param {object} body — request body
 * @param {object} tournament — existing tournament document
 */
function validateEditBody(body, tournament) {
  const hasParticipants = tournament.participants.length > 0;
  const isUpcoming = tournament.status === "UPCOMING";

  // Check locked fields — cannot change once registrations exist.
  for (const field of LOCKED_AFTER_REGISTRATION) {
    if (body[field] !== undefined && hasParticipants) {
      return `${field} cannot be changed after players have registered.`;
    }
  }

  // startTime and endTime can only be edited while UPCOMING.
  if (body.startTime !== undefined && !isUpcoming) {
    return "startTime can only be edited while the tournament is UPCOMING.";
  }
  if (body.endTime !== undefined && !isUpcoming) {
    return "endTime can only be edited while the tournament is UPCOMING.";
  }

  // Time validation when both are being updated.
  const newStart = body.startTime
    ? new Date(body.startTime)
    : new Date(tournament.startTime);
  const newEnd = body.endTime
    ? new Date(body.endTime)
    : new Date(tournament.endTime);

  if (body.startTime !== undefined) {
    if (isNaN(newStart.getTime())) return "startTime is not a valid date.";
    if (newStart <= new Date()) {
      return "startTime must be in the future.";
    }
  }

  if (body.endTime !== undefined) {
    if (isNaN(newEnd.getTime())) return "endTime is not a valid date.";
  }

  if (newEnd <= newStart) {
    return "endTime must be after startTime.";
  }

  // Numeric field validation.
  if (body.prizePool !== undefined) {
    if (isNaN(Number(body.prizePool)) || Number(body.prizePool) <= 0) {
      return "prizePool must be a positive number.";
    }
  }

  if (body.winnerPrize !== undefined) {
    if (isNaN(Number(body.winnerPrize)) || Number(body.winnerPrize) < 0) {
      return "winnerPrize must be a non-negative number.";
    }
  }

  if (body.perKillReward !== undefined) {
    if (isNaN(Number(body.perKillReward)) || Number(body.perKillReward) < 0) {
      return "perKillReward must be a non-negative number.";
    }
  }

  // Title must not be empty if provided.
  if (body.title !== undefined) {
    if (typeof body.title !== "string" || !body.title.trim()) {
      return "Title cannot be empty.";
    }
  }

  return null;
}

// ── Routes ─────────────────────────────────────────────────────────────────

// GET /api/admin/tournaments
// Returns all tournaments for admin management, sorted newest first.
router.get(
  "/tournaments",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const tournaments = await Tournament.find().sort({ startTime: -1 });
      res.json(tournaments);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch tournaments." });
    }
  }
);

// PATCH /api/admin/tournaments/:id/room
// Updates room credentials, status, and/or participant stats.
// Kept separate from the general edit endpoint — room operations
// are a distinct admin action from metadata editing.
router.patch(
  "/tournaments/:id/room",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const { roomId, roomPassword, status, participants } = req.body;

      const tournament = await Tournament.findById(req.params.id).select(
        "+roomId +roomPassword"
      );
      if (!tournament) {
        return res.status(404).json({ message: "Tournament not found." });
      }

      if (roomId !== undefined) tournament.roomId = roomId;
      if (roomPassword !== undefined) tournament.roomPassword = roomPassword;
      if (status !== undefined) tournament.status = status;

      if (Array.isArray(participants)) {
        tournament.participants = participants.map((p) => ({
          ...p,
          kills: Number(p.kills) || 0,
          rank: Number(p.rank) || 0,
        }));
      }

      await tournament.save();
      res.json({ success: true, message: "Tournament updated successfully." });
    } catch (err) {
      res.status(500).json({ message: "Server error." });
    }
  }
);

// PATCH /api/admin/tournaments/:id
// Edits tournament metadata.
//
// Always editable:
//   title, description, banner, rules, prizePool, winnerPrize, perKillReward
//
// Editable only while UPCOMING:
//   startTime, endTime
//
// Locked once any participant has registered:
//   matchCategory, matchType, maxPlayers
router.patch(
  "/tournaments/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const tournament = await Tournament.findById(req.params.id);
      if (!tournament) {
        return res.status(404).json({ message: "Tournament not found." });
      }

      // Cannot edit a canceled or completed tournament.
      if (
        tournament.status === "CANCELED" ||
        tournament.status === "COMPLETED"
      ) {
        return res.status(400).json({
          message: `A ${tournament.status.toLowerCase()} tournament cannot be edited.`,
        });
      }

      const validationError = validateEditBody(req.body, tournament);
      if (validationError) {
        return res.status(400).json({ message: validationError });
      }

      // Apply permitted updates field by field.
      // Never use $set: req.body — prevents unintended field overwrites.
      const {
        title,
        description,
        banner,
        rules,
        startTime,
        endTime,
        prizePool,
        winnerPrize,
        perKillReward,
        matchCategory,
        matchType,
        maxPlayers,
      } = req.body;

      if (title !== undefined) tournament.title = title.trim();
      if (description !== undefined) tournament.description = description.trim();
      if (banner !== undefined) tournament.banner = banner.trim();
      if (Array.isArray(rules)) tournament.rules = rules;
      if (startTime !== undefined) tournament.startTime = new Date(startTime);
      if (endTime !== undefined) tournament.endTime = new Date(endTime);
      if (prizePool !== undefined) tournament.prizePool = Number(prizePool);
      if (winnerPrize !== undefined) tournament.winnerPrize = Number(winnerPrize);
      if (perKillReward !== undefined) tournament.perKillReward = Number(perKillReward);

      // Locked fields — only applied when no participants exist.
      // validateEditBody already blocked these if participants exist,
      // so this is a safe secondary check.
      if (matchCategory !== undefined && tournament.participants.length === 0) {
        tournament.matchCategory = matchCategory;
      }
      if (matchType !== undefined && tournament.participants.length === 0) {
        tournament.matchType = matchType;
      }
      if (maxPlayers !== undefined && tournament.participants.length === 0) {
        tournament.maxPlayers = Number(maxPlayers);
      }

      await tournament.save();
      res.json({
        success: true,
        message: "Tournament updated successfully.",
        tournament,
      });
    } catch (err) {
      console.error("Error editing tournament:", err);
      res.status(500).json({ message: "Failed to update tournament." });
    }
  }
);

// PATCH /api/admin/tournaments/:id/cancel
// Cancels an UPCOMING tournament.
//
// Rules:
//   - Only UPCOMING tournaments can be canceled.
//   - LIVE, AWAITING_RESULTS, COMPLETED cannot be canceled.
//   - Sets status to CANCELED.
//   - Does not delete the document — keeps participant records intact.
//   - Cron ignores CANCELED tournaments automatically.
router.patch(
  "/tournaments/:id/cancel",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const tournament = await Tournament.findById(req.params.id);
      if (!tournament) {
        return res.status(404).json({ message: "Tournament not found." });
      }

      if (tournament.status !== "UPCOMING") {
        return res.status(400).json({
          message: `Only UPCOMING tournaments can be canceled. Current status: ${tournament.status}.`,
        });
      }

      tournament.status = "CANCELED";
      await tournament.save();

      res.json({
        success: true,
        message: "Tournament canceled successfully.",
      });
    } catch (err) {
      console.error("Error canceling tournament:", err);
      res.status(500).json({ message: "Failed to cancel tournament." });
    }
  }
);

export default router;