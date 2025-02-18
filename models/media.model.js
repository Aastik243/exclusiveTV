import mongoose from 'mongoose';
const mediaSchema = new mongoose.Schema({
  title: String,
  description: String,
  s3Url: String,
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model('Media', mediaSchema);