import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Tournament from "../models/Tournament.js"; 
import User from "../models/User.js"; 

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);
console.log("📡 Connected to MongoDB for seeding...");

async function seed() {
  try {
    // 1. Clear existing data
    await Tournament.deleteMany();
    await User.deleteMany();
    console.log("🗑️ Old tournaments and users cleared.");

    // 2. Create Hashed Passwords
    const adminPassword = await bcrypt.hash("admin123", 10);
    const playerPassword = await bcrypt.hash("player123", 10);

    // 3. Create Admin User
    const adminUser = new User({
      username: "Rithik_Admin",
      email: "admin@test.com",
      password: adminPassword,
      role: "ADMIN"
    });
    await adminUser.save();
    console.log("👑 Admin account created: admin@test.com / admin123");

    // 4. Create Regular Player
    const regularUser = new User({
      username: "testplayer",
      email: "test@gmail.com",
      password: playerPassword,
      role: "USER",
      fairPlayScore: 100
    });
    await regularUser.save();

    // 5. Insert Tournaments
    await Tournament.insertMany([
      {
        title: "Reveal Test Match",
        game: "Free Fire",
        matchType: "4v4",
        map: "Kalahari",
        description: "TEST MATCH: Starts in 10 minutes. ID should appear for participants!",
        rules: ["Logic Test", "Verify Room ID appearance"],
        startTime: new Date(Date.now() + 10 * 60 * 1000), 
        endTime: new Date(Date.now() + 60 * 60 * 1000),
        prizePool: 500,
        maxPlayers: 8,
        status: "UPCOMING",
        roomId: "AX-7788990", 
        roomPassword: "JOIN_QUICK_123",
        participants: [{ user: adminUser._id, ign: "ADMIN_PRO", uid: "123456789" }]
      },
      {
        title: "CS 4v4 Sunday Cup",
        game: "Free Fire",
        matchType: "4v4",
        map: "Bermuda (Remastered)",
        description: "Weekly Clash Squad tournament.",
        startTime: new Date(Date.now() + 1440 * 60 * 1000), 
        endTime: new Date(Date.now() + 1500 * 60 * 1000),
        prizePool: 1000,
        maxPlayers: 8,
        status: "UPCOMING",
      },
      {
        title: "1v1 King of Hill",
        game: "Free Fire",
        matchType: "1v1",
        map: "Factory",
        description: "Classic Factory roof challenge.",
        startTime: new Date(Date.now() - 30 * 60 * 1000), 
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
        description: "Casual warmup match.",
        startTime: new Date(Date.now() - 300 * 60 * 1000), 
        endTime: new Date(Date.now() - 240 * 60 * 1000),
        prizePool: 0,
        maxPlayers: 48,
        status: "COMPLETED",
      }
    ]);

    console.log("✅ Database successfully seeded with Admin and Test Cases!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    mongoose.connection.close();
    process.exit();
  }
}

seed();