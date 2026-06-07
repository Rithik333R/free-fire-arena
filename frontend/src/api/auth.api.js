// frontend/src/api/auth.api.js

import apiClient from "./axios";

/**
 * register — creates a new user account.
 * @param {{ username: string, email: string, password: string }} data
 * @returns {Promise<{ token: string, user: object }>}
 */
export const register = (data) =>
  apiClient.post("/auth/register", data).then((res) => res.data);

/**
 * login — authenticates a user and returns a JWT.
 * @param {{ email: string, password: string }} data
 * @returns {Promise<{ token: string, user: object }>}
 */
export const login = (data) =>
  apiClient.post("/auth/login", data).then((res) => res.data);