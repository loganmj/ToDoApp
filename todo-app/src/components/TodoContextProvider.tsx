import { ReactNode, useState } from "react";
import TodoContext from "../contexts/TodoContext";
import ITodoItem from "./ITodoItem";
import { v4 as uuidv4 } from "uuid";
import TodoFilter from "./TodoFilter";

// Provides access to the TodoContext
const TodoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // The parent todo items array
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);

  // The active todo list filter
  const [filter, setFilter] = useState<TodoFilter>(TodoFilter.All);

  // Add todo item to the list
  const addTodoItem = (name: string) => {
    const newTodoItem = { id: `${name}-${uuidv4()}`, name, completed: false };
    setTodoItems([...todoItems, newTodoItem]);
  };

  // Remove a todo item from the list
  const removeTodoItem = (itemID: string) => {
    const updatedList = todoItems.filter((item) => item.id !== itemID);
    setTodoItems(updatedList);
  };

  // Sets the completed property of an item
  const setItemCompleted = (itemID: string, isCompleted: boolean) => {
    const newArray = todoItems.map((item) => {
      if (item.id === itemID) {
        return { ...item, completed: isCompleted };
      }

      return item;
    });

    setTodoItems(newArray);
  };

  // Update todo item list with new array
  const setItemName = (itemID: string, newName: string) => {
    const newArray = todoItems.map((item) => {
      if (item.id === itemID) {
        return { ...item, name: newName };
      }

      return item;
    });

    setTodoItems(newArray);
  };

  /*

  // Prints an item list
  // This is used primarily for debuggin
  const printItems = (items: ITodoItem[]) => {
    for (const item of items) {
      console.log(
        `Item: ID = ${item.id}, Name = ${item.name}, Completed = ${item.completed}`
      );
    }
  };

  */

  return (
    <TodoContext.Provider
      value={{
        todoItems,
        filter,
        addTodoItem,
        removeTodoItem,
        setItemCompleted,
        setItemName,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
