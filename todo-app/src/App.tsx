import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import TodoContextProvider from "./components/TodoContextProvider";
import TodoList from "./components/TodoList";
import "./App.css";
import TodoFilter from "./components/TodoFilter";

const App: React.FC = () => {
  return (
    <TodoContextProvider>
      <div className="todoapp stack-large">
        <h1>Todo List</h1>
        <Form />
        <div className="filters btn-group stack-exception">
          <FilterButton name="All" filterType={TodoFilter.All} />
          <FilterButton name="Active" filterType={TodoFilter.Active} />
          <FilterButton name="Completed" filterType={TodoFilter.Completed} />
        </div>
        <TodoList />
      </div>
    </TodoContextProvider>
  );
};

export default App;
