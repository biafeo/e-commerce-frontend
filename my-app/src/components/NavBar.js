import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/clothing" className="nav-link">
        Clothing
      </NavLink>
      <NavLink to="/electronics" className="nav-link">
        Electronics
      </NavLink>
      <NavLink to="/jewelery" className="nav-link">
        Jewelery
      </NavLink>
      <NavLink to="/cart" className="nav-link">
        Cart
      </NavLink>
    </nav>
  );
}

export default NavBar;
