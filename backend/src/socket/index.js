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

// Cấu hình middleware xác thực
io.use(socketAuthMiddleware);

// Bộ nhớ lưu trữ danh sách user đang hoạt động: { userId => socket }
const onlineUsers = new Map();

/**
 * Phát tín hiệu danh sách các user đang online (loại trừ những người ẩn trạng thái)
 */
function broadcastOnlineUsers() {
  const activeUserIds = Array.from(onlineUsers.entries())
    .filter(([, clientSocket]) => clientSocket.user?.showOnlineStatus !== false)
    .map(([userId]) => userId);

  io.emit("online-users", activeUserIds);
}

// Xử lý khi có kết nối mới
io.on("connection", async (socket) => {
  const { user } = socket;
  const currentUserId = user._id.toString();

  // Đăng ký user vào danh sách hệ thống
  onlineUsers.set(currentUserId, socket);
  broadcastOnlineUsers();

  // Tham gia vào các phòng chat hiện có của user
  const userRooms = await getUserConversationsForSocketIO(user._id);
  for (const roomId of userRooms) {
    socket.join(roomId);
  }

  // Tham gia phòng cá nhân dựa trên ID
  socket.join(currentUserId);

  // Lắng nghe các sự kiện từ client
  socket.on("join-conversation", (conversationId) => {
    socket.join(conversationId);
  });

  socket.on("online-visibility", (isProfileVisible) => {
    socket.user.showOnlineStatus = isProfileVisible;
    broadcastOnlineUsers();
  });

  socket.on("disconnect", () => {
    onlineUsers.delete(currentUserId);
    broadcastOnlineUsers();
  });
});

export { app, server, io };

export { io, app, server }; 
// Export io để có thể sử dụng trong các controller khác khi cần thiết
