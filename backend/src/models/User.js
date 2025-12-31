import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ["USER", "ADMIN"], 
    default: "USER" 
  },
}, { timestamps: true });

// Check if the model exists before creating it (prevents errors in some environments)
const User = mongoose.models.User || mongoose.model("User", userSchema);

// THIS IS THE LINE YOU ARE LIKELY MISSING:
export default User;