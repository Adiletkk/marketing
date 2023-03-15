import React from "react";
import css from "./Header.module.css";
import logo from "../../foto/Logo.png";
import planet from "../../foto/planet.png";
import search from "../../foto/iconbase.png";

function Header() {
  return (
    <div className={css.wrapper}>
      <div className={css.left}>
        <img src={logo} alt="logo" />
        <p>Home</p>
        <div>Pages</div>
        <p> Components</p>
        <p> Documentation</p>
      </div>
      <div className={css.right}>
        <img src={search} alt="search" />
        <img src={planet} alt="planet" />
        <p>Login</p>
        <button id={css.blue}>Join us</button>
      </div>
    </div>
  );
}

export default Header;
