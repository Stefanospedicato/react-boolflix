import Filters from "./Filters";

const Header = () => {
  return (
    <header>
      <div className="d-flex justify-content-between">
        <div className="logo">LOGO</div>
        <Filters/>
      </div>
    </header>
  );
};

export default Header;
