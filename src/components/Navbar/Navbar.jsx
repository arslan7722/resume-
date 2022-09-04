import React from "react";
import "./navbar.css";

const MenuBar = () => {
  return (
    <div className="navbar">
      <div className="all-nav">
        <div className="main-theme">Portfolio.</div>
        <div className="tag-naviagte">
          <ul className="tag">
            <li>
              <a href="#about" className="menu-tag">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-tag">
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" className="menu-tag">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-tag">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
