import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
const CartItems = () => {
  const {all_product , cartItems ,removeFromCart, getTotelCartAmount} = useContext(ShopContext);
  console.log("Cart Page" ,cartItems)
  return (
    <div className="CartItems">
      <div className="CartItems-format-main">
        <p>Product</p>
        <p>Titile</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if(cartItems[e.id] > 0) {
          return (
            <div>
              <div className="CartItems-format CartItems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>₹{e.new_price} </p>
                <button className="CartItems-quantity">{cartItems[e.id]} </button>
                <p>₹{e.new_price*cartItems[e.id]} </p>
                <img
                className="carticon-remove-icon"
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
                <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-totel">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-totel-item">
              <p>Subtotal</p>
              <p>{getTotelCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-totel-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-totel-item">
              <h3>Total</h3>
              <h3>{getTotelCartAmount()} </h3>
            </div>

          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <h4>Have a promo code?</h4>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
