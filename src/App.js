import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard.js";
import AllTasks from "./components/AllTasks.js"

function App() {
  return (
    <div className=" bg-gray-50 min-h-screen flex">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} >
          <Route path="tasks" element={<AllTasks />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
