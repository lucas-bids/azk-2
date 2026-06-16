import MenuBar from "./MenuBar";
import TimelineSidebar from "./TimelineSidebar";

const Dashboard = (props) => {
  return (
    <div className="flex min-h-screen w-full">
      <MenuBar />
      <main className="flex min-w-0 grow px-3 py-4 sm:px-4">
        <div className="min-w-0 grow pr-0 xl:pr-4">
        {props.children}
        </div>
        <TimelineSidebar />
      </main>
    </div>
  );
};

export default Dashboard;
