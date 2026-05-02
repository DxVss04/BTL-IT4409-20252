import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, // loại bỏ khoảng trắng đầu/cuối
      lowercase: true,
    },
    hashedPassword: {
      // mật khẩu đã được hash, không lưu trực tiếp mk vào database
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    displayName: {
      type: String,
      required: true,
      trim: true,
    },
    avatarUrl: {
      type: String, // link CDN để hiển thị hình
    },
    avatarId: {
      type: String, // Cloudinary public_id để xoá hình
    },
    bio: {
      type: String,
      maxlength: 500, // độ dài bio (tùy)
    },
    phone: {
      type: String,
      sparse: true, // cho phép null, nhưng không được trùng
    },
  },
  {
    timestamps: true, // tự động thêm createdAt và updatedAt
  },
);

const User = mongoose.model("User", userSchema);
export default User;
