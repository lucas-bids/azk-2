import { Fragment, useMemo, useRef, useState } from "react";
import CardDark from "../UI/CardDark.js";
import SearchBar from "../UI/SearchBar.js";
import SubmitIcon from "../../assets/images/icons/submit.svg";
import CardWhite from "../UI/CardWhite.js";
import List from "./TasksList.js";
import TasksHeader from "../header/TasksHeader.js";
import { useAppData } from "../../context/AppDataContext";

const AllTasks = () => {
  const { tasks, clients, addTask, deleteTask, dashboardSummary } = useAppData();
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState("2022-05-01");
  const [endDate, setEndDate] = useState("2022-12-20");
  const [selectedClient, setSelectedClient] = useState("");

  const enteredDateRef = useRef();
  const enteredClientRef = useRef();
  const enteredTaskRef = useRef();
  const enteredTimeRef = useRef();

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        !searchValue ||
        task.client.toLowerCase().includes(searchValue.toLowerCase()) ||
        task.task.toLowerCase().includes(searchValue.toLowerCase());
      const matchesStartDate = !startDate || task.date >= startDate;
      const matchesEndDate = !endDate || task.date <= endDate;
      const matchesClient = !selectedClient || task.client === selectedClient;

      return matchesSearch && matchesStartDate && matchesEndDate && matchesClient;
    });
  }, [endDate, searchValue, selectedClient, startDate, tasks]);

  const submitTaskHandler = (event) => {
    event.preventDefault();

    const enteredDate = enteredDateRef.current.value;
    const enteredClient = enteredClientRef.current.value;
    const enteredTask = enteredTaskRef.current.value;
    const enteredTime = enteredTimeRef.current.value;

    if (!enteredDate || !enteredClient || !enteredTask || !enteredTime) {
      return;
    }

    addTask({
      date: enteredDate,
      client: enteredClient,
      task: enteredTask,
      time: enteredTime,
    });

    enteredDateRef.current.value = "";
    enteredClientRef.current.value = clients[0]?.client || "";
    enteredTaskRef.current.value = "";
    enteredTimeRef.current.value = "";
  };

  return (
    <Fragment>
      <TasksHeader />

      <section className="mt-4 w-full">
        <CardDark backgroundType="liquid">
          <h2 className="text-2xl font-medium">This month alone:</h2>
          <div className="mt-8 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-7xl font-medium">{dashboardSummary.hoursInput}</p>
              <p className="mt-4 text-2xl">Hours input</p>
            </div>
            <div className="hidden h-32 border border-white xl:block"></div>
            <div>
              <p className="text-7xl font-medium">{dashboardSummary.cashEarned} €</p>
              <p className="mt-4 text-2xl">Cash earned</p>
            </div>
            <div className="hidden h-32 border border-white xl:block"></div>
            <div>
              <p className="text-7xl font-medium">{dashboardSummary.tasksCreated}</p>
              <p className="mt-4 text-2xl">Tasks created</p>
            </div>
          </div>
        </CardDark>
      </section>

      <section>
        <SearchBar value={searchValue} onChange={setSearchValue} />
        <div className="mt-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <h2 className="text-3xl font-medium text-gray-700">Your tasks</h2>
          <div className="flex flex-wrap items-center gap-3 text-2xl text-gray-400">
            <h2 className="text-2xl font-medium text-gray-700">Filters:</h2>
            <input
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              className="bg-gray-50 underline focus:outline-none"
            />
            <span>-</span>
            <input
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              className="bg-gray-50 underline focus:outline-none"
            />
            <select
              value={selectedClient}
              onChange={(event) => setSelectedClient(event.target.value)}
              className="bg-gray-50 underline focus:outline-none"
            >
              <option value="">Client</option>
              {clients.map((client) => (
                <option key={client.id} value={client.client}>
                  {client.client}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section>
        <CardWhite>
          <form onSubmit={submitTaskHandler}>
            <div className="flex flex-col overflow-hidden rounded-[28px] border border-gray-300 bg-white xl:flex-row">
              <input
                ref={enteredDateRef}
                type="date"
                defaultValue="2022-12-13"
                className="h-[84px] border-b border-gray-300 px-7 text-[28px] font-light text-gray-500 focus:outline-none xl:w-[270px] xl:border-b-0 xl:border-r"
              />
              <input
                ref={enteredClientRef}
                type="text"
                list="task-client-options"
                defaultValue={clients[0]?.client || ""}
                className="h-[84px] border-b border-gray-300 px-7 text-[28px] font-light text-gray-500 focus:outline-none xl:w-[360px] xl:border-b-0 xl:border-r"
                placeholder="Client"
              />
              <datalist id="task-client-options">
                {clients.map((client) => (
                  <option key={client.id} value={client.client} />
                ))}
              </datalist>
              <input
                ref={enteredTaskRef}
                type="text"
                className="h-[84px] grow border-b border-gray-300 px-7 text-[28px] font-light text-gray-500 focus:outline-none xl:border-b-0 xl:border-r"
                placeholder="Task"
              />
              <div className="flex h-[84px] items-center xl:w-[330px]">
                <input
                  ref={enteredTimeRef}
                  type="time"
                  defaultValue="01:30"
                  className="h-full grow px-7 text-[28px] font-light text-gray-500 focus:outline-none"
                />
                <button type="submit" className="px-6">
                  <img src={SubmitIcon} className="h-11 w-11" alt="" />
                </button>
              </div>
            </div>
          </form>
          <List tasks={filteredTasks} onDelete={deleteTask} />
        </CardWhite>
      </section>
    </Fragment>
  );
};

export default AllTasks;
