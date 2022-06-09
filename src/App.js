import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  return (
    <div className=" bg-gray-50 h-screen flex">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
