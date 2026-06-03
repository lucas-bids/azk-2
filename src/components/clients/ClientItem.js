import trashCan from "../../assets/images/trash-2.svg";
import { tableRowClass } from "../UI/uiClasses";

const ClientItem = ({ id, clientName, pricehour, currency, hoursmonth, onDelete }) => {
  return (
    <li className={`group flex ${tableRowClass}`}>
      <div className="min-w-0 grow px-4">{clientName}</div>
      <div className="shrink-0 basis-[210px] px-4 text-right">{pricehour}</div>
      <div className="shrink-0 basis-[140px] px-4 text-right">{currency}</div>
      <div className="shrink-0 basis-[220px] px-4">
        <div className="flex items-center justify-end gap-3">
          <span>{hoursmonth}</span>
          <button
            type="button"
            onClick={() => onDelete(id)}
            className="hidden h-6 w-6 shrink-0 group-hover:flex"
            aria-label="Delete client"
          >
            <img src={trashCan} alt="" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ClientItem;
