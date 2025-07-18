import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  role: { type: String, enum: ["admin", "user"], default: "user" }
});

export default mongoose.models.User || mongoose.model("User", userSchema);
