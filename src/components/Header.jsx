import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt2} from 'react-icons/bi';
import logo from "../assets/logo.png"
import '../styles/components/Header.css';


export default function Header() {

  return (
    <div className="Header">
      <Link to="/">
        <img src={logo} alt="logo-store" className="Header-Logo"/>
      </Link>
      <div className="Header-Search">
        < BiSearchAlt2 className="Icon-Search"/>
      </div>
    </div>
  );
}

      // <div className="Header-checkout
        // <Link to="/checkout">
        //   <i className="fas fa-shopping-basket fa-2x" />
        // </Link>
        // {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}