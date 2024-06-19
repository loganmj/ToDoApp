import useTodoContext from "../hooks/UseTodoContext";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

const TodoList: React.FC = () => {
  // Retrieve TodoContext properties
  const { todoItems } = useTodoContext();

  return (
    <>
      <h2 id="list-heading">{todoItems.length} tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {
          // Iterate over data array to add TodoItems
          todoItems.map((item) => (
            <TodoItem
              id={item.id}
              name={item.name}
              completed={item.completed}
              key={uuidv4()}
            />
          ))
        }
      </ul>
    </>
  );
};
export default TodoList;
