import trashCan from "../../assets/images/trash-2.svg";
import { formatDateDisplay } from "../../utils/format";
import { tableRowClass } from "../UI/uiClasses";

const TaskItem = ({ id, date, client, task, time, onDelete }) => {
  return (
    <li className={`group flex ${tableRowClass}`}>
      <div className="shrink-0 basis-[210px] px-3">{formatDateDisplay(date)}</div>
      <div className="shrink-0 basis-[280px] px-3">{client}</div>
      <div className="min-w-0 grow px-3">{task}</div>
      <div className="shrink-0 basis-[180px] px-2.5">
        <div className="flex items-center justify-end gap-1.5">
          <span>{time}</span>
          <button
            type="button"
            onClick={() => onDelete(id)}
            className="hidden h-3.5 w-3.5 shrink-0 group-hover:flex"
            aria-label="Delete task"
          >
            <img src={trashCan} alt="" className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
