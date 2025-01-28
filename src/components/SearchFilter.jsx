import { useState } from "react";
import { useGlobalContext } from "../context/CardsContext";

const SearchFilter = () => {
  const { handleSearch } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="search">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca..."
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="btn btn-danger" type="button" id="button-addon1">
          CERCA
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
