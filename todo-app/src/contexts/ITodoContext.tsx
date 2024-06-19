// Interface for TodoContext
interface ITodoContext {
  formName: string;
  updateFormName: (name: string) => void;
  todoItems: [];
  updateTodoItems: (items: []) => void;
}

export default ITodoContext;
