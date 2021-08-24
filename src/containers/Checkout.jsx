/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.scss';

export default function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  
  const cartReformated = []

  cart.forEach((elem) => {
      if( !cartReformated.some(item => item.id === elem.id)){
          const repetition = cart.filter((data) => elem.id === data.id)
          elem.cantity = repetition.length
          cartReformated.push(elem)
      }
  });

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cartReformated.length > 0 ? <h3>My Cart</h3> : <h3>No orders...</h3>}
        {cartReformated.map((item) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <div className="Checkout-Image">
                <img src={item.image} alt="checkoutimage" />
              </div>
              <div className="Checkout-Info">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
                <span> cantity {item.cantity}</span>
              </div>
            </div>
            <button className="Item__Remove-Icon" type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>

      {cartReformated.length > 0 && (
        <div className="Checkout-sidebar">
          <div className="Checkout__TotalPrice">
            <span>Total</span>
            <span>${handleSumTotal()}</span>
          </div>
          <Link to="/checkout/information">
            <button type="button">Buy Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}
