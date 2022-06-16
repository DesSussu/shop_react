import React from "react";

import home from "../../assets/img/home.svg";
import { Link } from "react-router-dom";
import CartWidget from "../../../src/components/CartWidget/CartWidget";
import "../NavBar/Navbar.css";

function Navbar() {
  return (
    <div className="menu">
      <Link to="/">
        <img src={home} />
      </Link>
      <ul>
        <Link to="/product">
          <li>SHOP</li>
        </Link>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>FAQs</li>
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
}

export default Navbar;
