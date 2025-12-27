import mongoose from "mongoose";
import dotenv from "dotenv";
import Tournament from "../models/Tournament.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

console.log("MongoDB connected");

await Tournament.deleteMany();

await Tournament.insertMany([
  {
    title: "FF Solo Clash",
    startTime: new Date(Date.now() + 60 * 60 * 1000),
    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
    prizePool: 500,
    maxPlayers: 48,
    status: "UPCOMING",
  },
  {
    title: "Squad War",
    startTime: new Date(Date.now() - 30 * 60 * 1000),
    endTime: new Date(Date.now() + 30 * 60 * 1000),
    prizePool: 1000,
    maxPlayers: 48,
    status: "LIVE",
  },
  {
    title: "Weekend Championship",
    startTime: new Date(Date.now() - 5 * 60 * 60 * 1000),
    endTime: new Date(Date.now() - 3 * 60 * 60 * 1000),
    prizePool: 2000,
    maxPlayers: 48,
    status: "COMPLETED",
  },
]);

console.log("✅ Tournaments seeded successfully");

process.exit();
