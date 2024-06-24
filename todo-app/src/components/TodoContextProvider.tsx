import { ReactNode, useState } from "react";
import TodoContext from "../contexts/TodoContext";
import ITodoItem from "./ITodoItem";
import { v4 as uuidv4 } from "uuid";

// Provides access to the TodoContext
const TodoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // todoItems context property
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);

  // Update todo item list with new array
  const updateTodoItems = (newArray: ITodoItem[]) => {
    // Debug
    for (const task of newArray) {
      console.log(
        `Updated task: ID = ${task.id}, Name = ${task.name}, Completed = ${task.completed}`
      );
    }

    setTodoItems(newArray);
  };

  // Add todo item to the list
  const addTodoItem = (name: string) => {
    const newTodoItem = { id: `${name}-${uuidv4()}`, name, completed: false };
    setTodoItems([...todoItems, newTodoItem]);
  };

  // Remove a todo item from the list
  const removeTodoItem = (name: string) => {
    const updatedList = todoItems.filter((item) => item.name !== name);
    setTodoItems(updatedList);
  };

  return (
    <TodoContext.Provider
      value={{ todoItems, updateTodoItems, addTodoItem, removeTodoItem }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
