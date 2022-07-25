import Header from "./header/TasksHeader";
import MenuBar from "./MenuBar";

import { Outlet } from "react-router-dom";

const Dashboard = () => {

  return (
    <div className="flex w-screen">
      <MenuBar />
      <main className=" w-2/3">
        <Header />

        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
