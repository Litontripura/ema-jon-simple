import React from "react";
import "./Cart.css"

const Cart = ({cart}) => {
    
    let totalPrice = 0
    let shiping =0
    let quantity = 0
 for(const product of cart){
  if(product.quantity == 0){
    product.quantity = 1
  }
  // product.quantity = product.quantity || 1
   totalPrice = totalPrice + product.price * product.quantity
   shiping = shiping + product.shipping
   quantity = quantity + product.quantity
 }
 const tax = totalPrice*7/100
 const grandTotal = tax + totalPrice+ shiping
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items:{quantity} </p>
      <p>Total price: ${totalPrice.toFixed(2)} </p>
      <p>Total shiping: ${shiping.toFixed(2)}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <p>Grand Total: ${grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
