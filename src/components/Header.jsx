const Header = () => {
  return (
    <header>
      <div className="d-flex justify-content-between m-3">
        <div className="logo">LOGO</div>
        <div className="search">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Cerca..."
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
            >
              CERCA
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
