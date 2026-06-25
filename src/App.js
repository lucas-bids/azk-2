import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Dashboard from "./components/UI/Dashboard.js";
import AllTasks from "./components/tasks/AllTasks.js";
import AllClients from "./components/clients/AllClients.js";
import AllReports from "./components/reports/AllReports";
import ReportDetail from "./components/reports/ReportDetail";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname === "/" ? "login" : "app"}
        >
          <Route path="/" element={<Login />} />
          <Route element={<Dashboard />}>
            <Route path="/dashboard" element={<AllTasks />} />
            <Route path="/clients" element={<AllClients />} />
            <Route path="/reports" element={<AllReports />} />
            <Route path="/reports/:id" element={<ReportDetail />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
