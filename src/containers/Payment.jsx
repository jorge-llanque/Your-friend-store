import React, { useContext } from 'react';
import {PayPalButton} from 'react-paypal-button'
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';



export default function Payment() {

  const {state} = useContext(AppContext);
  const {cart} = state;

  const paypalOptions = {
    clientId: '',
    intent: 'capture',
    currency: 'USD'
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title} >
            <div className="Payment element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton 
            paypalOptions={}
            buttonStyles={}
            amount={}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => console.log(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
}
