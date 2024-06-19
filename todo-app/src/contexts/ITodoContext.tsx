// Interface for TodoContext
interface ITodoContext {
  todoItems: [];
  addTodoItem: (name: string) => void;
  removeTodoItem: (name: string) => void;
}

export default ITodoContext;
