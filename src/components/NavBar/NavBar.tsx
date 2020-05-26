import React, { useState } from "react";
import "./NavBar.scss";
import Button from "../Button/Button";
import Menu from "../../shared/images/menu.svg";

const NavBar = () => {
  const [menuListClass, setMenuListClass] = useState("menu-list hidden");

  const toggleMenu = () => {
    if (menuListClass === "menu-list") {
      setMenuListClass("menu-list hidden");
    } else {
      setMenuListClass("menu-list");
    }
  };

  return (
    <React.Fragment>
      <nav className="main-nav">
        <div className="flex">
          <div className="logo">Shortly</div>

          <ul className="nav-links">
            <li className="link-item">Features</li>
            <li className="link-item">Pricing</li>
            <li className="link-item">Resources</li>
          </ul>
        </div>
        <ul className="right-buttons">
          <li className="link-item">Login</li>
          <li>
            <Button className="small" style={{ marginLeft: "40px" }}>
              Sign Up
            </Button>
          </li>
        </ul>
        {/* Hamburger Button */}
        <div className="menu" onClick={() => toggleMenu()}>
          <img src={Menu} alt="menu" width="32" height="32" />
        </div>
      </nav>
      {/* Menu List */}
      <div className={menuListClass}>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <hr />
        <ul>
          <li>Login</li>
          <li>
            <Button className="small" style={{ width: "90%" }}>
              Sign Up
            </Button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
