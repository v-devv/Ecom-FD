import React from 'react'
import './Breadcum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'
const Breadcum = (props) => {
    const {product} = props
    console.log(product);
  return (
    <div className='Breadcum'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcum