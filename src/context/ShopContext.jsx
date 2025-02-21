import React , {createContext, useEffect, useState} from "react";
import { API_URL } from "../api_link";
import all_product from '../components/assets/all_product'


export const ShopContext = createContext(null);
const getDefaultCart =()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    

    
    const [cartItems , setCartItems] =useState(getDefaultCart());

    const addToCart = (itemID)=>{
        setCartItems((prevCart) => ({...prevCart , [itemID]:prevCart[itemID]+1}));
        console.log("cartItems" ,cartItems);
    }

    const removeFromCart = (itemID)=>{
        setCartItems((prevCart) => ({...prevCart , [itemID]:prevCart[itemID]-1}));
    
    }

    const getTotelCartAmount =()=>{
        let totalAmount = 0;
        for(const i in cartItems){
            if(cartItems[i]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(i));
                totalAmount+= itemInfo.new_price* cartItems[i];
            }
        }
        return totalAmount;
    }
    const getTotelCartItems = ()=>{
        let totalItems = 0;
        for(const i in cartItems){
            if(cartItems[i]>0){
                totalItems += cartItems[i];
            }
        }
        return totalItems;
    }
    const contextValue ={all_product , cartItems ,addToCart ,removeFromCart ,getTotelCartAmount ,getTotelCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider> 
    )

/*     const [all_product , setAll_Product] = useState([]);

    const [cartItems , setCartItems] =useState(getDefaultCart());

    useEffect(() => {
        fetch(`${API_URL}/allproducts`)
            .then(response => response.json())
            .then(data => setAll_Product(data.products));
    
        if (localStorage.getItem('auth-token')) {
            fetch(`${API_URL}/get-cart-data`, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: "", // Note: An empty body is unusual for a POST request.
            })
            .then(response => response.json()) // Fixed the syntax error here
            .then(data => {setCartItems(data)
                console.log("data in fetchimng cart" , data)
            }); // Properly nested
        }
    }, []);
    
    
    
    
    const addToCart = (itemID)=>{
        setCartItems((prevCart) => ({...prevCart , [itemID]:prevCart[itemID]+1}));
        console.log(cartItems);
        if(localStorage.getItem('auth-token')){
            fetch(`${API_URL}/add-to-cart` ,{
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"itemID" :itemID})
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }
    }
    const removeFromCart = (itemID)=>{
        setCartItems((prevCart) => ({...prevCart , [itemID]:prevCart[itemID]-1}));
        if(localStorage.getItem('auth-token')){
            fetch(`${API_URL}/remove-from-cart` ,{
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"itemID" :itemID})
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }
    }
    console.log("cartData" ,cartItems);
    const getTotelCartAmount =()=>{
        let totalAmount = 0;
        for(const i in cartItems){
            if(cartItems[i]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(i));
                totalAmount+= itemInfo.new_price* cartItems[i];
            }
        }
        return totalAmount;
    }
    const getTotelCartItems = ()=>{
        let totalItems = 0;
        for(const i in cartItems){
            if(cartItems[i]>0){
                totalItems += cartItems[i];
            }
        }
        return totalItems;
    }
    const contextValue ={all_product , cartItems ,addToCart ,removeFromCart ,getTotelCartAmount ,getTotelCartItems};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )*/
   
} 
export default ShopContextProvider