import { useState } from "react";

const Form: React.FC = () => {
  // A name property for the form
  const [name, setName] = useState("");

  // A method to handle input data changes
  const handleInputChanged = (event: any) => {
    setName(event.target.value);
  };

  // A method to handle the submit button click
  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert("Hello, world!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleInputChanged}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};

export default Form;
