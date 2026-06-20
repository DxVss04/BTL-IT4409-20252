import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
<<<<<<< HEAD
    fileSize: 1024 * 1024 * 1, // 1MB
=======
    fileSize: 1024 * 1024 * 5, // 5MB
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  },
});

export const uploadImageFromBuffer = (buffer, options) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
<<<<<<< HEAD
        folder: "moji_chat/avatars",
=======
        folder: "Ugmail_chat/avatars",
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        resource_type: "image",
        transformation: [{ width: 200, height: 200, crop: "fill" }],
        ...options,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    uploadStream.end(buffer);
  });
};
