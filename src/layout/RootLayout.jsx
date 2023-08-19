import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import closeIcon from "../assets/shared/mobile/close.svg";
import hamburgerIcon from "../assets/shared/mobile/menu.svg";

const RootLayout = () => {
  const handleNavToggle = () => {
    const primaryNav = document.querySelector(".primary-navigation");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const closeIcon = document.querySelector(".close-icon");

    primaryNav.toggleAttribute("data-visible");
    hamburgerIcon.classList.toggle("opened");
    closeIcon.classList.toggle("opened");
  };
  return (
    <div>
      <header className="grid container">
        <Link to="">
          <img src={logo} alt="" className="logo-icon container" />
        </Link>
        <button
          className="mobile-nav-toggle btn container"
          onClick={handleNavToggle}
        >
          <img src={closeIcon} alt="" className="close-icon opened" />
          <img src={hamburgerIcon} alt="" className="hamburger-icon " />
        </button>
        <nav className="primary-navigation flex bg-white">
          <ul className="menu flex fw-bold ls-200">
            <li className="container hvr-underline">
              <Link to="stories" onClick={handleNavToggle}>
                STORIES
              </Link>
            </li>
            <li className="container hvr-underline">
              <Link to="features" onClick={handleNavToggle}>
                FEATURES
              </Link>
            </li>
            <li className="container hvr-underline">
              <Link to="pricing" onClick={handleNavToggle}>
                PRICING
              </Link>
            </li>
          </ul>
          <button className="btn1">GET AN INVITE</button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
