import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Trello, CalendarClock, BarChart2, RefreshCcw, AtSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 p-8 text-gray-900 relative overflow-hidden">
      <nav className="flex justify-between items-center py-4 px-6 bg shadow-md rounded-2xl mb-8">
              <Link to="/">
              <h1 className="text-xl font-bold">Project ZenFlow</h1>
              </Link>
      </nav>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-blue-200 to-pink-300 animate-[pulse_5s_infinite] opacity-30 -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 -z-10"></div>
      
      <section className="text-center py-20 max-w-4xl mx-auto relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-6xl font-extrabold mb-8 tracking-tight"
        >
          Simplify Your Workflow
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.8}}
          className="text-xl mb-10 text-gray-700"
        >
          Manage projects, plan sprints, and track progress effortlessly.
        </motion.p>
        <Link to="/dashboard">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg transition duration-200"
        >
          Get Started
        </motion.button>
        </Link>
      </section>

      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {[
          { title: "Dashboard", text: "Overview of tasks and stats.", icon: LayoutDashboard },
          { title: "Kanban Board", text: "Manage tasks seamlessly.", icon: Trello },
          { title: "Sprint Planning", text: "Organize and assign tasks.", icon: CalendarClock },
          { title: "Reports", text: "Track progress and performance.", icon: BarChart2 },
          { title: "Real-Time Updates", text: "Stay informed instantly.", icon: RefreshCcw },
          { title: "User Mentions", text: "Tag teammates with ease.", icon: AtSign }
        ].map((feature, index) => (
          <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)" }}
            className="flex flex-col items-center gap-4 text-center p-6 bg-white rounded-2xl shadow-lg transition-transform"
          >
            <div className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4 shadow-md">
              {React.createElement(feature.icon, { className: "text-white w-8 h-8" })}
            </div>
            <div className="max-w-xs">
              <h2 className="text-xl font-bold mb-2 tracking-tight">{feature.title}</h2>
              <p className="text-sm text-gray-600">{feature.text}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <footer className="mt-24 text-center text-gray-500 relative z-10">
        <p className="text-sm">© 2025 Project ZenFlow. All rights reserved.</p>
      </footer>
    </div>
  );
}
