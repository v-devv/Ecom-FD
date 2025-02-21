import React, { useEffect, useState } from 'react'
import './papular.css'
import Item from '../item/Item'
import { API_URL } from '../../api_link'; 
import popularProducts from '../assets/data'
const Papular = () => {
/*   const [popularProducts , setPopularProducts] = useState([]);
  useEffect(()=>{
    const popularWomen = async ()=>{
      try {
        const response = await fetch(`${API_URL}/popular-women`)
        const data = await response.json();
        setPopularProducts(data.popular_women)
        console.log(data ,"popularProducts")
        
      } catch (error) {
        console.log(error)
      }
    }
    popularWomen()
  } ,[]) */
  return (
    <div className='papular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, index) => {
          return <Item key={index} id={item.id} 
          name={item.name} image={item.image}
           new_price={item.new_price} 
           old_price={item.old_price} />
        }) }
            

      </div>
    </div>
  )
}

export default Papular