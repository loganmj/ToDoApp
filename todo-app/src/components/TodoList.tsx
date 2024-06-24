import useTodoContext from "../hooks/UseTodoContext";
import ITodoItem from "./ITodoItem";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";

// The parent list of todo items.
const TodoList: React.FC = () => {
  // Retrieve TodoContext properties
  const { todoItems, filter } = useTodoContext();

  // Define filter functions
  const filterAll = (): boolean => true;
  const filterActive = (item: ITodoItem): boolean => !item.completed;
  const filterCompleted = (item: ITodoItem): boolean => item.completed;

  return (
    <>
      <h2 id="list-heading">
        {todoItems.length} {todoItems.length === 1 ? "task" : "tasks"} remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {
          // Iterate over context array to add TodoItems
          todoItems
            .filter((item) => {
              switch (filter) {
                case TodoFilter.All:
                  return filterAll();
                case TodoFilter.Active:
                  return filterActive(item);
                case TodoFilter.Completed:
                  return filterCompleted(item);
                default:
                  return true; // No filter applied
              }
            })
            .map((item) => (
              <TodoItem
                id={item.id}
                name={item.name}
                completed={item.completed}
                key={item.id}
              />
            ))
        }
      </ul>
    </>
  );
};

export default TodoList;
