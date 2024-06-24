import ITodoItem from "../components/ITodoItem";
import TodoFilter from "../components/TodoFilter";

// Interface for TodoContext
interface ITodoContext {
  // Properties
  todoItems: ITodoItem[];
  filter: TodoFilter;

  // Functions
  addTodoItem: (name: string) => void;
  removeTodoItem: (itemID: string) => void;
  setItemCompleted: (itemID: string, completed: boolean) => void;
  setItemName: (itemID: string, newName: string) => void;
  setFilter: (newFilter: TodoFilter) => void;
}

export default ITodoContext;
