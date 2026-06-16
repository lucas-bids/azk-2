import { useAppData } from "../../context/AppDataContext";
import Badge from "./Badge";

const TimelineSidebar = () => {
  const { timelineEntries } = useAppData();

  return (
    <aside className="hidden xl:block w-[290px] shrink-0 border-l border-gray-200 pl-4 pr-3 pt-2 dark:border-slate-700">
      <div className="relative h-full">
        <div className="absolute left-[8px] top-5 bottom-0 w-px bg-purple-300"></div>
        <div className="space-y-7">
          {timelineEntries.map((entry) => (
            <section key={entry.date} className="relative pl-7">
              <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-white bg-purple-300"></span>
              <h3 className="text-base font-medium text-gray-600 dark:text-slate-300">
                {entry.displayDate}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {entry.clients.map((client) => (
                  <Badge key={`${entry.date}-${client}`} tone="timeline" className="px-2.5 text-[12px]">
                    {client}
                  </Badge>
                ))}
              </div>
              <p className="mt-3 text-[13px] text-gray-500 dark:text-slate-400">
                Worked: {entry.worked} hours | Earned: {entry.earned} {entry.currency}
              </p>
            </section>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default TimelineSidebar;
