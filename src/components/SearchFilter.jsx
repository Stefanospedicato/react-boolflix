const SearchFilter = () => {
  return (
    <div className="search">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca..."
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        <button className="btn btn-danger" type="button" id="button-addon1">
          CERCA
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
