import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
  online: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
