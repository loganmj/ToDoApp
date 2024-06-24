import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import TodoContextProvider from "./components/TodoContextProvider";
import TodoList from "./components/TodoList";
import "./App.css";

const App: React.FC = () => {
  return (
    <TodoContextProvider>
      <div className="todoapp stack-large">
        <h1>Todo List</h1>
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
