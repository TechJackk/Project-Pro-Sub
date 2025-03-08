import React from "react";
import { LineChart, Line, PieChart, Pie, Cell, Tooltip, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { Link } from "react-router-dom";
import { FileText, BarChart3, Users, Clock, TrendingUp, Activity, AlertTriangle } from "lucide-react";

const taskData = [
  { name: "Completed", value: 45, color: "#34D399" },
  { name: "In Progress", value: 30, color: "#60A5FA" },
  { name: "Pending", value: 25, color: "#FBBF24" },
];

const velocityData = [
  { sprint: "Sprint 1", points: 20 },
  { sprint: "Sprint 2", points: 30 },
  { sprint: "Sprint 3", points: 25 },
  { sprint: "Sprint 4", points: 35 },
];

const workloadData = [
  { name: "Dev A", hours: 40 },
  { name: "Dev B", hours: 35 },
  { name: "Dev C", hours: 30 },
];

const bottleneckData = [
  { task: "API Development", assignedTo: "Dev A", estimated: 10, actual: 18 },
  { task: "UI Design", assignedTo: "Dev B", estimated: 8, actual: 15 },
  { task: "Database Optimization", assignedTo: "Dev C", estimated: 6, actual: 12 },
];

const completionRateData = [
  { sprint: "Sprint 1", completed: 80 },
  { sprint: "Sprint 2", completed: 85 },
  { sprint: "Sprint 3", completed: 75 },
  { sprint: "Sprint 4", completed: 90 },
];

const cumulativeFlowData = [
  { sprint: "Sprint 1", todo: 10, inProgress: 20, done: 30 },
  { sprint: "Sprint 2", todo: 15, inProgress: 25, done: 40 },
  { sprint: "Sprint 3", todo: 20, inProgress: 30, done: 50 },
  { sprint: "Sprint 4", todo: 12, inProgress: 22, done: 45 },
];

export default function Reports() {
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
      
      <h1 className="text-4xl font-extrabold mb-6">Sprint Reports</h1>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold flex items-center gap-2"><BarChart3 className="text-blue-600" /> Task Status Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={taskData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                {taskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold flex items-center gap-2"><TrendingUp className="text-green-600" /> Velocity Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={velocityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="sprint" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="points" stroke="#34D399" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold flex items-center gap-2"><Activity className="text-orange-600" /> Sprint Completion Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={completionRateData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sprint" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="completed" stroke="#FF9800" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold flex items-center gap-2"><BarChart3 className="text-blue-600" /> Cumulative Flow Diagram</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={cumulativeFlowData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sprint" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="todo" stroke="#FF0000" strokeWidth={2} />
            <Line type="monotone" dataKey="inProgress" stroke="#FFA500" strokeWidth={2} />
            <Line type="monotone" dataKey="done" stroke="#008000" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
