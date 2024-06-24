import TodoFilter from "./TodoFilter";

// Interface for a FilterButton component
interface IFilterButton {
  id: string;
  name: string;
  filterType: TodoFilter;
}

export default IFilterButton;
