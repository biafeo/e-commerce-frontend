import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState, useEffect } from "react";

function NavBar({ cartCount }) {
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
        Cart ({cartCount})
      </NavLink>
    </nav>
  );
}

export default NavBar;
