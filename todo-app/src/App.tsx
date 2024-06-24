import React from "react";
import Form from "./components/Form";
import TodoContextProvider from "./components/TodoContextProvider";
import TodoList from "./components/TodoList";
import "./App.css";
import FilterComponent from "./components/FilterComponent";

const App: React.FC = () => {
  return (
    <TodoContextProvider>
      <div className="todoapp stack-large">
        <h1>Todo List</h1>
        <Form />
        <FilterComponent />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
};

export default App;
