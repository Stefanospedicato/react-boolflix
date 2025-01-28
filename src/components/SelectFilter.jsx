const SelectFilter = () => {
  return (
    <div className="mx-3">
      <select className="form-select" defaultValue="Seleziona un genere">
        <option value="0">Seleziona un genere</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export default SelectFilter;
