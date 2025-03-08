import Report from "../models/report.model.js";

export const createReport = async (req, res) => {
  try {
    const report = await Report.create(req.body);
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: "Error creating report", error });
  }
};

export const getReports = async (req, res) => {
  try {
    const reports = await Report.find().populate("project");
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reports", error });
  }
};

export const getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.reportId).populate("project");
    if (!report) return res.status(404).json({ message: "Report not found" });
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: "Error fetching report", error });
  }
};

export const deleteReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.reportId);
    if (!report) return res.status(404).json({ message: "Report not found" });
    res.status(200).json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting report", error });
  }
};
