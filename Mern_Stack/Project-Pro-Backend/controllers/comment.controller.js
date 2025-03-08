import Comment from "../models/comment.model.js";

// Add a comment to a task
export const addComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error });
  }
};

// Get all comments for a specific task
export const getCommentsByTask = async (req, res) => {
  try {
    const comments = await Comment.find({ taskId: req.params.taskId }).populate("userId", "name");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
};

// Delete a comment
export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error });
  }
};
