import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className=" bg-gray-50 h-screen content-center">
      <div className=" w-1/2 max-w-[800px] mx-auto content-center">
        <Login />
      </div>
    </div>
  );
}

export default App;
