import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    trim: true,
  },
  shortId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  lastAccessed: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

urlSchema.index({ shortId: 1 });

const Url = mongoose.model('Url', urlSchema);
export default Url;
