// frontend/src/api/tournaments.api.js

import apiClient from "./axios";

/**
 * getAllTournaments — public lobby list, sorted by start time.
 * @returns {Promise<Tournament[]>}
 */
export const getAllTournaments = () =>
  apiClient.get("/tournaments").then((res) => res.data);

/**
 * getTournamentById — full detail with conditional room credential reveal.
 * Credentials are only included by the backend if the user is registered
 * and within 15 minutes of the start time.
 * @param {string} id
 * @returns {Promise<Tournament>}
 */
export const getTournamentById = (id) =>
  apiClient.get(`/tournaments/${id}`).then((res) => res.data);

/**
 * getRegisteredTournaments — tournaments the logged-in user has joined.
 * @returns {Promise<Tournament[]>}
 */
export const getRegisteredTournaments = () =>
  apiClient.get("/tournaments/registered").then((res) => res.data);

/**
 * joinTournament — registers the logged-in user for a tournament.
 * @param {string} id
 * @param {{ ign: string, uid: string }} data
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export const joinTournament = (id, data) =>
  apiClient.post(`/tournaments/${id}/join`, data).then((res) => res.data);

/**
 * createTournament — admin: creates a new tournament.
 * @param {object} data
 * @returns {Promise<Tournament>}
 */
export const createTournament = (data) =>
  apiClient.post("/tournaments", data).then((res) => res.data);

/**
 * setRoomCredentials — admin: injects room ID and password.
 * @param {string} id
 * @param {{ roomId: string, roomPassword: string }} data
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export const setRoomCredentials = (id, data) =>
  apiClient.put(`/tournaments/${id}/credentials`, data).then((res) => res.data);

/**
 * publishResults — admin: publishes final results and marks tournament COMPLETED.
 * @param {string} id
 * @param {{ results: ResultRow[] }} data
 * @returns {Promise<Tournament>}
 */
export const publishResults = (id, data) =>
  apiClient.put(`/tournaments/${id}/results`, data).then((res) => res.data);