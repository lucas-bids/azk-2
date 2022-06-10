import CardDark from "./CardDark.js";
import Header from "./Header";
import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar.js";

const Dashboard = () => {
  return (
    <div className="flex w-screen">
      <MenuBar />
      <main className=" w-2/3">
        <Header />
        <section className="w-full mt-4">
          <CardDark backgroundType="liquid">
            <h2>This month alone</h2>
            <div className="flex mt-4 justify-around">
              <div>
                <p className=" text-6xl font-medium">56.4</p>
                <p className="mt-2">Hours input</p>
              </div>
              <div className="border border-white"></div>
              <div>
                <p className=" text-6xl font-medium">1,378.45 €</p>
                <p className="mt-2">Cash generated</p>
              </div>
              <div className="border border-white"></div>
              <div>
                <p className=" text-6xl font-medium">128</p>
                <p className="mt-2">Tasks input</p>
              </div>
            </div>
          </CardDark>
          <SearchBar />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
