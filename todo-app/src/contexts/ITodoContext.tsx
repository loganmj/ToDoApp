import ITodoItem from "../components/ITodoItem";

// Interface for TodoContext
interface ITodoContext {
  // Properties
  todoItems: ITodoItem[];

  // Functions
  addTodoItem: (name: string) => void;
  removeTodoItem: (itemID: string) => void;
  setItemCompleted: (itemID: string, completed: boolean) => void;
  setItemName: (itemID: string, newName: string) => void;
}

export default ITodoContext;
