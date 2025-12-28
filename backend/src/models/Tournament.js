import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  game: { type: String, default: "Free Fire" },
  matchType: { type: String, enum: ["1v1", "2v2", "3v3", "4v4"], default: "4v4" }, // Added for Clash Squad
  map: { type: String, default: "Bermuda" }, // Added
  description: { type: String, default: "Standard Clash Squad Tournament" }, // Added
  rules: { 
    type: [String], 
    default: ["No Hacks", "No Grenades", "Join 15 mins before"] 
  }, // Added as an array for easy listing
  banner: { type: String, default: "https://wallpaperaccess.com/full/2155823.jpg" }, // Added

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
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  
  // SECURE FIELDS (Hidden by default)
  roomId: { type: String, select: false }, 
  roomPassword: { type: String, select: false }

}, { timestamps: true });

export default mongoose.model("Tournament", tournamentSchema);