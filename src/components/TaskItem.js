import trashCan from '../assets/images/trash-2.svg'

const TaskItem = (props) => {
  return (
    <li className="flex py-2 px-4 odd:bg-gray-50 rounded text-gray-500 group">
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
      <div className=" hidden group-hover:flex">
        <img src={trashCan} alt="" />
      </div>
    </li>
  );
};

export default TaskItem;
