import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Dashboard from "./components/UI/Dashboard.js";
import AllTasks from "./components/tasks/AllTasks.js";
import AllClients from "./components/clients/AllClients.js";
import AllReports from "./components/reports/AllReports";
import ReportDetail from "./components/reports/ReportDetail";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard>
              <AllTasks />
            </Dashboard>
          }
        />
        <Route
          path="/clients"
          element={
            <Dashboard>
              <AllClients />
            </Dashboard>
          }
        />
        <Route
          path="/reports"
          element={
            <Dashboard>
              <AllReports />
            </Dashboard>
          }
        />
        <Route
          path="/reports/:id"
          element={
            <Dashboard>
              <ReportDetail />
            </Dashboard>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
