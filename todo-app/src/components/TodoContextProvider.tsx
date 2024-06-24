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

  // Sets the completed property of an item
  const setItemCompleted = (itemID: string, isCompleted: boolean) => {
    const newArray = todoItems.map((item) => {
      if (item.id === itemID) {
        return { ...item, completed: isCompleted };
      }

      return item;
    });

    // DEBUG
    printItems(newArray);

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

    // DEBUG
    printItems(newArray);

    setTodoItems(newArray);
  };

  // Prints an item list
  // This is used primarily for debuggin
  const printItems = (items: ITodoItem[]) => {
    for (const item of items) {
      console.log(
        `Item: ID = ${item.id}, Name = ${item.name}, Completed = ${item.completed}`
      );
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todoItems,
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
