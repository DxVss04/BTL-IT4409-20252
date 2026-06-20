import { Server } from "socket.io";
import http from "http";
import express from "express";
import { socketAuthMiddleware } from "../middlewares/socketMiddleware.js";
import { getUserConversationsForSocketIO } from "../controllers/conversationController.js";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true,
  },
});

io.use(socketAuthMiddleware);

const onlineUsers = new Map(); // {userId: socketId}

<<<<<<< HEAD
=======
const emitOnlineUsers = () => {
  const visibleUserIds = Array.from(onlineUsers.entries())
    .filter(([, socket]) => socket.user?.showOnlineStatus !== false)
    .map(([userId]) => userId);

  io.emit("online-users", visibleUserIds);
};

>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
io.on("connection", async (socket) => {
  const user = socket.user;

  // console.log(`${user.displayName} online với socket ${socket.id}`);

<<<<<<< HEAD
  onlineUsers.set(user._id, socket.id);

  io.emit("online-users", Array.from(onlineUsers.keys()));
=======
  onlineUsers.set(user._id.toString(), socket);

  emitOnlineUsers();
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8

  const conversationIds = await getUserConversationsForSocketIO(user._id);
  conversationIds.forEach((id) => {
    socket.join(id);
  });

  socket.on("join-conversation", (conversationId) => {
    socket.join(conversationId);
  });

  socket.join(user._id.toString());

<<<<<<< HEAD
  socket.on("disconnect", () => {
    onlineUsers.delete(user._id);
    io.emit("online-users", Array.from(onlineUsers.keys()));
=======
  socket.on("online-visibility", (showOnlineStatus) => {
    socket.user.showOnlineStatus = showOnlineStatus;
    emitOnlineUsers();
  });

  socket.on("disconnect", () => {
    onlineUsers.delete(user._id.toString());
    emitOnlineUsers();
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
    /* console.log(`socket disconnected: ${socket.id}`); */
  });
});

export { io, app, server };
