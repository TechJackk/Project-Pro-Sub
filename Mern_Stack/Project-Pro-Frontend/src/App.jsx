import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import KanbanBoard from "./components/KanbanBoard";
import SprintPlanning from "./components/SprintPlanning";
import Reports from "./components/Reports";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kanbanboard" element={<KanbanBoard />} />
        <Route path="/sprintplanning" element={<SprintPlanning />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}


