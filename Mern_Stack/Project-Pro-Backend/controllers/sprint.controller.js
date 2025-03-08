import Sprint from "../models/sprint.model.js";

export const createSprint = async (req, res) => {
  try {
    const sprint = await Sprint.create(req.body);
    res.status(201).json(sprint);
  } catch (error) {
    res.status(500).json({ message: "Error creating sprint", error });
  }
};

export const getSprints = async (req, res) => {
  try {
    const sprints = await Sprint.find().populate("tasks");
    res.status(200).json(sprints);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sprints", error });
  }
};

export const getSprintById = async (req, res) => {
  try {
    const sprint = await Sprint.findById(req.params.sprintId).populate("tasks");
    if (!sprint) return res.status(404).json({ message: "Sprint not found" });
    res.status(200).json(sprint);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sprint", error });
  }
};

export const updateSprint = async (req, res) => {
  try {
    const sprint = await Sprint.findByIdAndUpdate(req.params.sprintId, req.body, { new: true });
    if (!sprint) return res.status(404).json({ message: "Sprint not found" });
    res.status(200).json(sprint);
  } catch (error) {
    res.status(500).json({ message: "Error updating sprint", error });
  }
};

export const deleteSprint = async (req, res) => {
  try {
    const sprint = await Sprint.findByIdAndDelete(req.params.sprintId);
    if (!sprint) return res.status(404).json({ message: "Sprint not found" });
    res.status(200).json({ message: "Sprint deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting sprint", error });
  }
};
