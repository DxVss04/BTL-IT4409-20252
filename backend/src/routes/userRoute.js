import express from "express";
import {
  authMe,
<<<<<<< HEAD
  searchUserByUsername,
=======
  blockAndReportUser,
  changePassword,
  deleteAccount,
  searchUserByUsername,
  updateProfile,
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  uploadAvatar,
} from "../controllers/userController.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.get("/me", authMe);
router.get("/search", searchUserByUsername);
<<<<<<< HEAD
=======
router.patch("/me", updateProfile);
router.patch("/password", changePassword);
router.post("/block-report", blockAndReportUser);
router.delete("/me", deleteAccount);
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
router.post("/uploadAvatar", upload.single("file"), uploadAvatar);

export default router;
