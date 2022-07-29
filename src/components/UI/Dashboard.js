import MenuBar from "./MenuBar";

const Dashboard = (props) => {

  return (
    <div className="flex w-screen">
      <MenuBar />
      <main className=" w-2/3">

        {props.children}
      </main>
    </div>
  );
};

export default Dashboard;
