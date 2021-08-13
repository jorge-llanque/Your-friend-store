import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import { BiHomeAlt, BiCartAlt, BiGroup } from 'react-icons/bi'
import AppContext from "../context/AppContext"
import '../styles/components/Footer.css';


export default function Footer() {
  const {state} = useContext(AppContext)
  const {cart} = state

  return (
    <div className="Footer">
      <BiHomeAlt className="Footer__Icon"/>
      <Link to="/checkout" className="Checkout-Wrap">
        <BiCartAlt className="Footer__Icon"/>
        {cart.length > 0 && <div className="Checkout-Alert">{cart.length}</div>}
      </Link>
      <BiGroup className="Footer__Icon"/>
    </div>
  );
}
