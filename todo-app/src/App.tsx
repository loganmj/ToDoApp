import React from "react";
import TodoItem from "./components/TodoItem";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

const App: React.FC = () => {
  // Define the data array
  const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
  ];

  return (
    <div className="todoapp stack-large">
      <h1>TODO</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {
          // Iterate over data array to add TodoItems
          DATA.map((task) => (
            <TodoItem
              id={task.id}
              name={task.name}
              completed={task.completed}
              key={task.id}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default App;
