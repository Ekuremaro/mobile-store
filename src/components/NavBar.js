import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
      {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
      Commons (Attribution 3.0 Unported); https://www.iconfinder.com/Makoto_msk
      */}
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </Link>
      <ul className="navbar-nav align-items-center"></ul>
    </nav>
  );
};

export default NavBar;
