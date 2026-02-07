import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-logo" to="/">Naksh</Link>

      <div className="navbar-links">
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default NavBar;
