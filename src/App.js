import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Dashboard from "./components/UI/Dashboard.js";
import AllTasks from "./components/tasks/AllTasks.js"
import AllClients from "./components/clients/AllClients.js"

function App() {
  return (
    <div className=" bg-gray-50 min-h-screen flex">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} >
          <Route path="tasks" element={<AllTasks />} />
          <Route path="clients" element={<AllClients />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
