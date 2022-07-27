import AltHeader from "../header/AltHeader";
import CardDark from "../UI/CardDark.js";
import SearchBar from "../UI/SearchBar.js";
import SubmitIcon from "../../assets/images/icons/submit.svg";
import CardWhite from "../UI/CardWhite.js";
import { Fragment, useRef } from "react";
import { useState, useEffect } from "react";
import ClientList from "./ClientsList";

const AllClients = () => {
  const [clients, setClients] = useState([]);

  const retrieveClients = async () => {
    const response = await fetch(
      "https://azkii-f3cb7-default-rtdb.firebaseio.com/allclients.json"
    );
    const responseData = await response.json();

    console.log(responseData)

    const loadedClients = [];

    for (const key in responseData) {
      loadedClients.push({
        client: responseData[key].Client,
        pricehour: responseData[key].PriceHour,
        currency: responseData[key].Currency,
        hoursmonth: responseData[key].HoursMonth
      });
    }

    setClients(loadedClients);
  };

  // Loads tasks
  useEffect(() => {
    retrieveClients();
  }, []);

  // Takes input value from task form and sends it to Firebase
  const clientRef = useRef();
  const priceHourRef = useRef();
  const currencyRef = useRef();
  const hoursMonthRef = useRef();

  const submitClientHandler = (event) => {
    event.preventDefault();

    const enteredClient = clientRef.current.value;
    const enteredPriceHour = priceHourRef.current.value;
    const enteredCurrency = currencyRef.current.value;
    const enteredHoursMonth = hoursMonthRef.current.value;

    const newClientData = {
      Client: enteredClient,
      PriceHour: enteredPriceHour,
      Currency: enteredCurrency,
      HoursMonth: enteredHoursMonth,
    };

    const postClient = async (newClient) => {
      const response = await fetch(
        "https://azkii-f3cb7-default-rtdb.firebaseio.com/allclients.json",
        {
          method: "POST",
          body: JSON.stringify(newClient),
          headers: { "Content-Type": "application.json" },
        }
      );
      const data = await response.json();

      const clientData = {
        id: data.name,
        client: enteredClient,
        pricehour: enteredPriceHour,
        currency: enteredCurrency,
        hoursmonth: enteredHoursMonth
      };

      setClients((clients) => [...clients, clientData]);
    };

    postClient(newClientData);
  };

  return (
    <Fragment>
      <AltHeader type="Manage your clients" />

      <section className="w-full mt-4 flex">
        <div className=" w-1/3 pr-1">
          <CardDark backgroundType="liquid">
            <div className="flex mt-4 justify-between">
              <div>
                <p className=" text-6xl font-medium">56.4</p>
                <p className="mt-2">Total Hours</p>
              </div>
              <div className="border border-white"></div>
              <div>
                <p className=" text-6xl font-medium">10</p>
                <p className="mt-2">Hours left</p>
              </div>
            </div>
          </CardDark>
        </div>

        <div className=" w-2/3 pl-1">
          <CardDark backgroundType="bg-purple-500">
            <div className="flex mt-4 justify-between">
              <div>
                <p className=" text-6xl font-medium">1850,00 €</p>
                <p className="mt-2">Planned income</p>
              </div>
            </div>
          </CardDark>
        </div>
      </section>

      <section>
        <SearchBar />
      </section>

      <section>
        <CardWhite>
          <form
            action=""
            onSubmit={submitClientHandler}
            className="h-[50px] flex"
          >
            <input
              ref={clientRef}
              type="client"
              className="h-[50px] focus:outline-none grow rounded-l-2xl border border-gray-300 px-4"
            />
            <input
              ref={priceHourRef}
              type="pricehour"
              className="h-[50px] focus:outline-none w-1/5 border-y border-gray-300 px-4"
              placeholder="Client name"
            />
            <input
              ref={currencyRef}
              type="currency"
              className="h-[50px] focus:outline-none grow border-y px-4"
              placeholder="Task"
            />
            <div className="h-[50px] flex w-1/10 rounded-r-2xl border border-gray-300 pl-4">
              <input
                ref={hoursMonthRef}
                type="hoursmonth"
                className="focus:outline-none h-full"
              />
              <button type="submit" className="h-full p-2">
                <img src={SubmitIcon} className="h-full" alt="" />
              </button>
            </div>
          </form>
          <ClientList clients={clients} refresh={retrieveClients} />
        </CardWhite>
      </section>
    </Fragment>
  );
};

export default AllClients;
