import React, { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, ListChecks, CheckCircle, Clock, TrendingUp, Users, CalendarDays, PlusCircle, Flag, UserPlus, BarChart2, Bell, Calendar, PieChart } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Link } from "react-router-dom";

const activityData = [
  { time: "9:00 AM", action: "Task 'UI Design' marked complete" },
  { time: "10:30 AM", action: "New project 'Marketing Launch' created" },
  { time: "1:15 PM", action: "Sprint 'Sprint 5' started" },
];

const progressData = [
  { name: "Week 1", progress: 30 },
  { name: "Week 2", progress: 50 },
  { name: "Week 3", progress: 70 },
  { name: "Week 4", progress: 90 },
];

const deadlines = [
  { task: "Finalize Sprint 6", due: "Tomorrow" },
  { task: "Submit Project Report", due: "March 1" },
  { task: "Client Feedback Review", due: "March 5" },
];

const teamOverview = [
  { name: "Alice", status: "Active" },
  { name: "Bob", status: "Working" },
  { name: "Charlie", status: "Idle" },
];

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [assignedMembers, setAssignedMembers] = useState("");
  const [status, setStatus] = useState("Not Started");

  const handleCreateProject = () => {
    console.log("Project Created:", {
      projectName,
      projectDescription,
      startDate,
      endDate,
      priority,
      assignedMembers,
      status
    });
    setShowModal(false);
    setProjectName("");
    setProjectDescription("");
    setStartDate("");
    setEndDate("");
    setPriority("Medium");
    setAssignedMembers("");
    setStatus("Not Started");
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

      <section className="py-16 max-w-6xl mx-auto space-y-12">
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl font-extrabold tracking-tight"
          >
            Dashboard Overview
          </motion.h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            <PlusCircle className="w-5 h-5" /> Create Project
          </button>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-1/2 space-y-4">
              <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
              <input type="text" placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} className="w-full p-2 border rounded-md" />
              <textarea placeholder="Project Description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} className="w-full p-2 border rounded-md"></textarea>
              <input type="date" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full p-2 border rounded-md" />
              <input type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Assigned Members" value={assignedMembers} onChange={(e) => setAssignedMembers(e.target.value)} className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-2 border rounded-md" />
              <div className="flex justify-end gap-4">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
                <button onClick={handleCreateProject} className="px-4 py-2 bg-blue-600 text-white rounded-md">Create</button>
              </div>
            </div>
          </div>
        )}
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105 flex items-center gap-4">
            <LayoutDashboard className="w-8 h-8 text-blue-600" />
            <div>
              <h2 className="text-lg font-semibold mb-1">Active Projects</h2>
              <p className="text-3xl font-bold">8</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105 flex items-center gap-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div>
              <h2 className="text-lg font-semibold mb-1">Tasks Completed</h2>
              <p className="text-3xl font-bold">150</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105 flex items-center gap-4">
            <Bell className="w-8 h-8 text-yellow-600" />
            <div>
              <h2 className="text-lg font-semibold mb-1">Notifications</h2>
              <p className="text-md">3 new alerts</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105 flex items-center gap-4">
            <Calendar className="w-8 h-8 text-purple-600" />
            <div>
              <h2 className="text-lg font-semibold mb-1">Upcoming Events</h2>
              <p className="text-md">2 scheduled events</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-teal-600" /> Team Members Overview
          </h2>
          <ul className="space-y-2">
            {teamOverview.map((member, index) => (
              <li key={index} className="flex items-center gap-4">
                <UserPlus className="w-5 h-5 text-gray-700" />
                <span className="font-medium">{member.name}</span> - <span className={`text-sm ${member.status === "Active" ? "text-green-600" : member.status === "Working" ? "text-yellow-600" : "text-red-600"}`}>{member.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BarChart2 className="w-6 h-6 text-indigo-600" /> Progress Over Time
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="progress" stroke="#4f46e5" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
