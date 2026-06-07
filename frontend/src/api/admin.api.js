// frontend/src/api/admin.api.js

import apiClient from "./axios";

/**
 * getAdminTournaments — full tournament list for admin management view.
 * Uses the protected /api/admin namespace.
 * @returns {Promise<Tournament[]>}
 */
export const getAdminTournaments = () =>
  apiClient.get("/admin/tournaments").then((res) => res.data);

/**
 * updateTournamentRoom — updates room credentials, status, and/or
 * participant stats in a single operation.
 * Uses the protected /api/admin namespace.
 * @param {string} id
 * @param {{ roomId?: string, roomPassword?: string, status?: string, participants?: object[] }} data
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export const updateTournamentRoom = (id, data) =>
  apiClient
    .patch(`/admin/tournaments/${id}/room`, data)
    .then((res) => res.data);

/**
 * editTournament — updates tournament metadata.
 *
 * Always editable:
 *   title, description, banner, rules, prizePool, winnerPrize, perKillReward
 *
 * Editable only while UPCOMING:
 *   startTime, endTime
 *
 * Locked once any participant has registered:
 *   matchCategory, matchType, maxPlayers
 *
 * Cannot edit CANCELED or COMPLETED tournaments.
 *
 * @param {string} id
 * @param {object} data — partial tournament fields to update
 * @returns {Promise<{ success: boolean, message: string, tournament: object }>}
 */
export const editTournament = (id, data) =>
  apiClient
    .patch(`/admin/tournaments/${id}`, data)
    .then((res) => res.data);

/**
 * cancelTournament — cancels an UPCOMING tournament.
 * Sets status to CANCELED. Only UPCOMING tournaments can be canceled.
 * @param {string} id
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export const cancelTournament = (id) =>
  apiClient
    .patch(`/admin/tournaments/${id}/cancel`)
    .then((res) => res.data);