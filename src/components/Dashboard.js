import MenuBar from "./MenuBar";

const Dashboard = () => {
  return (
    <div className="flex w-screen">
      <div className="w-1/12">
        <MenuBar />
      </div>
      <main className=" w-2/3">
        <header className="pt-3">
          <h1 className="text-4xl">Hello, Lucas</h1>
        </header>
      </main>
    </div>
  );
};

export default Dashboard;
