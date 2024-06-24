import IFilterButton from "./IFilterButton";

// A button that allows the user to filter the todo list.
const FilterButton: React.FC<IFilterButton> = ({ id, name, filterType }) => {
  return (
    <button
      id={id}
      type="button"
      className="btn toggle-btn"
      aria-pressed="true"
    >
      <span className="visually-hidden">Show </span>
      <span>{name} </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
};

export default FilterButton;
