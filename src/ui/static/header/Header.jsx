import React, { useState } from "react";
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import logoText from "../../../images/logoText.png";
function Header() {
  const [toggle, setToggle] = useState(false);

  function toggleNav() {
    setToggle(!toggle);
  }

  return (
    <header className={`header ${toggle ? "fixed" : ''}`}>
            <div className="header__container">
                <Link to="/" className="header__logo">
                    {/* <i className="fas fa-house-damage header__logo-icon" /> */}
                    <img src={logo} className="header__logo-icon" alt="Flood and Fire Solutions logo" />
                    <img src={logoText} className="header__logo-icon header__logo-iconText" alt="Flood and Fire Solutions" />
                </Link>
                <div className={`header__toggle ${toggle ? "open" : ""}`} onClick={toggleNav}><span className="header__toggle-bars"/></div>
            </div>
            <Nav toggle={toggle} toggleNav={toggleNav}></Nav>
        </header>
        
  );
}

export default Header;
