import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }


  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={'https://ik.imagekit.io/Jonnes/INO%20Decors/logo.png?updatedAt=1711735761048'} alt="" />
        <p>I&O Decors</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={'https://ik.imagekit.io/Jonnes/INO%20Decors/nav_dropdown.png?updatedAt=1713030992911'} alt="" />
        <ul ref={menuRef} className="nav-menu">
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("furniture")}}><Link style={{textDecoration: 'none'}} to='/furniture'>Furniture</Link> {menu==="furniture"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("carpets&Curtains")}}><Link style={{textDecoration: 'none'}} to='/carpets&Curtains'>Carpets and Curtains</Link> {menu==="carpets&Curtains"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("artpaints")}}><Link style={{textDecoration: 'none'}} to='/artpaints'>Art Paints</Link> {menu==="artpaints"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("flowers&plants")}}><Link style={{textDecoration: 'none'}} to='/flowers&plants'>Flowers/Plants</Link> {menu==="flowers&plants"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={'https://ik.imagekit.io/Jonnes/INO%20Decors/cart_icon%20(1).png?updatedAt=1711735619725'} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar