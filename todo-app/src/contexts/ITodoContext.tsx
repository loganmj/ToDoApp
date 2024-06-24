import ITodoItem from "../components/ITodoItem";

// Interface for TodoContext
interface ITodoContext {
  todoItems: ITodoItem[];
  updateTodoItems: (newArray: ITodoItem[]) => void;
  addTodoItem: (name: string) => void;
  removeTodoItem: (name: string) => void;
}

export default ITodoContext;
