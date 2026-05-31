import { Request, Response } from 'express';
import Chat from '../models/Chat';
import User from '../models/User';

interface AuthRequest extends Request {
  user?: any;
}

export const fetchChats = async (req: AuthRequest, res: Response) => {
  try {
    const filters = { users: { $elemMatch: { $eq: req.user._id } } };
    let results = await Chat.find(filters)
      .populate('users', '-password')
      .populate('groupAdmin', '-password')
      .populate('latestMessage')
      .sort({ updatedAt: -1 });
      
    const populatedObj = await User.populate(results, {
      path: 'latestMessage.sender',
      select: 'name avatar email',
    });

    res.status(200).send(populatedObj);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
