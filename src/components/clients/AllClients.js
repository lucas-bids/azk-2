import { Fragment, useMemo, useRef, useState } from "react";
import AltHeader from "../header/AltHeader";
import CardDark from "../UI/CardDark.js";
import SearchBar from "../UI/SearchBar.js";
import SubmitIcon from "../../assets/images/icons/submit.svg";
import CardWhite from "../UI/CardWhite.js";
import ClientList from "./ClientsList";
import { useAppData } from "../../context/AppDataContext";

const AllClients = () => {
  const { clients, addClient, deleteClient, clientsSummary } = useAppData();
  const [searchValue, setSearchValue] = useState("");

  const clientRef = useRef();
  const priceHourRef = useRef();
  const currencyRef = useRef();
  const hoursMonthRef = useRef();

  const filteredClients = useMemo(() => {
    return clients.filter((client) =>
      client.client.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [clients, searchValue]);

  const submitClientHandler = (event) => {
    event.preventDefault();

    const enteredClient = clientRef.current.value;
    const enteredPriceHour = priceHourRef.current.value;
    const enteredCurrency = currencyRef.current.value;
    const enteredHoursMonth = hoursMonthRef.current.value;

    if (!enteredClient || !enteredPriceHour || !enteredHoursMonth) {
      return;
    }

    addClient({
      client: enteredClient,
      pricehour: enteredPriceHour,
      currency: enteredCurrency,
      hoursmonth: enteredHoursMonth,
    });

    clientRef.current.value = "";
    priceHourRef.current.value = "";
    currencyRef.current.value = "EUR";
    hoursMonthRef.current.value = "";
  };

  return (
    <Fragment>
      <AltHeader type="Manage your clients" />

      <section className="mt-4 flex flex-col gap-4 xl:flex-row">
        <div className="xl:w-1/3 xl:pr-1">
          <CardDark backgroundType="liquid">
            <div className="mt-4 flex justify-between">
              <div>
                <p className="text-7xl font-medium">{clientsSummary.totalHours}</p>
                <p className="mt-4 text-2xl">Total hours</p>
              </div>
              <div className="mx-4 hidden border border-white xl:block"></div>
              <div>
                <p className="text-7xl font-medium">{clientsSummary.hoursLeft}</p>
                <p className="mt-4 text-2xl">Hours left</p>
              </div>
            </div>
          </CardDark>
        </div>

        <div className="xl:w-2/3 xl:pl-1">
          <CardDark backgroundType="bg-[#9570e2]">
            <div className="mt-4 text-center">
              <p className="text-7xl font-medium">{clientsSummary.plannedIncome} €</p>
              <p className="mt-4 text-2xl">Planned income</p>
            </div>
          </CardDark>
        </div>
      </section>

      <section>
        <SearchBar value={searchValue} onChange={setSearchValue} />
      </section>

      <section>
        <CardWhite>
          <form onSubmit={submitClientHandler} className="flex flex-col gap-3 xl:flex-row">
            <input
              ref={clientRef}
              type="text"
              className="h-[64px] grow rounded-[24px] border border-gray-300 px-4 text-xl text-gray-500 focus:outline-none xl:rounded-r-none"
              placeholder="Client Name"
            />
            <input
              ref={priceHourRef}
              type="text"
              className="h-[64px] border border-gray-300 px-4 text-xl text-gray-500 focus:outline-none xl:w-[180px] xl:rounded-none xl:border-l-0"
              placeholder="Price/hour"
            />
            <select
              ref={currencyRef}
              defaultValue="EUR"
              className="h-[64px] border border-gray-300 px-4 text-xl text-gray-500 focus:outline-none xl:w-[120px] xl:rounded-none xl:border-l-0"
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="BRL">BRL</option>
            </select>
            <div className="flex h-[64px] rounded-[24px] border border-gray-300 xl:w-[220px] xl:rounded-l-none xl:border-l-0">
              <input
                ref={hoursMonthRef}
                type="text"
                className="h-full grow px-4 text-xl text-gray-500 focus:outline-none"
                placeholder="Hours/mo."
              />
              <button type="submit" className="h-full p-3">
                <img src={SubmitIcon} className="h-full" alt="" />
              </button>
            </div>
          </form>

          <div className="mt-4 flex rounded-[24px] border border-gray-300 px-4 py-4 text-2xl text-gray-500">
            <div className="grow border-r border-gray-300">Client Name</div>
            <div className="w-[180px] border-r border-gray-300 pl-3">Price/hour</div>
            <div className="w-[120px] border-r border-gray-300 pl-3">EUR</div>
            <div className="w-[180px] pl-3">Hours/mo.</div>
          </div>

          <ClientList clients={filteredClients} onDelete={deleteClient} />
        </CardWhite>
      </section>
    </Fragment>
  );
};

export default AllClients;
