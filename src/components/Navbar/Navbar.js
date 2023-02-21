import React from 'react'
import './Navbar.css'
import applelogo from './Apple_logo_grey.svg.png'
import search from './search.jpg'
import bag from './bag.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'><img src={applelogo} /></div>
        <div className='navbar-text'>Store</div>
        <div className='navbar-text'>Mac</div>
        <div className='navbar-text'>iPad</div>
        <div className='navbar-text'>iPhone</div>
        <div className='navbar-text'>Watch</div>
        <div className='navbar-text'>AirPods</div>
        <div className='navbar-text'>TV & Home</div>
        <div className='navbar-text'>Entertainment</div>
        <div className='navbar-text'>Accessories</div>
        <div className='navbar-text'>Support</div>
        <div className='navbar-search'><img src={search} /></div>
        <div className='navbar-search'><img src={bag} /></div>
    </div>
  )
}

export default Navbar