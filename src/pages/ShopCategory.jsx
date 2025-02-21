 import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import drop_down_icon from '../components/assets/dropdown_icon.png'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/item/Item'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext); 
  console.log("all_product" ,all_product);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={drop_down_icon } alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, index) => {
          if(props.category=== item.category){
            return <Item   key={index} id={item.id} 
            name={item.name} image={item.image}
             new_price={item.new_price} 
             old_price={item.old_price} />
          }else{
            return null;
          }
        } )}
      </div>
      <div className="load-more">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory