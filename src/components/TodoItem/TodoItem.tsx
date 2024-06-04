import { useState, useEffect } from "react";
import "./TodoItem.css";
import { Task } from "../../types/types";

interface TodoItemProps {
  task: Task;
  updateTask: (task: Task) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, updateTask }) => {
  const [isChecked, setIsChecked] = useState(task.isComplete);
  console.log(task);

  useEffect(() => {
    setIsChecked(task.isComplete);
  }, [task.isComplete]);

  const handleCheckboxChange = () => {
    const updatedTask = { ...task, isComplete: !isChecked };
    setIsChecked(!isChecked);
    updateTask(updatedTask);
  };

  return (
    <div className="todo-item__container">
      <input
        id={`checkbox-${task.id}`}
        className="todo-item__checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor={`checkbox-${task.id}`}
        className="todo-item__custom-checkbox"
      >
        {task.text}
      </label>
    </div>
  );
};

export default TodoItem;
