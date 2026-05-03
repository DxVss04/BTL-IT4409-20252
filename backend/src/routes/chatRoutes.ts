import express from 'express';
import { protect } from '../middlewares/authMiddleware';
import { fetchChats } from '../controllers/chatController';

const router = express.Router();

/**
 * @swagger
 * /api/chats:
 *   get:
 *     summary: Fetch all chats for the logged in user
 *     tags: [Chats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of chats
 *       401:
 *         description: Not authorized
 */
router.route('/').get(protect, fetchChats);

export default router;
