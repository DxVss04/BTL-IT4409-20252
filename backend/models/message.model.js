import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, required: true }, // Có thể lưu text hoặc 'Đã gửi một ảnh'
    isRead: { type: Boolean, default: false }, // Trạng thái đã xem tin nhắn
    attachmentUrl: { type: String, default: "" }, // Link ảnh/file đính kèm nếu có
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Message", messageSchema);
