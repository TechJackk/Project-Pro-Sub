import React, { useState } from "react";
import { CalendarDays, User, MessageSquare, AlertTriangle, Flag, CheckCircle, PlusCircle, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const initialTasks = [
  { id: 1, title: "Design Homepage", assignedTo: "Alice", estimatedTime: 5, priority: "High", comments: [] },
  { id: 2, title: "Develop API Endpoints", assignedTo: "Bob", estimatedTime: 8, priority: "Medium", comments: [] },
  { id: 3, title: "Write Test Cases", assignedTo: "Charlie", estimatedTime: 3, priority: "Low", comments: [] },
];

export default function SprintPlanning() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({ title: "", assignedTo: "", estimatedTime: "", priority: "Medium" });

  const addTask = () => {
    if (newTask.title && newTask.assignedTo && newTask.estimatedTime) {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1, comments: [] }]);
      setNewTask({ title: "", assignedTo: "", estimatedTime: "", priority: "Medium" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 p-8 text-gray-900 relative overflow-hidden">
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

      <h1 className="text-4xl font-extrabold mb-6">Sprint Planning</h1>

      <div className="mb-6 p-4 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold flex items-center gap-2"><Flag className="text-blue-600" /> Sprint Goal</h2>
        <textarea className="w-full p-2 mt-2 border rounded-md" placeholder="Define sprint goal here..."></textarea>
      </div>

      <div className="mb-6 p-4 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <div className="grid grid-cols-3 gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col gap-2">
              <h3 className="text-lg font-semibold flex items-center gap-2"><CheckCircle className="text-gray-500" /> {task.title}</h3>
              <div className="flex justify-between text-sm text-gray-700">
                <div className="flex items-center gap-2"><User className="text-blue-500" /> {task.assignedTo}</div>
                <div className="flex items-center gap-2"><Clock className="text-green-500" /> {task.estimatedTime} hrs</div>
                <div className="flex items-center gap-2"><AlertTriangle className="text-red-500" /> {task.priority}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 p-4 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold flex items-center gap-2"><PlusCircle className="text-blue-600" /> Add Task</h2>
        <input className="w-full p-2 mt-2 border rounded-md" placeholder="Task Title" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
        <input className="w-full p-2 mt-2 border rounded-md" placeholder="Assigned To" value={newTask.assignedTo} onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })} />
        <input className="w-full p-2 mt-2 border rounded-md" type="number" placeholder="Estimated Time (hours)" value={newTask.estimatedTime} onChange={(e) => setNewTask({ ...newTask, estimatedTime: e.target.value })} />
        <button onClick={addTask} className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 flex items-center gap-2"><PlusCircle /> Add Task</button>
      </div>
    </div>
  );
}
