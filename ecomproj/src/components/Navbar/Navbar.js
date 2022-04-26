import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    < div className='navbar'>
        <div className='logo'>
           <h1> FoodHub </h1>
        
        </div>
        
            <ul className='nav-links'>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
               
            </ul>
    

    </div>
  )
}

export default Navbar