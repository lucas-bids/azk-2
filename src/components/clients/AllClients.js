import { useMemo, useRef, useState } from "react";
import PageHeader from "../header/PageHeader";
import CardDark from "../UI/CardDark";
import SearchBar from "../UI/SearchBar";
import CardWhite from "../UI/CardWhite";
import ClientsList from "./ClientsList";
import { useAppData } from "../../context/AppDataContext";
import FormBar, { FormBarSegment } from "../UI/FormBar";
import TextField from "../UI/TextField";
import SelectField from "../UI/SelectField";
import IconSubmitButton from "../UI/IconSubmitButton";

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
    <>
      <PageHeader title="Manage your clients" />

      <section className="mt-4 flex flex-col gap-4 xl:flex-row">
        <div className="xl:w-1/3 xl:pr-1">
          <CardDark variant="liquid">
            <div className="mt-4 flex justify-between">
              <div>
                <p className="text-5xl font-medium">{clientsSummary.totalHours}</p>
                <p className="mt-2 text-sm">Total hours</p>
              </div>
              <div className="mx-3 hidden h-20 border border-white/70 xl:block"></div>
              <div>
                <p className="text-5xl font-medium">{clientsSummary.hoursLeft}</p>
                <p className="mt-2 text-sm">Hours left</p>
              </div>
            </div>
          </CardDark>
        </div>

        <div className="xl:w-2/3 xl:pl-1">
          <CardDark variant="purple">
            <div className="mt-4 text-center">
              <p className="text-5xl font-medium">
                {clientsSummary.plannedIncome} {clientsSummary.currency}
              </p>
              <p className="mt-2 text-sm">Planned income</p>
            </div>
          </CardDark>
        </div>
      </section>

      <section>
        <SearchBar value={searchValue} onChange={setSearchValue} />
      </section>

      <section>
        <CardWhite>
          <form onSubmit={submitClientHandler}>
            <FormBar>
              <FormBarSegment className="grow">
                <TextField
                  ref={clientRef}
                  variant="bar"
                  type="text"
                  placeholder="Client Name"
                />
              </FormBarSegment>
              <FormBarSegment widthClass="xl:w-[180px]">
                <TextField
                  ref={priceHourRef}
                  variant="bar"
                  type="text"
                  placeholder="Price/hour"
                />
              </FormBarSegment>
              <FormBarSegment widthClass="xl:w-[120px]">
                <SelectField ref={currencyRef} variant="bar" defaultValue="EUR">
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="BRL">BRL</option>
                </SelectField>
              </FormBarSegment>
              <FormBarSegment widthClass="xl:w-[180px]" bordered={false}>
                <TextField
                  ref={hoursMonthRef}
                  variant="bar"
                  type="text"
                  placeholder="Hours/mo."
                />
                <IconSubmitButton />
              </FormBarSegment>
            </FormBar>
          </form>
          <ClientsList clients={filteredClients} onDelete={deleteClient} />
        </CardWhite>
      </section>
    </>
  );
};

export default AllClients;
