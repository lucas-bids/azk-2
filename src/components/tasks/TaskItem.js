import trashCan from "../../assets/images/trash-2.svg";
import { formatDateDisplay } from "../../utils/format";

const TaskItem = (props) => {
  return (
    <li className="group flex rounded-2xl px-4 py-3 text-xl text-gray-500 odd:bg-gray-50">
      <div className="w-1/5">{formatDateDisplay(props.date)}</div>
      <div className="w-1/5">{props.client}</div>
      <div className="grow">{props.task}</div>
      <div className="w-[120px] text-right">{props.time}</div>
      <button
        type="button"
        onClick={() => props.onDelete(props.id)}
        className="ml-4 hidden group-hover:flex"
      >
        <img src={trashCan} alt="" />
      </button>
    </li>
  );
};

export default TaskItem;
