import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("Kết nối thành công");
  } catch (error) {
    console.error("Lỗi kết nối:", error);
    process.exit(1);
  }
};
