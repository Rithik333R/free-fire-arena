// backend/src/constants/tournamentRules.js

/**
 * Tournament business rules — Phase D+ slot-based system.
 *
 * This module is the single source of truth for:
 *   - slot count derivation per mode
 *   - teamNumber derivation from slotNumber
 *   - prize calculation per mode
 *   - mode-specific validation rules
 *
 * All route handlers import from here. No business logic is duplicated
 * across route files.
 */

// ── Slot count ─────────────────────────────────────────────────────────────

/**
 * getSlotCount — derives the total number of slots for a tournament.
 *
 * BATTLE_ROYALE: uses maxPlayers (admin-configured, flexible)
 * LONE_WOLF:     always 2 (1v1 format)
 * CLASH_SQUAD:   teamSize × 2 (two teams)
 *
 * @param {string} matchCategory
 * @param {string} matchType — e.g. "4v4", "2v2"
 * @param {number} maxPlayers — used only for BATTLE_ROYALE
 * @returns {number}
 */
export function getSlotCount(matchCategory, matchType, maxPlayers) {
  if (matchCategory === "BATTLE_ROYALE") {
    return maxPlayers;
  }

  if (matchCategory === "LONE_WOLF") {
    return 2;
  }

  // CLASH_SQUAD — derive from matchType.
  // matchType format: "NvN" where N is team size.
  if (matchCategory === "CLASH_SQUAD") {
    const teamSize = getTeamSize(matchType);
    if (!teamSize) return 0;
    return teamSize * 2; // always two teams
  }

  return 0;
}

/**
 * getTeamSize — extracts the per-team player count from matchType.
 * "1v1" → 1, "2v2" → 2, "3v3" → 3, "4v4" → 4
 *
 * Returns null if matchType is not a recognized NvN format.
 *
 * @param {string} matchType
 * @returns {number | null}
 */
export function getTeamSize(matchType) {
  if (!matchType) return null;
  const match = matchType.match(/^(\d+)v\d+$/i);
  if (!match) return null;
  const size = parseInt(match[1], 10);
  return size > 0 ? size : null;
}

// ── Team number derivation ─────────────────────────────────────────────────

/**
 * getTeamNumber — derives which team a slot belongs to.
 *
 * BATTLE_ROYALE and LONE_WOLF: returns null (no team structure).
 * CLASH_SQUAD: slots 1..teamSize = team 1, slots teamSize+1..end = team 2.
 *
 * Formula: Math.ceil(slotNumber / teamSize)
 *
 * Examples (4v4):
 *   slot 1 → team 1
 *   slot 4 → team 1
 *   slot 5 → team 2
 *   slot 8 → team 2
 *
 * Examples (2v2):
 *   slot 1 → team 1
 *   slot 2 → team 1
 *   slot 3 → team 2
 *   slot 4 → team 2
 *
 * @param {string} matchCategory
 * @param {string} matchType
 * @param {number} slotNumber — 1-indexed
 * @returns {number | null}
 */
export function getTeamNumber(matchCategory, matchType, slotNumber) {
  if (matchCategory === "BATTLE_ROYALE") return null;
  if (matchCategory === "LONE_WOLF") return null;

  // CLASH_SQUAD
  const teamSize = getTeamSize(matchType);
  if (!teamSize || !slotNumber) return null;

  return Math.ceil(slotNumber / teamSize);
}

// ── Prize calculation ──────────────────────────────────────────────────────

/**
 * calculateBRPrizes — calculates prize for each result row in a
 * Battle Royale tournament.
 *
 * Formula:
 *   Winner (rank "1"): winnerPrize + (kills × perKillReward)
 *   All others:        kills × perKillReward
 *
 * @param {object[]} resultRows — array of { rank, kills, ...rest }
 * @param {number} winnerPrize
 * @param {number} perKillReward
 * @returns {object[]} — same rows with prize field added
 */
export function calculateBRPrizes(resultRows, winnerPrize, perKillReward) {
  return resultRows.map((row) => {
    const kills = row.kills ?? 0;
    const killPrize = kills * (perKillReward ?? 0);
    const isWinner = String(row.rank) === "1";
    const prize = isWinner
      ? (winnerPrize ?? 0) + killPrize
      : killPrize;

    return { ...row, prize };
  });
}

/**
 * calculateCSPrizes — calculates prize for each winning team member
 * in a Clash Squad tournament.
 *
 * Formula: prizePool / teamSize (equal split)
 *
 * @param {object[]} winningParticipants — participant records for winning team
 * @param {number} prizePool
 * @param {string} matchType — used to derive teamSize
 * @returns {object[]} — result rows with prize field
 */
export function calculateCSPrizes(winningParticipants, prizePool, matchType) {
  const teamSize = getTeamSize(matchType);
  if (!teamSize || teamSize === 0) return [];

  const prizePerPlayer = Math.floor(prizePool / teamSize);

  return winningParticipants.map((p, index) => ({
    rank: index === 0 ? "Winner" : "Winner",
    user: p.user ?? null,
    ign: p.ign,
    uid: p.uid ?? null,
    kills: p.kills ?? 0,
    prize: prizePerPlayer,
  }));
}

/**
 * calculateLWPrize — calculates prize for a Lone Wolf winner.
 *
 * Formula: winner receives full prizePool.
 *
 * @param {object} winner — participant record
 * @param {number} prizePool
 * @returns {object} — single result row with prize field
 */
export function calculateLWPrize(winner, prizePool) {
  return {
    rank: "Winner",
    user: winner.user ?? null,
    ign: winner.ign,
    uid: winner.uid ?? null,
    kills: null,
    prize: prizePool,
  };
}

// ── Payout preview ─────────────────────────────────────────────────────────

/**
 * getPayoutPreview — returns human-readable payout structure strings
 * for display in tournament cards and detail pages.
 *
 * Used by frontend to render the payout preview section.
 * Does not affect any calculation — informational only.
 *
 * @param {object} tournament — tournament document fields
 * @returns {{ lines: string[], example: string | null }}
 */
export function getPayoutPreview(tournament) {
  const { matchCategory, matchType, prizePool, winnerPrize, perKillReward } =
    tournament;

  if (matchCategory === "BATTLE_ROYALE") {
    const lines = [
      `Winner Prize: ₹${winnerPrize ?? 0}`,
      `Per Kill Reward: ₹${perKillReward ?? 0}`,
    ];
    const exampleKills = 5;
    const exampleTotal =
      (winnerPrize ?? 0) + exampleKills * (perKillReward ?? 0);
    const example = `Example: ${exampleKills} kills + win = ₹${exampleTotal}`;
    return { lines, example };
  }

  if (matchCategory === "CLASH_SQUAD") {
    const teamSize = getTeamSize(matchType);
    const prizePerPlayer = teamSize
      ? Math.floor(prizePool / teamSize)
      : prizePool;
    const lines = [
      `Prize Pool: ₹${prizePool}`,
      `Winning Team Share: ₹${prizePerPlayer} per player`,
    ];
    return { lines, example: null };
  }

  if (matchCategory === "LONE_WOLF") {
    const lines = [`Winner Takes All: ₹${prizePool}`];
    return { lines, example: null };
  }

  return { lines: [], example: null };
}

// ── Validation helpers ─────────────────────────────────────────────────────

/**
 * validateBRRewardFields — checks that winnerPrize and perKillReward
 * are present and valid for Battle Royale tournaments.
 *
 * Returns error message string or null if valid.
 *
 * @param {object} body — request body
 * @returns {string | null}
 */
export function validateBRRewardFields(body) {
  const { winnerPrize, perKillReward } = body;

  if (winnerPrize === undefined || winnerPrize === null || winnerPrize === "") {
    return "winnerPrize is required for Battle Royale tournaments.";
  }
  if (isNaN(Number(winnerPrize)) || Number(winnerPrize) < 0) {
    return "winnerPrize must be a non-negative number.";
  }

  if (
    perKillReward === undefined ||
    perKillReward === null ||
    perKillReward === ""
  ) {
    return "perKillReward is required for Battle Royale tournaments.";
  }
  if (isNaN(Number(perKillReward)) || Number(perKillReward) < 0) {
    return "perKillReward must be a non-negative number.";
  }

  return null;
}

/**
 * validateSlotNumber — checks that a slotNumber is within the valid
 * range for a tournament.
 *
 * Returns error message string or null if valid.
 *
 * @param {number} slotNumber
 * @param {number} totalSlots
 * @returns {string | null}
 */
export function validateSlotNumber(slotNumber, totalSlots) {
  if (slotNumber === undefined || slotNumber === null) {
    return "slotNumber is required.";
  }
  const n = Number(slotNumber);
  if (!Number.isInteger(n) || n < 1 || n > totalSlots) {
    return `slotNumber must be an integer between 1 and ${totalSlots}.`;
  }
  return null;
}