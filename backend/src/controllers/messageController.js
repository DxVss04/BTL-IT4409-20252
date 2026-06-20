import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";
<<<<<<< HEAD
=======
import { uploadImageFromBuffer } from "../middlewares/uploadMiddleware.js";
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
import {
  emitNewMessage,
  updateConversationAfterCreateMessage,
} from "../utils/messageHelper.js";
import { io } from "../socket/index.js";

<<<<<<< HEAD
=======
const getMessageImageUrl = async (file) => {
  if (!file) {
    return null;
  }
uploadImageFromBuffer
  const uploaded = await (file.buffer, {
    folder: "Ugmail_chat/messages",
    transformation: [{ width: 1200, height: 1200, crop: "limit" }],
  });

  return uploaded.secure_url;
};

>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
export const sendDirectMessage = async (req, res) => {
  try {
    const { recipientId, content, conversationId } = req.body;
    const senderId = req.user._id;
<<<<<<< HEAD

    let conversation;

    if (!content) {
      return res.status(400).json({ message: "Thiếu nội dung" });
=======
    const normalizedContent = content?.trim() ?? "";
    const imgUrl = req.body.imgUrl || (await getMessageImageUrl(req.file));

    let conversation;

    if (!normalizedContent && !imgUrl) {
      return res.status(400).json({ message: "Thieu noi dung" });
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
    }

    if (conversationId) {
      conversation = await Conversation.findById(conversationId);
    }

    if (!conversation) {
      conversation = await Conversation.create({
        type: "direct",
        participants: [
          { userId: senderId, joinedAt: new Date() },
          { userId: recipientId, joinedAt: new Date() },
        ],
        lastMessageAt: new Date(),
        unreadCounts: new Map(),
      });
    }

    const message = await Message.create({
      conversationId: conversation._id,
      senderId,
<<<<<<< HEAD
      content,
=======
      content: normalizedContent,
      imgUrl,
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
    });

    updateConversationAfterCreateMessage(conversation, message, senderId);

    await conversation.save();

    emitNewMessage(io, conversation, message);

    return res.status(201).json({ message });
  } catch (error) {
<<<<<<< HEAD
    console.error("Lỗi xảy ra khi gửi tin nhắn trực tiếp", error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
=======
    console.error("Loi xay ra khi gui tin nhan truc tiep", error);
    return res.status(500).json({ message: "Loi he thong" });
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  }
};

export const sendGroupMessage = async (req, res) => {
  try {
    const { conversationId, content } = req.body;
    const senderId = req.user._id;
    const conversation = req.conversation;
<<<<<<< HEAD

    if (!content) {
      return res.status(400).json("Thiếu nội dung");
=======
    const normalizedContent = content?.trim() ?? "";
    const imgUrl = req.body.imgUrl || (await getMessageImageUrl(req.file));

    if (!normalizedContent && !imgUrl) {
      return res.status(400).json("Thieu noi dung");
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
    }

    const message = await Message.create({
      conversationId,
      senderId,
<<<<<<< HEAD
      content,
=======
      content: normalizedContent,
      imgUrl,
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
    });

    updateConversationAfterCreateMessage(conversation, message, senderId);

    await conversation.save();
    emitNewMessage(io, conversation, message);

    return res.status(201).json({ message });
  } catch (error) {
<<<<<<< HEAD
    console.error("Lỗi xảy ra khi gửi tin nhắn nhóm", error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
=======
    console.error("Loi xay ra khi gui tin nhan nhom", error);
    return res.status(500).json({ message: "Loi he thong" });
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  }
};
