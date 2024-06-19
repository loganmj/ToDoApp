import { ReactNode, useState } from "react";
import TodoContext from "../contexts/TodoContext";
import ITodoItem from "./ITodoItem";

// Provides access to the TodoContext
const TodoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // todoItems context property
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);

  // Add todo item
  const addTodoItem = (name: string) => {
    const newTodoItem = { id: "id", name, completed: false };
    setTodoItems([...todoItems, newTodoItem]);
  };

  const removeTodoItem = (name: string) => {
    alert(name);
  };

  return (
    <TodoContext.Provider value={{ todoItems, addTodoItem, removeTodoItem }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
