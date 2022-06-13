import CardDark from "./CardDark.js";
import Header from "./Header";
import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar.js";

import SubmitIcon from "../assets/images/icons/submit.svg";
import CardWhite from "./CardWhite.js";
import List from "./List.js";

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
          <CardWhite>
            <form action="" className="h-[50px] flex">
              <input
                type="date"
                className="h-[50px] focus:outline-none w-1/5 rounded-l-2xl border border-gray-300 px-4"
              />
              <input
                type="text"
                className="h-[50px] focus:outline-none w-1/5 border-y border-gray-300 px-4"
                placeholder="Client name"
              />
              <input
                type="text"
                className="h-[50px] focus:outline-none grow border-y border-l border-gray-300 px-4"
                placeholder="Task"
              />
              <div className="h-[50px] flex w-1/10 rounded-r-2xl border border-gray-300 pl-4">
                <input
                  type="time"
                  className="focus:outline-none h-full"
                />
                <button type="submit" className="h-full p-2">
                  <img src={SubmitIcon} className="h-full" alt="" />
                </button>
              </div>
            </form>

            <List />
          </CardWhite>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
