import { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AltHeader from "../header/AltHeader";
import CardWhite from "../UI/CardWhite";
import { useAppData } from "../../context/AppDataContext";
import { formatDateDisplay } from "../../utils/format";

const ReportDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getReportById, discardDraftReport, saveDraftReport } = useAppData();
  const report = getReportById(id);

  if (!report) {
    return (
      <div className="pt-8 text-xl text-gray-500">
        Report not found.
      </div>
    );
  }

  const saveHandler = () => {
    if (id === "draft") {
      saveDraftReport();
    }
    navigate("/reports");
  };

  const discardHandler = () => {
    if (id === "draft") {
      discardDraftReport();
    }
    navigate("/reports");
  };

  return (
    <Fragment>
      <AltHeader type="Report" />

      <CardWhite>
        <section className="flex flex-col gap-10 xl:flex-row xl:justify-between">
          <div>
            <h2 className="text-3xl font-medium text-gray-700">Selected clients</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {report.clients.map((client) => (
                <span
                  key={client.id}
                  className="rounded-full bg-[#eef1f7] px-4 py-1 text-xl text-gray-500"
                >
                  {client.client.replace(".org", "")}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-8 self-start text-left">
            <div>
              <h3 className="text-3xl font-medium text-gray-700">Start date</h3>
              <p className="mt-4 text-2xl text-gray-500">
                {formatDateDisplay(report.startDate)}
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-medium text-gray-700">End date</h3>
              <p className="mt-4 text-2xl text-gray-500">
                {formatDateDisplay(report.endDate)}
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-medium text-gray-700">Currency</h3>
              <p className="mt-4 text-2xl text-gray-500">{report.currency}</p>
            </div>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-3xl">
          <div className="flex rounded-2xl border border-gray-300 px-4 py-4 text-2xl font-medium text-gray-700">
            <div className="grow">Client</div>
            <div className="w-[160px] text-center">Time(hrs)</div>
            <div className="w-[160px] text-center">Price/hr</div>
            <div className="w-[160px] text-center">Currency</div>
            <div className="w-[160px] text-center">Amount</div>
          </div>

          <ul className="mt-4 space-y-3">
            {report.rows.map((row, index) => (
              <li
                key={row.id}
                className={`flex rounded-2xl px-6 py-4 text-xl text-gray-500 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="grow">{row.client}</div>
                <div className="w-[160px] text-center">{row.time}</div>
                <div className="w-[160px] text-center">{row.pricehour}</div>
                <div className="w-[160px] text-center">{row.currency}</div>
                <div className="w-[160px] text-center">{row.amount}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="flex gap-8 text-2xl font-medium text-gray-700">
            <p>Total time: {report.totalTime}</p>
            <p>Total amount: {report.totalAmount}</p>
          </div>

          <div className="flex gap-4 self-end">
            <button
              type="button"
              onClick={discardHandler}
              className="rounded-3xl bg-[#d0d5dd] px-8 py-4 text-2xl font-light text-white"
            >
              Discard
            </button>
            <button
              type="button"
              onClick={saveHandler}
              className="rounded-3xl bg-[#af88ef] px-8 py-4 text-2xl font-light text-white"
            >
              Save report
            </button>
          </div>
        </section>
      </CardWhite>
    </Fragment>
  );
};

export default ReportDetail;
