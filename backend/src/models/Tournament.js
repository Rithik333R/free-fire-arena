import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  game: { type: String, default: "Free Fire" },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  entryFee: { type: Number, default: 0 },
  prizePool: { type: Number, required: true },
  maxPlayers: { type: Number, required: true },
  status: {
    type: String,
    enum: ["UPCOMING", "LIVE", "COMPLETED"],
    default: "UPCOMING",
  },
}, { timestamps: true });

// ✅ FIX: Use export default for ES Modules
const Tournament = mongoose.model("Tournament", tournamentSchema);
export default Tournament;