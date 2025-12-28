import mongoose from "mongoose";
import dotenv from "dotenv";
import Tournament from "../models/Tournament.js"; // 👈 This was missing or misplaced

dotenv.config();

// 1. Connect to Database
await mongoose.connect(process.env.MONGO_URI);
console.log("📡 Connected to MongoDB for seeding...");

async function seed() {
  try {
    // 2. Clear existing tournaments to avoid duplicates
    await Tournament.deleteMany();
    console.log("🗑️ Old tournaments cleared.");

    // 3. Insert fresh data with the new professional fields
    await Tournament.insertMany([
      {
        title: "CS 4v4 Sunday Cup",
        game: "Free Fire",
        matchType: "4v4",
        map: "Bermuda (Remastered)",
        description: "Weekly Clash Squad tournament for high-tier players. No double vector allowed.",
        rules: ["No Double Vector", "No Grenades", "PC Players Allowed: No", "Fair Play Only"],
        startTime: new Date(Date.now() + 120 * 60 * 1000), // 2 hours from now
        endTime: new Date(Date.now() + 180 * 60 * 1000),
        prizePool: 1000,
        maxPlayers: 8,
        status: "UPCOMING",
      },
      {
        title: "1v1 King of Hill",
        game: "Free Fire",
        matchType: "1v1",
        map: "Factory",
        description: "Classic Factory roof challenge. 1v1 limited ammo.",
        rules: ["M1887 Only", "No Glitch", "First to 7 Rounds", "Limited Ammo: Yes"],
        startTime: new Date(Date.now() - 30 * 60 * 1000), // Started 30 mins ago
        endTime: new Date(Date.now() + 30 * 60 * 1000),
        prizePool: 200,
        maxPlayers: 2,
        status: "LIVE",
      },
      {
        title: "BR Solo Warmup",
        game: "Free Fire",
        matchType: "1v1",
        map: "Purgatory",
        description: "Casual warmup match before the main league starts.",
        rules: ["Classic Rules", "All Weapons Allowed"],
        startTime: new Date(Date.now() - 300 * 60 * 1000), // Finished 5 hours ago
        endTime: new Date(Date.now() - 240 * 60 * 1000),
        prizePool: 0,
        maxPlayers: 48,
        status: "COMPLETED",
      }
    ]);

    console.log("✅ Database successfully seeded with professional matches!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    // 4. Always close the connection when done
    mongoose.connection.close();
    process.exit();
  }
}

seed();