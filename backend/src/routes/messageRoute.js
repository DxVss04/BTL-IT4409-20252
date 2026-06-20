import express from "express";

import {
  sendDirectMessage,
  sendGroupMessage,
} from "../controllers/messageController.js";
import {
  checkFriendship,
  checkGroupMembership,
} from "../middlewares/friendMiddleware.js";
<<<<<<< HEAD

const router = express.Router();

router.post("/direct", checkFriendship, sendDirectMessage);
router.post("/group", checkGroupMembership, sendGroupMessage);
=======
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/direct", upload.single("image"), checkFriendship, sendDirectMessage);
router.post("/group", upload.single("image"), checkGroupMembership, sendGroupMessage);
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8

export default router;
