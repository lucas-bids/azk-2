import trashCan from '../../assets/images/trash-2.svg'

const ClientItem = (props) => {
  const deleteHandler = async () => {
  await fetch(`https://azkii-f3cb7-default-rtdb.firebaseio.com/allclients/${props.id}.json`, {
      method: 'DELETE'
    });
    // Fires the retrieveTasks function on the Dashboard
    props.refresh();
  }

  return (
    <li className="flex py-2 px-4 odd:bg-gray-50 rounded text-gray-500 group">
      <div className="grow">
        <p>{props.clientName}</p>
      </div>
      <div className="w-[120px] text-right pr-6">
        <p>{props.pricehour}</p>
      </div>
      <div className="w-[50px] pr-2">
        <p>{props.currency}</p>
      </div>
      <div className="w-[180px] text-right">
        <p>{props.hoursmonth}</p>
      </div>
      <div className="hidden group-hover:flex" onClick={deleteHandler} >
        <img src={trashCan} alt=""/>
      </div>
    </li>
  );
};

export default ClientItem;
