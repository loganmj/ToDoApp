import useTodoContext from "../hooks/UseTodoContext";
import FilterButton from "./FilterButton";
import TodoFilter from "./TodoFilter";

const FilterComponent: React.FC = () => {
  // Get context
  const { filter } = useTodoContext();

  return (
    <>
      <div>
        <label className="filter-label">
          {(() => {
            switch (filter) {
              case TodoFilter.All:
                return "Filtering By: All Tasks";
              case TodoFilter.Active:
                return "Filtering By: Active Tasks";
              case TodoFilter.Completed:
                return "Filtering By: Completed Tasks";
              default:
                return "Unknown Filter";
            }
          })()}
        </label>
      </div>
      <div className="filters btn-group stack-exception">
        <FilterButton name="All" filterType={TodoFilter.All} />
        <FilterButton name="Active" filterType={TodoFilter.Active} />
        <FilterButton name="Completed" filterType={TodoFilter.Completed} />
      </div>
    </>
  );
};
export default FilterComponent;
