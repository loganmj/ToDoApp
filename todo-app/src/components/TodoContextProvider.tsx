import { ReactNode, useState } from "react";
import TodoContext from "../contexts/TodoContext";

// Provides access to the TodoContext
const TodoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // formName context property
  const [formName, setFormName] = useState<string>("");

  // todoItems context property
  const [todoItems, setTodoItems] = useState<[]>([]);

  // Update form name
  const updateFormName = (name: string) => {
    setFormName(name);
  };

  // Update todo items
  const updateTodoItems = (items: []) => {
    setTodoItems(items);
  };

  return (
    <TodoContext.Provider
      value={{ formName, updateFormName, todoItems, updateTodoItems }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
