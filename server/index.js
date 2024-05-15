const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todo.routes.js");
const dotenv = require("dotenv")
const cors = require("cors");



dotenv.config()
const app = express();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // If you're using cookies or sessions
})); // Set CORS headers for all routes

app.use(express.json());

// Routes setup
if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI environment variable is not defined');
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("server is running")
});

// Define your routes and start the server
app.use("/todos", todoRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
