import { useState } from "react";
import { useGlobalContext } from "../context/CardsContext";

const SearchFilter = () => {
  const { fetchMovies, fetchSeries } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    fetchMovies(query);
    fetchSeries(query);
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
      </div>
    </div>
  );
};

export default SearchFilter;
