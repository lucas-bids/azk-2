import { AnimatePresence, motion } from "framer-motion";
import TaskItem from "./TaskItem";

const TasksList = ({ tasks, onDelete }) => {
  return (
    <motion.ul layout className="pt-3">
      <AnimatePresence initial={false}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            date={task.date}
            client={task.client}
            task={task.task}
            time={task.time}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
};

export default TasksList;
