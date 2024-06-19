import React from "react";
import TodoItem from "./components/TodoItem";

const App: React.FC = () => {
  return (
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      <TodoItem id="todo-0" name="Eat" completed />
      <TodoItem id="todo-1" name="Sleep" />
      <TodoItem id="todo-2" name="Repeat" />
    </ul>
  );
};

export default App;
