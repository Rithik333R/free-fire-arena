// backend/src/models/Tournament.js

import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  // String rank supports numeric placement ("1", "2") and
  // labeled slots ("Winner", "Runner Up", "Squad MVP").
  rank: { type: String, required: true },

  // user ref links this result to a registered participant.
  // Optional — pre-B4 results without a ref continue to work.
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },

  ign: { type: String, required: true },
  uid: { type: String, default: null },
  kills: { type: Number, default: 0 },
  prize: { type: Number, default: 0 },
});

const participantSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ign: { type: String, required: true },
  uid: { type: String, required: true },
  // Performance stats written by admin via PATCH /api/admin/tournaments/:id/room.
  kills: { type: Number, default: 0 },
  rank: { type: Number, default: 0 },
  joinedAt: { type: Date, default: Date.now },

  // Phase D+ fields — null for pre-D+ participants (backward compatible).
  slotNumber: { type: Number, default: null },
  teamNumber: { type: Number, default: null },
});

const tournamentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    game: { type: String, default: "Free Fire" },
    banner: {
      type: String,
      default:
        "https://via.placeholder.com/800x400?text=FREE+FIRE+ARENA",
    },
    description: { type: String, default: "" },
    rules: [{ type: String }],

    // matchCategory is the source of truth for tournament mode.
    // matchType represents format detail within a category.
    matchCategory: {
      type: String,
      enum: ["BATTLE_ROYALE", "CLASH_SQUAD", "LONE_WOLF"],
      required: true,
      default: "CLASH_SQUAD",
    },

    matchType: {
      type: String,
      enum: [
        "1v1", "2v2", "3v3", "4v4",
        "Solo", "Duo", "Squad", "Full Room",
      ],
      default: "4v4",
    },

    map: { type: String, required: true },

    // ── Schedule ─────────────────────────────────────────────────────
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },

    // ── Entry & Prize ─────────────────────────────────────────────────
    entryFee: { type: Number, default: 0 },
    prizePool: { type: Number, required: true },
    maxPlayers: { type: Number, required: true },

    // ── Reward Configuration (Phase D+ enforcement) ───────────────────
    // winnerPrize: flat prize awarded to placement #1 (BATTLE_ROYALE).
    // perKillReward: prize per kill for all players (BATTLE_ROYALE).
    // Optional in Phase C — D+ will require these for BR at creation.
    winnerPrize: { type: Number, default: 0 },
    perKillReward: { type: Number, default: 0 },

    // ── Lifecycle ─────────────────────────────────────────────────────
    // State machine:
    //   UPCOMING → LIVE                (cron: startTime <= now)
    //   LIVE → AWAITING_RESULTS        (cron: endTime <= now)
    //   AWAITING_RESULTS → COMPLETED   (admin: publishes results)
    //   UPCOMING → CANCELED            (admin: cancels before match starts)
    //
    // CANCELED tournaments:
    //   - Hidden from player lobby
    //   - Visible in admin dashboard
    //   - Shown in player MyMatches with CANCELED badge
    //   - Never transitioned by cron
    status: {
      type: String,
      enum: [
        "UPCOMING",
        "LIVE",
        "AWAITING_RESULTS",
        "COMPLETED",
        "CANCELED",        // Phase C addition
      ],
      default: "UPCOMING",
    },

    // ── Room credentials ──────────────────────────────────────────────
    // select: false keeps credentials out of standard queries.
    roomId: { type: String, select: false, default: null },
    roomPassword: { type: String, select: false, default: null },

    // ── Participants & Results ────────────────────────────────────────
    participants: [participantSchema],
    results: [resultSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Tournament", tournamentSchema);