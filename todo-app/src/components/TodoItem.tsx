import { useState } from "react";
import useTodoContext from "../hooks/UseTodoContext";
import ITodoItem from "./ITodoItem";

const TodoItem: React.FC<ITodoItem> = ({ id, name, completed }) => {
  // Retrieve TodoContext
  const { setItemCompleted, setItemName, removeTodoItem } = useTodoContext();

  // This field determines if the task is being edited.
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // This field is used when editing the task name
  const [editedName, setEditedName] = useState<string>(name);

  // Handles the "editing name" textbox change
  const handleEditNameTextChange = (e: any) => {
    setEditedName(e.target.value);
  };

  // Handles the cancel button being clicked
  const handleCancelButtonClicked = () => {
    setIsEditing(false);
  };

  // Handles form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setItemName(id, editedName);
    setEditedName("");
    setIsEditing(false);
  };

  // Handles the "Completed" checkbox value changing
  const handleCompletedCheckboxChanged = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setItemCompleted(id, event.target.checked);
  };

  // Handles the edit button being clicked
  const handleEditButtonClicked = () => {
    setIsEditing(true);
  };

  // Handles the delete button being clicked
  const handleDeleteButtonClick = () => {
    removeTodoItem(name);
  };

  // Define editing state template
  const EDITING_TEMPLATE = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>
          New name for {name}
        </label>
        <input
          id={id}
          className="todo-text"
          type="text"
          value={editedName}
          onChange={handleEditNameTextChange}
        />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel">
          Cancel{" "}
          <span className="visually-hidden" onClick={handleCancelButtonClicked}>
            renaming {name}
          </span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save <span className="visually-hidden">new name for {name}</span>
        </button>
      </div>
    </form>
  );

  // Define view state template
  const VIEW_TEMPLATE = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={handleCompletedCheckboxChanged}
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={handleEditButtonClicked}>
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
    </div>
  );

  return (
    <li className="todo">{isEditing ? EDITING_TEMPLATE : VIEW_TEMPLATE}</li>
  );
};

export default TodoItem;
