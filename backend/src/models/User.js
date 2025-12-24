import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },

    // 🔥 Free Fire Profile
    ff_uid: {
      type: String,
      default: null,
    },

    ff_ign: {
      type: String,
      default: null,
    },

    matchesPlayed: {
      type: Number,
      default: 0,
    },

    kills: {
      type: Number,
      default: 0,
    },

    wins: {
      type: Number,
      default: 0,
    },

    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
