import React from "react";
import navstyle from "./Nav.module.css"

function Nav() {
  return (
    <nav className={navstyle.navigation}>
      <div className="logo">
        <img src="./src/assets/logo.png" alt="" />
      </div>
      <ul className={navstyle.menu}>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </nav>
  ); 
}

export default Nav;
