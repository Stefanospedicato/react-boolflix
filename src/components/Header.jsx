import Filters from "./Filters";

const Header = () => {
  return (
    <header>
      <div className="d-flex justify-content-between container">
        <div className="logo my-4">LOGO</div>
        <Filters />
      </div>
    </header>
  );
};

export default Header;
