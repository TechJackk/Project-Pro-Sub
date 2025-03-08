import express from "express";
import { addComment, getCommentsByTask, deleteComment } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/", addComment);
router.get("/:taskId", getCommentsByTask);
router.delete("/:commentId", deleteComment);

export default router;
