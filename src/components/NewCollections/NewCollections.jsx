import React, { useEffect  , useState} from 'react'
import './NewCollections.css'
import Item from '../item/Item'
import { API_URL } from '../../api_link';
import new_collection from '../assets/new_collections'

const NewCollections = () => {
/*   const [new_collection , setNew_Collection] =useState([]);
  console.log(new_collection)

  useEffect(()=>{
    const newCollection = async ()=>{
      try{
        const response = await fetch(`${API_URL}/newcollection`);
        const data = await response.json();
        setNew_Collection(data.newcollection );
      }catch{
        console.error('Error fetching products:', error);
      }
      
    }
    newCollection();
  } ,[]); */
  return (
    <div className='new-collections' >
        <h1> NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item, index) => {
                return <Item  key={index} id={item.id} 
                name={item.name} image={item.image}
                 new_price={item.new_price} 
                 old_price={item.old_price}  />
            })}
        </div>
    </div>
  )
}

export default NewCollections