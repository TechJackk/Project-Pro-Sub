import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ["active", "completed", "archived"], default: "active" },
    teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    startDate: { type: Date },
    endDate: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
