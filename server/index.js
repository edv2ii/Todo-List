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


if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI environment variable is not defined');
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes setup
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

app.get("/", (req, res) => {
  res.send("server is running")
})

// สร้างเส้นทางของคุณและเริ่มต้นเซิร์ฟเวอร์
app.use("/todos", todoRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}`);
});
