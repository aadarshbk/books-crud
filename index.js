// index.js
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/routes/bookRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const bookRoutes = require('./models/routes/bookRoutes');
app.use('/api/books', bookRoutes);


// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => console.error("MongoDB connection error:", err));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the basic CRUD API');
  
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
