import express from 'express';
import { protect } from '../middlewares/authMiddleware';
import { fetchChats } from '../controllers/chatController';

const router = express.Router();

router.route('/').get(protect, fetchChats);

export default router;
