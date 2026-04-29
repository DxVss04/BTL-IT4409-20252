import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, default: "" },
    bio: { type: String, default: "Xin chào!" },
    isOnline: { type: Boolean, default: false }, // Phục vụ tính năng hiển thị chấm xanh
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
