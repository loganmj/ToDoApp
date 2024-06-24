import useTodoContext from "../hooks/UseTodoContext";
import IFilterButton from "./IFilterButton";

// A button that allows the user to filter the todo list.
const FilterButton: React.FC<IFilterButton> = ({ name, filterType }) => {
  // Get context
  const { setFilter } = useTodoContext();

  // Handles the button press
  const handleButtonClick = () => {
    setFilter(filterType);
  };

  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed="true"
      onClick={handleButtonClick}
    >
      <span className="visually-hidden">Show </span>
      <span>{name} </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
};

export default FilterButton;
