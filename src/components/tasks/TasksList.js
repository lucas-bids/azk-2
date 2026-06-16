import TaskItem from "./TaskItem";

const TasksList = ({ tasks, onDelete }) => {
  return (
    <ul className="pt-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          date={task.date}
          client={task.client}
          task={task.task}
          time={task.time}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TasksList;
