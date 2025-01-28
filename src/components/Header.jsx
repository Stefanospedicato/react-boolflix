import Filters from "./Filters";

const Header = () => {
  return (
    <header>
      <div className="d-flex justify-content-between container">
        <div className="logo my-2">BOOLFLIX</div>
        <Filters />
      </div>
    </header>
  );
};

export default Header;
