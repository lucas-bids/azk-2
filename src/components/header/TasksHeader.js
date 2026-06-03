
import DarkMode from "../login/DarkMode";

const TasksHeader = () => {
  return (
    <header className="pt-3 flex items-end justify-between">
      <h1 className="text-6xl font-medium text-gray-700">Hello, Lucas</h1>
      <DarkMode />
    </header>
  );
};

export default TasksHeader;
