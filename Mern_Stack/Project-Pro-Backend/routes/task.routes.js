import express from "express";
import {
  createTask,
  getTasksByProject,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", createTask);
router.get("/:projectId", getTasksByProject);
router.put("/:taskId", updateTask);
router.delete("/:taskId", deleteTask);

export default router;
