import trashCan from "../../assets/images/trash-2.svg";
import { formatDateDisplay } from "../../utils/format";
import { tableRowClass } from "../UI/uiClasses";

const TaskItem = ({ id, date, client, task, time, onDelete }) => {
  return (
    <li className={`group flex ${tableRowClass}`}>
      <div className="shrink-0 basis-[270px] px-4">{formatDateDisplay(date)}</div>
      <div className="shrink-0 basis-[360px] px-4">{client}</div>
      <div className="min-w-0 grow px-4">{task}</div>
      <div className="shrink-0 basis-[330px] px-4 text-right">{time}</div>
      <button
        type="button"
        onClick={() => onDelete(id)}
        className="ml-2 hidden shrink-0 group-hover:flex"
        aria-label="Delete task"
      >
        <img src={trashCan} alt="" />
      </button>
    </li>
  );
};

export default TaskItem;
