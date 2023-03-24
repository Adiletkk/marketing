import React from "react";
import css from "./Header.module.css";
import logo from "../../foto/Logo.png";
import planet from "../../foto/planet.png";
import search from "../../foto/iconbase.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={css.wrapper}>
      <nav className={css.left}>
        <NavLink to="/">   <img src={logo} alt="logo" /></NavLink>
        <p>Home</p>
        <select className={css.header_rout}>
          <option>Pages</option>
          <option>Pages1</option>
          <option>Pages3</option>
        </select>
        <NavLink to='/thirdPage'> <p> Components</p></NavLink>
        <p> Documentation</p>
        <NavLink to='/SecondPage'> Pages1 </NavLink> 
      </nav>
      <div className={css.right}>
        <img src={search} alt="search" />
        <img src={planet} alt="planet" />
        <div className={css.header_elem}></div>
        <p>Login</p>
        <button className={css.header_btn}>Join us</button>
      </div>
    </div>
  );
}

export default Header;
