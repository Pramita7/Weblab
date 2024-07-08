const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  dateCreated: { type: Date, required: true },
  creatorName: { type: String, required: true },
});

module.exports = mongoose.model('Article', articleSchema);