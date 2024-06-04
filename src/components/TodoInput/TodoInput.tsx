import { useState } from "react";
import "./TodoInput.css";
import { Task } from "../../types/types";

interface TodoInputProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      const newTask = { id: Date.now(), text: task, isComplete: false };
      setTasks([...tasks, newTask]);
      localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="todo-input">
      <input
        className="todo-input__input"
        type="text"
        id="taskInput"
        value={task}
        onKeyDown={handleKeyPress}
        onChange={handleInputChange}
        placeholder="введите новую задачу"
        required
      />
      <button
        className={`todo-input__submit-button ${
          !task ? "todo-input__submit-button_disabled" : ""
        }`}
        id="submitButton"
        type="submit"
        onClick={handleAddTask}
        aria-label="Добавить задачу"
      />
    </div>
  );
};

export default TodoInput;
