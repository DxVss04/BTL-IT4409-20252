import express from "express";
import dotevn from "dotenv";
import { connectDB } from "./libs/db.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import friendRoute from "./routes/friendRoute.js";
import conversationRoute from "./routes/conversationRoute.js";
import messageRoute from "./routes/messageRoute.js";
import { protectedRoute } from "./middlewares/authMiddlewares.js";
import cookieParser from "cookie-parser";

dotevn.config();  

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cookieParser());

//routes để test sever trước khi test các api khác (test "/")
app.get("/", (req, res) => {
  res.send("Server is running");
});

// public routes
app.use("/api/auth", authRoute);

// private routes

app.use(protectedRoute);
app.use("/api/users", userRoute);
app.use("/api/friends", friendRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
