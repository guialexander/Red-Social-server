const mongoose = require('mongoose');

const FollowSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  }
}, {
  versionKey: false,
  timestamps: true,
});

module.exports = mongoose.model('Follow', FollowSchema);
