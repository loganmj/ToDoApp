import { createContext } from "react";
import ITodoContext from "./ITodoContext";

// Implements the ITodoContext interface.
const TodoContext = createContext<ITodoContext | undefined>(undefined);

export default TodoContext;
