import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";
import { Task } from "../../types/types";

interface TodoListProps {
  filteredTasks: Task[];
  updateTask: (task: Task) => void;
}

const TodoList: React.FC<TodoListProps> = ({ filteredTasks, updateTask }) => {
  return (
    <ul className="todo-list">
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <TodoItem task={task} updateTask={updateTask} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
