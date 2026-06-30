// backend/src/controllers/auth.controller.js

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ── Helpers ────────────────────────────────────────────────────────────────

/**
 * signToken — creates a signed JWT for the given user.
 *
 * Expiry is read from JWT_EXPIRES_IN environment variable.
 * Default: "7d" (7 days).
 *
 * Supported formats: "7d", "24h", "60m", "3600" (seconds as number string).
 * See: https://github.com/vercel/ms for full format reference.
 *
 * Phase F: Replace with short-lived access token (15m) +
 * long-lived refresh token (30d) stored in httpOnly cookie.
 */
const signToken = (user) =>
  jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN ?? "7d" }
  );

/**
 * sanitizeUser — returns only the fields safe to send to the client.
 * Never returns the password hash.
 */
const sanitizeUser = (user) => ({
  _id: user._id,
  username: user.username,
  email: user.email,
  role: user.role,
});

// ── Controllers ────────────────────────────────────────────────────────────

/**
 * register — creates a new user account and returns a JWT.
 *
 * POST /api/auth/register
 * Body: { username, email, password }
 */
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Basic presence validation — detailed validation is in Phase E
    // route-level validators. Controller trusts that middleware has
    // already validated input shape.
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "username, email, and password are required.",
      });
    }

    // Check for existing user before hashing — avoids unnecessary bcrypt work.
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      const field = existingUser.email === email ? "email" : "username";
      return res.status(400).json({
        message: `An account with that ${field} already exists.`,
      });
    }

    // Hash password — saltRounds=12 balances security and performance.
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = signToken(user);

    res.status(201).json({
      token,
      user: sanitizeUser(user),
    });
  } catch (err) {
    console.error("[AUTH] Register error:", err);
    res.status(500).json({ message: "Registration failed. Please try again." });
  }
};

/**
 * login — authenticates a user and returns a JWT.
 *
 * POST /api/auth/login
 * Body: { email, password }
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "email and password are required.",
      });
    }

    // Find user — include password field which is excluded by default.
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      // Return the same message for wrong email and wrong password.
      // Different messages allow email enumeration attacks.
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const token = signToken(user);

    res.status(200).json({
      token,
      user: sanitizeUser(user),
    });
  } catch (err) {
    console.error("[AUTH] Login error:", err);
    res.status(500).json({ message: "Login failed. Please try again." });
  }
};