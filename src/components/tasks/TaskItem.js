import trashCan from "../../assets/images/trash-2.svg";
import { formatDateDisplay } from "../../utils/format";

const TaskItem = (props) => {
  return (
    <li className="group flex rounded-2xl px-4 py-3 text-xl text-gray-500 odd:bg-gray-50">
      <div className="shrink-0 basis-[270px] px-4">{formatDateDisplay(props.date)}</div>
      <div className="shrink-0 basis-[360px] px-4">{props.client}</div>
      <div className="min-w-0 grow px-4">{props.task}</div>
      <div className="shrink-0 basis-[330px] px-4 text-right">{props.time}</div>
      <button
        type="button"
        onClick={() => props.onDelete(props.id)}
        className="ml-2 hidden shrink-0 group-hover:flex"
      >
        <img src={trashCan} alt="" />
      </button>
    </li>
  );
};

export default TaskItem;
