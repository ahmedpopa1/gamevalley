/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import logo from "./../../Assets/logo.png";
import './style.css';
import SearchFilter from "../Search/SearchFilter";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>

      <div className="sear">
        <SearchFilter />
      </div>

      <div className={`navbar-links-container ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={handleCloseMenu}>Home</Link>
        <Link to="/signup" onClick={handleCloseMenu}>Sign Up</Link>
        <Link to="/signin" onClick={handleCloseMenu}>Log in</Link>
        <Link to="/itemlist" onClick={handleCloseMenu}>
          <button className="primary-button">Play now</button>
        </Link>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={handleMenuToggle} />
      </div>
    </nav>
  );
};

export default Navbar;
