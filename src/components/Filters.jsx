import SearchFilter from "./SearchFilter";
import SelectFilter from "./SelectFilter";

const Filters = () => {
  return (
    <div className="d-flex m-4">
      <SelectFilter />
      <SearchFilter />
    </div>
  );
};

export default Filters;
