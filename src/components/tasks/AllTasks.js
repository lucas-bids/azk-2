import CardDark from "../UI/CardDark.js";
import SearchBar from "../UI/SearchBar.js";

import SubmitIcon from "../../assets/images/icons/submit.svg";
import CardWhite from "../UI/CardWhite.js";
import List from "./TasksList.js";
import { Fragment, useRef } from "react";
import { useState, useEffect } from "react";
import TasksHeader from "../header/TasksHeader.js";
import useHttp from "../../hooks/use-http.js";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);

  const renderTasks = (taskObj) => {
    const loadedTasks = [];

    for (const key in taskObj) {
      loadedTasks.unshift({
        id: key,
        date: taskObj[key].Date,
        client: taskObj[key].Client,
        task: taskObj[key].Task,
        time: taskObj[key].Time,
      });
    }
    setTasks(loadedTasks);
  };

  const { sendRequest: retrieveTasks } = useHttp();

  const refresh = retrieveTasks(
    {
      url: "https://azkii-f3cb7-default-rtdb.firebaseio.com/alltasks.json",
    },
    renderTasks
  );

  // Loads tasks
  // useEffect(() => {
  //   retrieveTasks(
  //     {
  //       url: "https://azkii-f3cb7-default-rtdb.firebaseio.com/alltasks.json",
  //     },
  //     renderTasks
  //   );
  // }, []);

  // Takes input value from task form and sends it to Firebase
  // New comment

  const enteredDateRef = useRef();
  const enteredClientRef = useRef();
  const enteredTaskRef = useRef();
  const enteredTimeRef = useRef();

  const renderNewTask = (data) => {
    const taskData = {
      id: data.name,
      date: data.Date,
      client: data.Client,
      task: data.Task,
      time: data.Time,
    };

    setTasks((tasks) => [taskData, ...tasks]);
  };

  const { sendRequest: postTask } = useHttp();

  const submitTaskHandler = async (event) => {
    event.preventDefault();

    const enteredDate = enteredDateRef.current.value;
    const enteredClient = enteredClientRef.current.value;
    const enteredTask = enteredTaskRef.current.value;
    const enteredTime = enteredTimeRef.current.value;

    const newTaskData = {
      Date: enteredDate,
      Client: enteredClient,
      Task: enteredTask,
      Time: enteredTime,
    };

    postTask(
      {
        url: "https://azkii-f3cb7-default-rtdb.firebaseio.com/alltasks.json",
        method: "POST",
        body: newTaskData,
        headers: { "Content-Type": "application.json" },
      },
      renderNewTask
    );
  };

  return (
    <Fragment>
      <TasksHeader />

      <section className="w-full mt-4">
        <CardDark backgroundType="liquid">
          <h2>This month alone</h2>
          <div className="flex mt-4 justify-between">
            <div>
              <p className=" text-6xl font-medium">56.4</p>
              <p className="mt-2">Hours input</p>
            </div>
            <div className="border border-white"></div>
            <div>
              <p className=" text-6xl font-medium">1,378.45 €</p>
              <p className="mt-2">Cash generated</p>
            </div>
            <div className="border border-white"></div>
            <div>
              <p className=" text-6xl font-medium">128</p>
              <p className="mt-2">Tasks input</p>
            </div>
          </div>
        </CardDark>
      </section>

      <section>
        <SearchBar />
        <div className="flex justify-between mt-4">
          <h2>Your tasks</h2>
          <div className="flex">
            <h2 className="mr-2">Filters:</h2>
            <form className="text-gray-400" action="">
              <input type="date" className=" bg-gray-50 w-[120px] mr-2" />
              <input type="date" className=" bg-gray-50 w-[120px] mr-2" />
              <select id="cars" name="cars" className="bg-gray-50">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </form>
          </div>
        </div>
      </section>

      <section>
        <CardWhite>
          <form
            action=""
            onSubmit={submitTaskHandler}
            className="h-[50px] flex"
          >
            <input
              ref={enteredDateRef}
              type="date"
              className="h-[50px] focus:outline-none w-1/5 rounded-l-2xl border border-gray-300 px-4"
            />
            <input
              ref={enteredClientRef}
              type="text"
              className="h-[50px] focus:outline-none w-1/5 border-y border-gray-300 px-4"
              placeholder="Client name"
            />
            <input
              ref={enteredTaskRef}
              type="text"
              className="h-[50px] focus:outline-none grow border-y border-l border-gray-300 px-4"
              placeholder="Task"
            />
            <div className="h-[50px] flex w-1/10 rounded-r-2xl border border-gray-300 pl-4">
              <input
                ref={enteredTimeRef}
                type="time"
                className="focus:outline-none h-full"
              />
              <button type="submit" className="h-full p-2">
                <img src={SubmitIcon} className="h-full" alt="" />
              </button>
            </div>
          </form>
          <List
            tasks={tasks}
            refresh={refresh}
          />
        </CardWhite>
      </section>
    </Fragment>
  );
};

export default AllTasks;
