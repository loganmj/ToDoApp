import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";

// Provides access to the TodoContext
const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodoContext must be used within a TodoContextProvider");
  }

  return context;
};

export default useTodoContext;
