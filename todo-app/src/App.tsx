import React from "react";
import TodoItem from "./components/TodoItem";

const App: React.FC = () => {
  // Define the data array
  const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
  ];

  return (
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      {
        // Iterate over data array to add TodoItems
        DATA.map((task) => (
          <TodoItem id={task.id} name={task.name} completed={task.completed} />
        ))
      }
    </ul>
  );
};

export default App;
