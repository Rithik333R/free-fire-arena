// frontend/src/api/user.api.js

import apiClient from "./axios";

/**
 * getMe — returns the decoded JWT payload for the logged-in user.
 * Lightweight — no full DB query on the backend.
 * @returns {Promise<{ user: object }>}
 */
export const getMe = () =>
  apiClient.get("/users/me").then((res) => res.data);

/**
 * getUserProfile — returns full profile data for the logged-in user.
 *
 * Response shape:
 * {
 *   user: { _id, username, email, role },
 *   stats: { totalPoints, totalKills, totalMatches, totalPrize },
 *   recentMatches: [{
 *     _id, title, matchCategory, matchType, status,
 *     startTime, prizePool,
 *     myParticipant: { ign, uid, slotNumber },
 *     myResult: { rank, kills, prize } | null
 *   }]
 * }
 *
 * @returns {Promise<ProfileResponse>}
 */
export const getUserProfile = () =>
  apiClient.get("/users/profile").then((res) => res.data);