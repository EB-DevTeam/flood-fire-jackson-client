import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

function Nav({ toggle, toggleNav }) {
  return (
    <nav className={`nav ${toggle ? "open" : ""}`}>
      <ul className="nav__list">
        
        <li className="nav__item">
          <NavLink
            exact
            to="/"
            className="nav__link"
            activeClassName="selected"
            onClick={toggleNav}
          >
            Home
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            exact
            to="/water"
            className="nav__link"
            activeClassName="selected"
            onClick={toggleNav}
          >
            Water
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            exact
            to="/fire"
            className="nav__link"
            activeClassName="selected"
            onClick={toggleNav}
          >
            Fire
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            exact
            to="/mold"
            className="nav__link"
            activeClassName="selected"
            onClick={toggleNav}
          >
            Mold
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            exact
            to="/natural-disaster"
            className="nav__link"
            activeClassName="selected"
            onClick={toggleNav}
          >
            Natural Disaster
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            exact
            to="/insurance"
            className="nav__link"
            activeClassName="selected"
            onClick={toggleNav}
          >
            Insurance
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            exact
            to="/contact"
            className="nav__link"
            activeClassName="selected"
            onClick={toggleNav}
          >
            Contact Us
          </NavLink>
        </li>


        {/* <li >
          <div className="nav__div-callCont">
          <a href="tel:2085217347" className="nav__a-callButton">
            (208) 521-9741
       
          <span>
          Available 24/7
          </span>   </a>
          </div>
        </li> */}
        
      </ul>
    </nav>
  );
}

export default Nav;
