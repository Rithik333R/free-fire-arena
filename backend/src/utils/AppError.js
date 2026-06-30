// backend/src/utils/AppError.js

/**
 * AppError — structured application error with HTTP status code.
 *
 * Usage in route handlers:
 *   throw new AppError("Tournament not found.", 404);
 *   throw new AppError("You are not authorized.", 403);
 *
 * The centralized error handler in server.js catches these and
 * returns a consistent { message, status } JSON response.
 *
 * isOperational: true marks errors that are expected (validation
 * failures, not found, unauthorized). These are safe to send to
 * the client. isOperational: false means unexpected crashes —
 * the client receives a generic message regardless of environment.
 */
export class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    // Capture stack trace — excludes AppError constructor from trace.
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * asyncHandler — wraps an async route handler and forwards any
 * thrown errors to Express's next() automatically.
 *
 * Without this wrapper, thrown errors in async handlers require
 * manual try/catch + next(err) in every route.
 *
 * Usage:
 *   router.get("/", asyncHandler(async (req, res) => {
 *     const data = await someAsyncOperation();
 *     res.json(data);
 *   }));
 *
 * NOTE: Existing routes use try/catch and will continue to work.
 * asyncHandler is available for new routes going forward.
 * Migrating existing routes to asyncHandler is Phase F cleanup.
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};