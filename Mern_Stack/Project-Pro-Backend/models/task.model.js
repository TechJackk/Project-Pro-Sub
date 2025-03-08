import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ["to-do", "in-progress", "done"], default: "to-do" },
    priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    dueDate: { type: Date },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
