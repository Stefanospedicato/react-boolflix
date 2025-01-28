const SelectFilter = () => {
  return (
    <div className="mx-3">
      <select className="form-select" aria-label="Default select example">
        <option selected>Seleziona un genere</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export default SelectFilter;
