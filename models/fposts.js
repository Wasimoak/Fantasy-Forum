const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: {type: String},
  // user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: true
});

const fPostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  comments: [commentSchema]
}, {
  timestamps: true
});


module.exports = mongoose.model('Fpost', fPostSchema);