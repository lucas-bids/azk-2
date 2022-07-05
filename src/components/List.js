import TaskItem from "./TaskItem";

const List = (props) => {
  const tasks = props.tasks

  const tasksList = tasks.map((task) => (
    <TaskItem key={task.id} id={task.id} date={task.date} client={task.client} task={task.task} time={task.time} />
  ));

  return (
    <ul className="pt-3">
      {tasksList}
    </ul>
  );
};

export default List;