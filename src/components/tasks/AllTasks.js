import { useMemo, useRef, useState } from "react";
import CardDark from "../UI/CardDark";
import SearchBar from "../UI/SearchBar";
import CardWhite from "../UI/CardWhite";
import TasksList from "./TasksList";
import PageHeader from "../header/PageHeader";
import { useAppData } from "../../context/AppDataContext";
import FormBar, { FormBarSegment } from "../UI/FormBar";
import TextField from "../UI/TextField";
import SelectField from "../UI/SelectField";
import SectionHeader from "../UI/SectionHeader";
import IconSubmitButton from "../UI/IconSubmitButton";
import { mutedHeadingClass } from "../UI/uiClasses";

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
    <>
      <PageHeader title="Hello, Lucas" size="large" />

      <section className="mt-4 w-full">
        <CardDark variant="liquid">
          <h2 className="text-2xl font-medium">This month alone:</h2>
          <div className="mt-8 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-7xl font-medium">{dashboardSummary.hoursInput}</p>
              <p className="mt-4 text-2xl">Hours input</p>
            </div>
            <div className="hidden h-32 border border-white xl:block"></div>
            <div>
              <p className="text-7xl font-medium">
                {dashboardSummary.cashEarned} {dashboardSummary.currency}
              </p>
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
        <SectionHeader
          title="Your tasks"
          actions={
            <div className="flex flex-wrap items-center gap-3 text-2xl text-gray-400">
              <h2 className={mutedHeadingClass}>Filters:</h2>
              <TextField
                variant="filter"
                type="date"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
              />
              <span>-</span>
              <TextField
                variant="filter"
                type="date"
                value={endDate}
                onChange={(event) => setEndDate(event.target.value)}
              />
              <SelectField
                variant="filter"
                value={selectedClient}
                onChange={(event) => setSelectedClient(event.target.value)}
              >
                <option value="">Client</option>
                {clients.map((client) => (
                  <option key={client.id} value={client.client}>
                    {client.client}
                  </option>
                ))}
              </SelectField>
            </div>
          }
        />
      </section>

      <section>
        <CardWhite>
          <form onSubmit={submitTaskHandler}>
            <FormBar>
              <FormBarSegment widthClass="xl:w-[270px]">
                <TextField
                  ref={enteredDateRef}
                  variant="bar"
                  type="date"
                  defaultValue="2022-12-13"
                />
              </FormBarSegment>
              <FormBarSegment widthClass="xl:w-[360px]">
                <TextField
                  ref={enteredClientRef}
                  variant="bar"
                  type="text"
                  list="task-client-options"
                  defaultValue={clients[0]?.client || ""}
                  placeholder="Client"
                />
              </FormBarSegment>
              <datalist id="task-client-options">
                {clients.map((client) => (
                  <option key={client.id} value={client.client} />
                ))}
              </datalist>
              <FormBarSegment className="grow">
                <TextField
                  ref={enteredTaskRef}
                  variant="bar"
                  type="text"
                  placeholder="Task"
                />
              </FormBarSegment>
              <FormBarSegment widthClass="xl:w-[330px]" bordered={false}>
                <TextField
                  ref={enteredTimeRef}
                  variant="bar"
                  type="time"
                  defaultValue="01:30"
                />
                <IconSubmitButton />
              </FormBarSegment>
            </FormBar>
          </form>
          <TasksList tasks={filteredTasks} onDelete={deleteTask} />
        </CardWhite>
      </section>
    </>
  );
};

export default AllTasks;
