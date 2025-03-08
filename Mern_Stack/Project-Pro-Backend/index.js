import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.config.js";
import projectRoutes from "./routes/project.routes.js";
import taskRoutes from "./routes/task.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import sprintRoutes from "./routes/sprint.routes.js";
import reportRoutes from "./routes/report.routes.js";



dotenv.config();
const app = express();
connectDB()

app.use(express.json());
app.use(cors());

app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/comments", commentRoutes);
app.use("/sprints", sprintRoutes);
app.use("/reports", reportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));