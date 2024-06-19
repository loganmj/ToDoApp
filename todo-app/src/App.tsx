import React from "react";
import TodoItem from "./components/TodoItem";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import TodoContextProvider from "./components/TodoContextProvider";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  // Define the data array
  const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
  ];

  return (
    <TodoContextProvider>
      <div className="todoapp stack-large">
        <h1>TODO</h1>
        <Form />
        <div className="filters btn-group stack-exception">
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </div>
        <TodoList />
      </div>
    </TodoContextProvider>
  );
};

export default App;
