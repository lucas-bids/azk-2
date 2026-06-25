import { motion } from "framer-motion";
import trashCan from "../../assets/images/trash-2.svg";
import { tableRowClass } from "../UI/uiClasses";

const ClientItem = ({ id, clientName, pricehour, currency, hoursmonth, onDelete }) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={`group flex ${tableRowClass}`}
    >
      <div className="min-w-0 grow px-2.5">{clientName}</div>
      <div className="shrink-0 basis-[180px] px-2.5 text-right">{pricehour}</div>
      <div className="shrink-0 basis-[120px] px-2.5 text-right">{currency}</div>
      <div className="shrink-0 basis-[180px] px-2.5">
        <div className="flex items-center justify-end gap-1.5">
          <span>{hoursmonth}</span>
          <button
            type="button"
            onClick={() => onDelete(id)}
            className="hidden h-3.5 w-3.5 shrink-0 group-hover:flex"
            aria-label="Delete client"
          >
            <img src={trashCan} alt="" className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.li>
  );
};

export default ClientItem;
