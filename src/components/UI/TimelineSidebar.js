import { useAppData } from "../../context/AppDataContext";

const TimelineSidebar = () => {
  const { timelineEntries } = useAppData();

  return (
    <aside className="hidden xl:block w-[360px] shrink-0 border-l border-gray-200 pl-6 pr-4 pt-3">
      <div className="relative h-full">
        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-purple-300"></div>
        <div className="space-y-10">
          {timelineEntries.map((entry) => (
            <section key={entry.date} className="relative pl-10">
              <span className="absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-white bg-purple-300"></span>
              <h3 className="text-2xl font-medium text-gray-600">
                {entry.displayDate}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.clients.map((client) => (
                  <span
                    key={`${entry.date}-${client}`}
                    className="rounded-full bg-gray-100 px-3 py-1 text-lg text-gray-500"
                  >
                    {client}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xl text-gray-500">
                Worked: {entry.worked} hours | Earned: {entry.earned} EUR
              </p>
            </section>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default TimelineSidebar;
