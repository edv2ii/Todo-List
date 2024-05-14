const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todo.routes.js");
const dotenv = require("dotenv")
const cors = require("cors");

const corsConfing = {
  origin: "*",
  credential: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}

dotenv.config()
const app = express();
app.options("", cors(corsConfing))
app.use(cors(corsConfing));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes setup

// ใช้ CORS middleware

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
  res.send("server is running")
});
