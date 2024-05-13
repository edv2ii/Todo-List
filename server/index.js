const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todo.routes.js");
const dotenv = require("dotenv")
const cors = require("cors");

dotenv.config()

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes setup

// ใช้ CORS middleware
app.use(cors());

// หรือกำหนดส่วนหัว CORS เอง
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// สร้างเส้นทางของคุณและเริ่มต้นเซิร์ฟเวอร์
app.use("/todos", todoRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
