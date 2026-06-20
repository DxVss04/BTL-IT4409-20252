import express from "express";
import {
  createConversation,
<<<<<<< HEAD
=======
  deleteConversationForMe,
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  getConversations,
  getMessages,
  markAsSeen,
} from "../controllers/conversationController.js";
import { checkFriendship } from "../middlewares/friendMiddleware.js";

const router = express.Router();

router.post("/", checkFriendship, createConversation);
router.get("/", getConversations);
router.get("/:conversationId/messages", getMessages);
router.patch("/:conversationId/seen", markAsSeen);
<<<<<<< HEAD
=======
router.delete("/:conversationId", deleteConversationForMe);
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8

export default router;
