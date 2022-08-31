const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: String,
}, {
  timestamps: true
});

const fpostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Fpost', fpostSchema);