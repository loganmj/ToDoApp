import useTodoContext from "../hooks/UseTodoContext";
import ITodoItem from "./ITodoItem";

const TodoItem: React.FC<ITodoItem> = ({ id, name, completed }) => {
  // Retrieve TodoContext
  const { removeTodoItem } = useTodoContext();

  // Handles the delete button being clicked
  const handleDeleteButtonClick = () => {
    removeTodoItem(name);
  };

  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id={id} type="checkbox" defaultChecked={completed} />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={handleDeleteButtonClick}
        >
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
