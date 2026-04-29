import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    isGroup: { type: Boolean, default: false }, // Xác định đây là chat 1-1 hay chat nhóm
    groupName: { type: String, default: "" }, // Tên nhóm (nếu isGroup là true)
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Conversation", conversationSchema);
