import express from "express";
import dotenv from "dotenv";
import connectDB from "../week-6/db.js";
import userRoutes from "./routes/user.routes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Route not found" });
});

// Error handler — must be LAST
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
