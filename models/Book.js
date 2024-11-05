// models/Book.js
const mongoose = require('uri');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  pages: { type: Number, required: true },
  published: { type: Date, default: Date.now },
});

module.exports = mongoose.models('Book', bookSchema);
