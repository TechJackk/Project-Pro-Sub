import express from "express";
import { createReport, getReports, getReportById, deleteReport } from "../controllers/report.controller.js";

const router = express.Router();

router.post("/", createReport);
router.get("/", getReports);
router.get("/:reportId", getReportById);
router.delete("/:reportId", deleteReport);

export default router;
