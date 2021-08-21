import React from 'react';
import {AiFillHeart} from 'react-icons/ai'

export default function Product({ product, handleAddToCart }) {

  return (
    <div className="Products-item">
       <header className="Item__Header">
          <span className="Item__Offer">30% OFF</span>
          <AiFillHeart className="Item__Offer-Icon" onClick={handleAddToCart(product)}/>
       </header>
       <div className="Item__Image">
        <img src={product.image} alt={product.title} />
       </div>
      <div className="Product-item-info">
        <h2>{product.title}</h2>
        <span className="Item__Price">${(product.price).toFixed(2)}</span>
      </div>
    </div>
  );
}
