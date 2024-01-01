
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';


const Navbar = () => {

    const count = useSelector((state)=>state.cart.value);

  return (
    <>
    <div className="nav">
        <div className="logo link">
            <img src="https://static.vecteezy.com/system/resources/previews/003/740/399/original/ik-logo-monogram-isolated-on-circle-element-design-template-free-vector.jpg"/>
            <p>iKart</p>
        </div>
        <div className="nav-menu">
            <NavLink className='link' to="/">
                <p>Home</p>
            </NavLink>
            <NavLink className='link' to="/cart">
                <div>
                <FaCartShopping />
                <span id='cartcount'>{count}</span>
                </div>
            </NavLink>
        </div>
    </div> 
    </>
  )
}

export default Navbar
