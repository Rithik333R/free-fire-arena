import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  game: { type: String, default: "Free Fire" },
  // ✅ Added to drive conditional scoring logic
  matchCategory: { 
    type: String, 
    enum: ["BATTLE_ROYALE", "CLASH_SQUAD", "LONE_WOLF"], 
    required: true,
    default: "CLASH_SQUAD" 
  },
  matchType: { type: String, enum: ["1v1", "2v2", "3v3", "4v4"], default: "4v4" },
  map: { type: String, default: "Bermuda" },
  description: { type: String, default: "Standard Clash Squad Tournament" },
  rules: { 
    type: [String], 
    default: ["No Hacks", "No Grenades", "Join 15 mins before"] 
  },
  banner: { type: String, default: "https://wallpaperaccess.com/full/2155823.jpg" },

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

  participants: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      ign: { type: String, required: true },
      uid: { type: String, required: true },
      kills: { type: Number, default: 0 },
      rank: { type: Number, default: 0 },
      joinedAt: { type: Date, default: Date.now }
    }
  ],
  
  roomId: { type: String, select: false }, 
  roomPassword: { type: String, select: false }

}, { timestamps: true });

export default mongoose.model("Tournament", tournamentSchema);