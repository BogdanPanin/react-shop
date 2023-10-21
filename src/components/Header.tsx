import { Link } from "react-router-dom";
import "../style/header.scss";
const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <h1 className="header__logo">REACT-SHOP</h1>
      </Link>
      <div className="header__menu">
        <Link to="/">
          <p className="header__item">Home</p>
        </Link>
        <Link to="/cart">
          <p className="header__item">Cart</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
