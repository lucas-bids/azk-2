const TaskItem = (props) => {
  return (
    <li className="flex py-2 px-4 odd:bg-gray-50 rounded text-gray-500">
      <div className="w-1/5">
        <p>{props.date}</p>
      </div>
      <div className="w-1/5">
        <p>{props.client}</p>
      </div>
      <div className="grow">
        <p>{props.task}</p>
      </div>
      <div className="w-1/10">
        <p>{props.time}</p>
      </div>
    </li>
  );
};

export default TaskItem;
