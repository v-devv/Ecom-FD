import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="ProductDisplay">
      <div className="ProductDisplay-left">
        <div className="ProductDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="ProductDisplay-img">
          <img className="ProductDisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="ProductDisplay-right">
        <h2>{product.name}</h2>
        <div className="ProductDisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="ProductDisplay-right-prices">
          <div className="ProductDisplay-right-price_old">
          ₹{product.old_price}
          </div>
          <div className="ProductDisplay-right-new-price">
          ₹{product.new_price}
          </div>
        </div>
        <div className="ProductDisplay-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          debitis, praesentium, atque molestias error libero beatae, reiciendis
          eum similique.
        </div>
        <div className="ProductDisplay-right-size">
          <h1> Select Size</h1>
          <div className="ProductDisplay-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="product-display-category">
          <span>Category : </span>Women , T-shirt,Crop Top
        </p>
        <p className="product-display-category">
          <span>Tags : </span>Modren , Letest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
