import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, enum: ["progress", "task_summary", "team_performance"], required: true },
    generatedAt: { type: Date, default: Date.now },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    summary: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Report", reportSchema);
