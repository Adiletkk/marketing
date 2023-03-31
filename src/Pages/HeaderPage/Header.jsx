import React, { useState, useEffect, useRef } from 'react';
import css from "./Header.module.css";
import logo from "../../foto/Logo.png";
import planet from "../../foto/planet.png";
import search from "../../foto/iconbase.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={css.wrapper}>
      <nav className={css.left}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <NavLink to="/" className={css.home_btn}>
          <p >Home</p>
        </NavLink>

        <p>Components</p>


        <p>Documentation</p>

        <button onClick={() => setIsOpen(true)}>Pages </button>


      </nav>
      <div className={css.right}>
        <img src={search} alt="search" />
        <img src={planet} alt="planet" />
        <p>Login</p>
        <button className={css.header_btn}>Join us</button>

        {isOpen && (
          <div className={css.modal}>
            <div className={css.modal_content} ref={modalRef}>
              <div className="modal-header">
                <h3>Pages</h3>
              </div>
              <div className={css.modal_body}>
                <NavLink to='/SecondPage'>
                  <p>Pages1</p>
                </NavLink>
                <NavLink to="/CaseStudios">
                  <p>Home</p>
                </NavLink>
                <NavLink to='/thirdPage'>
                  <p>Components</p>
                </NavLink>
                <NavLink to='/MarketingBlog'>
                  <p>Documentation</p>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
          <div className={css.mob_head}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>


        <div className={css.burger}>

        </div>
          </div>


    </div>
  );
}

export default Header;