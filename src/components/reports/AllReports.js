import { Fragment, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AltHeader from "../header/AltHeader";
import CardWhite from "../UI/CardWhite";
import { useAppData } from "../../context/AppDataContext";

const reportCardStyles = [
  "bg-[#c8b0f8]",
  "bg-[#6740cb]",
  "bg-[#a784eb]",
  "bg-[#9570e2]",
  "bg-[#c6abf8]",
  "bg-[#47318d]",
];

const AllReports = () => {
  const navigate = useNavigate();
  const { clients, reports, createDraftReport, getReportById } = useAppData();
  const [selectedClientIds, setSelectedClientIds] = useState(
    clients.slice(0, 6).map((client) => client.id)
  );
  const [startDate, setStartDate] = useState("2022-12-01");
  const [endDate, setEndDate] = useState("2022-12-31");
  const [currency, setCurrency] = useState("EUR");

  const savedReports = useMemo(
    () => reports.map((report) => getReportById(report.id)).filter(Boolean),
    [getReportById, reports]
  );

  const toggleClient = (clientId) => {
    setSelectedClientIds((currentIds) =>
      currentIds.includes(clientId)
        ? currentIds.filter((id) => id !== clientId)
        : [...currentIds, clientId]
    );
  };

  const createReportHandler = () => {
    createDraftReport({
      clientIds: selectedClientIds,
      startDate,
      endDate,
      currency,
    });
    navigate("/reports/draft");
  };

  return (
    <Fragment>
      <AltHeader type="Create report" />

      <CardWhite>
        <div className="rounded-2xl border border-gray-300 bg-white">
          <div className="flex flex-col lg:flex-row">
            <div className="grow border-b border-gray-300 px-5 py-4 lg:border-b-0 lg:border-r">
              <p className="text-xl text-gray-500">Select one or more clients</p>
            </div>
            <input
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              className="border-b border-gray-300 px-5 py-4 text-xl text-gray-500 focus:outline-none lg:w-[180px] lg:border-b-0 lg:border-r"
            />
            <input
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              className="border-b border-gray-300 px-5 py-4 text-xl text-gray-500 focus:outline-none lg:w-[180px] lg:border-b-0 lg:border-r"
            />
            <select
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
              className="bg-white px-5 py-4 text-xl text-gray-500 focus:outline-none lg:w-[200px]"
            >
              <option value="EUR">Display currency</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="BRL">BRL</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {clients.map((client) => (
              <button
                key={client.id}
                type="button"
                onClick={() => toggleClient(client.id)}
                className={`rounded-full px-4 py-1 text-lg ${
                  selectedClientIds.includes(client.id)
                    ? "bg-[#ece8ff] text-gray-600"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {client.client.replace(".org", "")}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={createReportHandler}
            className="rounded-2xl bg-[#af88ef] px-8 py-4 text-2xl font-light text-white"
          >
            Create report
          </button>
        </div>
      </CardWhite>

      <section className="mt-10">
        <h2 className="text-3xl font-medium text-gray-700">Your reports</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
          {savedReports.map((report, index) => (
            <button
              key={report.id}
              type="button"
              onClick={() => navigate(`/reports/${report.id}`)}
              className={`min-h-[240px] rounded-3xl p-6 text-left text-white ${
                reportCardStyles[index % reportCardStyles.length]
              }`}
            >
              <p className="text-2xl font-medium">{report.title}</p>
              <p className="mt-4 text-2xl font-light leading-10">
                {report.clients.map((client) => client.client.replace(".org", "")).join(", ")}
              </p>
              <p className="mt-10 text-2xl font-medium">Currency: {report.currency}</p>
            </button>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default AllReports;
