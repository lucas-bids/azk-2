import trashCan from "../../assets/images/trash-2.svg";

const ClientItem = (props) => {
  return (
    <li className="group flex rounded-2xl px-4 py-3 text-xl text-gray-500 odd:bg-gray-50">
      <div className="grow">{props.clientName}</div>
      <div className="w-[180px] text-right pr-6">{props.pricehour}</div>
      <div className="w-[120px]">{props.currency}</div>
      <div className="w-[180px] text-right">{props.hoursmonth}</div>
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

export default ClientItem;
