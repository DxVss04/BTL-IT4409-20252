"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchChats = void 0;
const Chat_1 = __importDefault(require("../models/Chat"));
const User_1 = __importDefault(require("../models/User"));
const fetchChats = async (req, res) => {
    try {
        const filters = { users: { $elemMatch: { $eq: req.user._id } } };
        let results = await Chat_1.default.find(filters)
            .populate('users', '-password')
            .populate('groupAdmin', '-password')
            .populate('latestMessage')
            .sort({ updatedAt: -1 });
        const populatedObj = await User_1.default.populate(results, {
            path: 'latestMessage.sender',
            select: 'name avatar email',
        });
        res.status(200).send(populatedObj);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
};
exports.fetchChats = fetchChats;
