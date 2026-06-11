// frontend/src/api/tournaments.api.js

import apiClient from "./axios";

/**
 * getAllTournaments — public lobby list, sorted by start time.
 * Excludes CANCELED tournaments (backend filters).
 * @returns {Promise<Tournament[]>}
 */
export const getAllTournaments = () =>
  apiClient.get("/tournaments").then((res) => res.data);

/**
 * getTournamentById — full detail with conditional room credential reveal.
 * Requires authentication.
 * @param {string} id
 * @returns {Promise<Tournament>}
 */
export const getTournamentById = (id) =>
  apiClient.get(`/tournaments/${id}`).then((res) => res.data);

/**
 * getTournamentResults — public results for a completed tournament.
 * No authentication required.
 * Returns only public-safe fields: title, matchCategory, status,
 * startTime, endTime, prizePool, and sanitized results array.
 * Result rows contain: rank, ign, kills, prize — no user ObjectIds.
 * @param {string} id
 * @returns {Promise<PublicTournamentResult>}
 */
export const getTournamentResults = (id) =>
  apiClient.get(`/tournaments/${id}/results`).then((res) => res.data);

/**
 * getTournamentSlots — returns slot occupancy map for a tournament.
 * Requires authentication.
 * @param {string} id
 * @returns {Promise<SlotMap>}
 */
export const getTournamentSlots = (id) =>
  apiClient.get(`/tournaments/${id}/slots`).then((res) => res.data);

/**
 * getRegisteredTournaments — tournaments the logged-in user has joined.
 * Requires authentication.
 * @returns {Promise<Tournament[]>}
 */
export const getRegisteredTournaments = () =>
  apiClient.get("/tournaments/registered").then((res) => res.data);

/**
 * joinTournament — registers the logged-in user for a tournament.
 * Requires authentication.
 * @param {string} id
 * @param {{ ign: string, uid: string, slotNumber: number }} data
 * @returns {Promise<{ success: boolean, message: string, slotNumber: number, teamNumber: number | null }>}
 */
export const joinTournament = (id, data) =>
  apiClient.post(`/tournaments/${id}/join`, data).then((res) => res.data);

/**
 * createTournament — admin: creates a new tournament.
 * Requires admin authentication.
 * @param {object} data
 * @returns {Promise<Tournament>}
 */
export const createTournament = (data) =>
  apiClient.post("/tournaments", data).then((res) => res.data);

/**
 * setRoomCredentials — admin: injects room ID and password.
 * Requires admin authentication.
 * @param {string} id
 * @param {{ roomId: string, roomPassword: string }} data
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export const setRoomCredentials = (id, data) =>
  apiClient
    .put(`/tournaments/${id}/credentials`, data)
    .then((res) => res.data);

/**
 * publishResults — admin: publishes final results.
 * Requires admin authentication.
 * Payload is mode-specific — prizes calculated by backend.
 * @param {string} id
 * @param {object} data — mode-specific payload
 * @returns {Promise<{ success: boolean, results: object[], tournament: object }>}
 */
export const publishResults = (id, data) =>
  apiClient
    .put(`/tournaments/${id}/results`, data)
    .then((res) => res.data);