import express from "express";
import { createSprint, getSprints, getSprintById, updateSprint, deleteSprint } from "../controllers/sprint.controller.js";

const router = express.Router();

router.post("/", createSprint);
router.get("/", getSprints);
router.get("/:sprintId", getSprintById);
router.put("/:sprintId", updateSprint);
router.delete("/:sprintId", deleteSprint);

export default router;
