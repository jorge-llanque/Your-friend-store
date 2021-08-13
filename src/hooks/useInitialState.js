import { useEffect, useState } from 'react';
import initialState from '../initialState';
import getProducts from '../services/getProducts'

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    getProducts().then( result =>{
      setProducts(result)
      console.log(result)
    })
  },[])
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }

  return {
    addToCart,
    removeFromCart,
    state,
    addToBuyer,
    addNewOrder,
  };
};

export default useInitialState;
