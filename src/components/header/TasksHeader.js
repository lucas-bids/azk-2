
import DarkMode from "../login/DarkMode";

const TasksHeader = () => {
  return (
    <header className="pt-3 flex items-end justify-between">
      <h1 className="text-3xl">Hello, Lucas</h1>
      <DarkMode />
    </header>
  );
};

export default TasksHeader;
