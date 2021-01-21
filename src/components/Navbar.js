import React from 'react'
import logo from './../logo.png'
import cart from './../cart.png'

function Navbar() {
    return (
        <div className = "navbar">
            <img src ={logo} className = "logo" alt="logo" />
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
            <img src = {cart} className = "cart" alt="cart" />
        </div>
    )
}

export default Navbar
