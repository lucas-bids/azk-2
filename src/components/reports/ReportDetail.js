import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../header/PageHeader";
import CardWhite from "../UI/CardWhite";
import { useAppData } from "../../context/AppDataContext";
import { formatDateDisplay } from "../../utils/format";
import Badge from "../UI/Badge";
import Button from "../UI/Button";
import { mutedHeadingClass, tableHeaderClass, tableRowClass } from "../UI/uiClasses";

const ReportDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getReportById, discardDraftReport, saveDraftReport } = useAppData();
  const report = getReportById(id);

  if (!report) {
    return (
      <div className="pt-8 text-xl text-gray-500 dark:text-slate-400">
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
    <>
      <PageHeader title="Report" />

      <CardWhite>
        <section className="flex flex-col gap-7 xl:flex-row xl:justify-between">
          <div>
            <h2 className={mutedHeadingClass}>Selected clients</h2>
            <div className="mt-3 flex w-2/3 flex-wrap gap-2">
              {report.clients.map((client) => (
                <Badge key={client.id}>
                  {client.client.replace(".org", "")}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-6 self-start text-left">
            <div>
              <h3 className={mutedHeadingClass}>Start date</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">
                {formatDateDisplay(report.startDate)}
              </p>
            </div>
            <div>
              <h3 className={mutedHeadingClass}>End date</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">
                {formatDateDisplay(report.endDate)}
              </p>
            </div>
            <div>
              <h3 className={mutedHeadingClass}>Currency</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">
                {report.currency}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-[22px]">
          <div className={`flex px-4 pb-4 ${tableHeaderClass}`}>
            <div className="grow">Client</div>
            <div className="w-[130px] text-center">Time(hrs)</div>
            <div className="w-[130px] text-center">Price/hr</div>
            <div className="w-[130px] text-center">Currency</div>
            <div className="w-[130px] text-center">Amount</div>
          </div>

          <ul className="mt-3 space-y-2">
            {report.rows.map((row) => (
              <li key={row.id} className={`flex ${tableRowClass}`}>
                <div className="grow px-2">{row.client}</div>
                <div className="w-[130px] px-2 text-center">{row.time}</div>
                <div className="w-[130px] px-2 text-center">{row.pricehour}</div>
                <div className="w-[130px] px-2 text-center">{row.currency}</div>
                <div className="w-[130px] px-2 text-center">{row.amount}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div className={`flex gap-6 ${tableHeaderClass}`}>
            <p>Total time: {report.totalTime}</p>
            <p>Total amount: {report.totalAmount}</p>
          </div>

          <div className="flex gap-4 self-end">
            <Button type="button" variant="secondary" onClick={discardHandler}>
              Discard
            </Button>
            <Button type="button" onClick={saveHandler}>
              Save report
            </Button>
          </div>
        </section>
      </CardWhite>
    </>
  );
};

export default ReportDetail;
