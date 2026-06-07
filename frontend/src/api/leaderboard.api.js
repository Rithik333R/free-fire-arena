// frontend/src/api/leaderboard.api.js

import apiClient from "./axios";

/**
 * getLeaderboard — top 50 players ranked by total points across
 * all completed tournaments.
 * @returns {Promise<LeaderboardEntry[]>}
 */
export const getLeaderboard = () =>
  apiClient.get("/leaderboard").then((res) => res.data);