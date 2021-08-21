import React from 'react';
import {AiFillHeart} from 'react-icons/ai'

export default function Product({ product, handleAddToCart }) {

  return (
    <div className="Products-item">
       <header className="Item__Header">
          <div className="Item__Offer">30% OFF</div>
          <AiFillHeart className="Item__Offer-Icon" onClick={handleAddToCart(product)}/>
       </header>
       <div className="Item__Image">
        <img src={product.image} alt={product.title} />
       </div>
      <div className="Product-item-info">
        <div className="Product-item-info-rating">rating</div>
        <h2>{product.title}</h2>  
        <div className="Product-item-info-detail">
          <button type="button">Call tu action</button>
          <span className="Item__Price">${(product.price).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
