import trashCan from '../../assets/images/trash-2.svg'

const TaskItem = (props) => {
  const deleteHandler = async () => {
  await fetch(`https://azkii-f3cb7-default-rtdb.firebaseio.com/alltasks/${props.id}.json`, {
      method: 'DELETE'
    });
    // Fires the retrieveTasks function on the Dashboard
    props.refresh();
  }

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
      <div className="hidden group-hover:flex" onClick={deleteHandler} >
        <img src={trashCan} alt=""/>
      </div>
    </li>
  );
};

export default TaskItem;
