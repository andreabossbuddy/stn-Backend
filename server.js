import express from "express"; // or const express = require("express");
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Add a test route
app.get("/", (req, res) => {
  res.send("Backend is running on Render 🚀");
});

// Use Render's PORT
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
