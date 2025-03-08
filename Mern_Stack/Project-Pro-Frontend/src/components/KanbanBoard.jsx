import React, { useState } from "react";
import { PlusCircle, User, CalendarDays, Flag, CheckCircle, AlertTriangle, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Link } from "react-router-dom";

const initialTasks = {
  todo: [
    { id: 1, title: "Design Homepage", priority: "High", dueDate: "2025-02-28", assignedTo: "Alice", comments: [] },
    { id: 2, title: "Write Documentation", priority: "Medium", dueDate: "2025-03-02", assignedTo: "Bob", comments: [] }
  ],
  inProgress: [
    { id: 3, title: "Develop Login Flow", priority: "High", dueDate: "2025-03-05", assignedTo: "Charlie", comments: [] }
  ],
  done: [
    { id: 4, title: "Create Wireframes", priority: "Low", dueDate: "2025-02-20", assignedTo: "Diana", comments: [] }
  ]
};

export default function KanbanBoard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTask, setActiveTask] = useState(null);
  const [newComment, setNewComment] = useState("");

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceTasks = Array.from(tasks[source.droppableId]);
    const [movedTask] = sourceTasks.splice(source.index, 1);
    const destinationTasks = Array.from(tasks[destination.droppableId]);
    destinationTasks.splice(destination.index, 0, movedTask);

    setTasks((prev) => ({
      ...prev,
      [source.droppableId]: sourceTasks,
      [destination.droppableId]: destinationTasks
    }));
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const updatedTasks = { ...tasks };
    const statusTasks = updatedTasks[activeTask.status];
    const taskIndex = statusTasks.findIndex((t) => t.id === activeTask.id);
    statusTasks[taskIndex].comments.push(newComment);
    setTasks(updatedTasks);
    setNewComment("");
  };

  const renderPriority = (priority) => {
    switch (priority) {
      case "High":
        return <AlertTriangle className="text-red-600 w-5 h-5" />;
      case "Medium":
        return <Flag className="text-yellow-500 w-5 h-5" />;
      case "Low":
        return <CheckCircle className="text-green-500 w-5 h-5" />;
      default:
        return null;
    }
  };

  const renderTasks = (status) => (
    <Droppable droppableId={status}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-4 min-h-[200px]">
          {tasks[status].map((task, index) => (
            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
              {(provided, snapshot) => (
                <motion.div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition ${snapshot.isDragging ? 'ring-2 ring-blue-500 z-50' : ''}`}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setActiveTask({ ...task, status })}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg">{task.title}</h3>
                    {renderPriority(task.priority)}
                  </div>
                  <div className="flex justify-between text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" /> {task.assignedTo}
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" /> {task.dueDate}
                    </div>
                  </div>
                </motion.div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 p-8 text-gray-900">
      <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-2xl mb-8">
        <Link to="/">
          <h1 className="text-xl font-bold">Project ZenFlow</h1>
        </Link>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <Link to="/dashboard">
            <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
          </Link>
          <Link to="/KanbanBoard">
            <li className="hover:text-blue-600 cursor-pointer">Kanban Board</li>
          </Link>
          <Link to="/sprintplanning">
            <li className="hover:text-blue-600 cursor-pointer">Sprint Planning</li>
          </Link>
          <Link to="/reports">
            <li className="hover:text-blue-600 cursor-pointer">Reports</li>
          </Link>
        </ul>
      </nav>
      <h1 className="text-4xl font-extrabold mb-8">Task Board</h1>
      {/* Reminder Notification */}
      <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mb-6 flex items-center gap-2">
        <MessageSquare className="w-5 h-5" />
        <span>Click on a task to add comments!</span>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">To Do</h2>
            {renderTasks("todo")}
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">In Progress</h2>
            {renderTasks("inProgress")}
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Done</h2>
            {renderTasks("done")}
          </div>
        </div>
      </DragDropContext>
      {activeTask && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-2xl border-t rounded-t-2xl">
          <h3 className="text-xl font-bold mb-2">Comments for: {activeTask.title}</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {activeTask.comments.map((comment, index) => (
              <div key={index} className="p-2 bg-gray-100 rounded-lg">
                {comment}
              </div>
            ))}
          </div>
          <div className="flex mt-2 gap-2">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 p-2 border rounded-lg"
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}