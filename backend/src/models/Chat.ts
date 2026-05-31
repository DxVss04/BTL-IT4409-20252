import mongoose from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     Chat:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         chatName:
 *           type: string
 *         isGroupChat:
 *           type: boolean
 *         users:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/User'
 *         latestMessage:
 *           type: string
 *         groupAdmin:
 *           $ref: '#/components/schemas/User'
 */

const chatSchema = new mongoose.Schema({
  chatName: { type: String, trim: true },
  isGroupChat: { type: Boolean, default: false },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  latestMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
  },
  groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model('Chat', chatSchema);
