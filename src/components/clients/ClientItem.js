import trashCan from "../../assets/images/trash-2.svg";

const ClientItem = (props) => {
  return (
    <li className="group flex rounded-2xl px-4 py-3 text-xl text-gray-500 odd:bg-gray-50">
      <div className="min-w-0 grow px-4">{props.clientName}</div>
      <div className="shrink-0 basis-[210px] px-4 text-right">{props.pricehour}</div>
      <div className="shrink-0 basis-[140px] px-4 text-right">{props.currency}</div>
      <div className="shrink-0 basis-[220px] px-4">
        <div className="flex items-center justify-end gap-3">
          <span>{props.hoursmonth}</span>
          <button
            type="button"
            onClick={() => props.onDelete(props.id)}
            className="hidden h-6 w-6 shrink-0 group-hover:flex"
          >
            <img src={trashCan} alt="" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ClientItem;
