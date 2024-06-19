import React from "react";
import TodoItem from "./components/TodoItem";

const App: React.FC = () => {
  return (
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      <TodoItem name="Eat" />
      <TodoItem name="Sleep" />
      <TodoItem name="Repeat" />
    </ul>
  );
};

export default App;
