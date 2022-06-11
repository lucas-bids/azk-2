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
            <div className="flex mt-4 justify-between">
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
        </section>

        <section>
          <SearchBar />

          <div className="flex justify-between mt-4">
            <h2>Your tasks</h2>

            <div className="flex">
              <h2 className="mr-2">Filters:</h2>
              <form className="text-gray-400" action="">
                <input type="date" className=" bg-gray-50 w-[120px] mr-2" />
                <input type="date" className=" bg-gray-50 w-[120px] mr-2" />
                <select id="cars" name="cars" className="bg-gray-50">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </form>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white rounded-2xl shadow p-3 mt-4">
            <form action="" className="h-[50px]">
              <input type="date" className="h-full rounded-l-2xl border border-gray-300 px-4" />
              <input type="text" className="h-full border-y border-gray-300 px-4" placeholder="Lucas"/>
              <input type="text" className="h-full border border-gray-300 px-4" />
              <input type="time" className="h-full rounded-r-2xl border border-gray-300 px-4" />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
