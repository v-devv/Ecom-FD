import React, {useContext, useRef, useState} from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import drop_down_icon from '../../components/assets/nav_dropdown.png'
import { IoIosArrowDropdown } from "react-icons/io";
const Navbar = () => {
    const [menu , setMenu] = useState('shop');
    const {getTotelCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropDownToggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }
  return (
    <div className="navbar">
        <div className="nav-logo">
    
            <Link style={{textDecoration : 'none'}} to='/' >
                    <img src={logo} alt="Logo" onClick={()=>{setMenu('shop')} } />
            </Link>
        </div>
        <IoIosArrowDropdown className='nav-drop-down' onClick={dropDownToggle} />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration : 'none'}} to='/' >Shop</Link> {menu === 'shop'?<hr/> :<></>} </li>
            <li onClick={()=>{setMenu('men')}}><Link style={{textDecoration : 'none'}}to='/men'>Men</Link> {menu === 'men'?<hr/> :<></>}  </li>
            <li onClick={()=>{setMenu('women')}}><Link style={{textDecoration : 'none'}}to='women'>Women</Link>{menu === 'women'?<hr/> :<></>}  </li>
            <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration : 'none'}}to='kids'>Kids</Link> {menu === 'kids'?<hr/> :<></>}  </li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}} > Logout</button> :
            <Link to='/login'><button>Login</button></Link> }
           
            <Link to='cart'><FiShoppingCart className='cart-img'/></Link>
            <div className="nav-cart-count">
                {getTotelCartItems()}
            </div>
        </div>
    </div>
  )
}

export default Navbar