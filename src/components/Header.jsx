import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { BiCartAlt} from 'react-icons/bi';
import logo from "../assets/logo.png"
import AppContext from "../context/AppContext";
import '../styles/components/Header.scss';


export default function Header() {
  const {state} = useContext(AppContext)
  const {cart} = state

  return (
    <div className="Header">
      <div className="Header__Logo">
        <Link to="/">
          <img src={logo} alt="logo-store" className="Header-Logo"/>
        </Link>
      </div>
      <nav className="Header__Nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Blog</Link></li>
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="Header__Checkout">
        <Link to="/checkout" className="Checkout-Wrap">
          <BiCartAlt className="Footer__Icon"/>
          {cart.length > 0 && <div className="Checkout-Alert">{cart.length}</div>}
        </Link>
      </div>
    </div>
  );
}

      // <div className="Header-checkout
        // <Link to="/checkout">
        //   <i className="fas fa-shopping-basket fa-2x" />
        // </Link>
        // {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}