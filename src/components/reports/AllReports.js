import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../header/PageHeader";
import CardWhite from "../UI/CardWhite";
import { useAppData } from "../../context/AppDataContext";
import FormBar, { FormBarSegment } from "../UI/FormBar";
import TextField from "../UI/TextField";
import SelectField from "../UI/SelectField";
import Badge from "../UI/Badge";
import Button from "../UI/Button";
import SectionHeader from "../UI/SectionHeader";

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
  const { clients, createDraftReport, savedReports } = useAppData();
  const [selectedClientIds, setSelectedClientIds] = useState(
    clients.slice(0, 6).map((client) => client.id)
  );
  const [startDate, setStartDate] = useState("2022-12-01");
  const [endDate, setEndDate] = useState("2022-12-31");
  const [currency, setCurrency] = useState("EUR");

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
    <>
      <PageHeader title="Create report" />

      <CardWhite>
        <FormBar>
          <FormBarSegment className="grow">
            <div className="px-4 text-sm font-light text-gray-500 dark:text-slate-200">
              Select one or more clients
            </div>
          </FormBarSegment>
          <FormBarSegment widthClass="lg:w-[180px]">
            <TextField
              variant="bar"
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </FormBarSegment>
          <FormBarSegment widthClass="lg:w-[180px]">
            <TextField
              variant="bar"
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </FormBarSegment>
          <FormBarSegment widthClass="lg:w-[200px]" bordered={false}>
            <SelectField
              variant="bar"
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="BRL">BRL</option>
            </SelectField>
          </FormBarSegment>
        </FormBar>

        <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex w-2/3 flex-wrap gap-2">
            {clients.map((client) => (
              <button
                key={client.id}
                type="button"
                onClick={() => toggleClient(client.id)}
                className="text-left"
              >
                <Badge
                  tone={selectedClientIds.includes(client.id) ? "selected" : "timeline"}
                >
                  {client.client.replace(".org", "")}
                </Badge>
              </button>
            ))}
          </div>

          <Button type="button" onClick={createReportHandler}>
            Create report
          </Button>
        </div>
      </CardWhite>

      <section className="mt-8">
        <SectionHeader title="Your reports" />
        <div className="mt-4 grid gap-3 md:grid-cols-2 2xl:grid-cols-3">
          {savedReports.map((report, index) => (
            <button
              key={report.id}
              type="button"
              onClick={() => navigate(`/reports/${report.id}`)}
              className={`min-h-[190px] rounded-[22px] p-5 text-left text-white ${
                reportCardStyles[index % reportCardStyles.length]
              }`}
            >
              <p className="text-lg font-medium">{report.title}</p>
              <p className="mt-3 text-base font-light leading-7">
                {report.clients.map((client) => client.client.replace(".org", "")).join(", ")}
              </p>
              <p className="mt-6 text-base font-medium">Currency: {report.currency}</p>
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllReports;
