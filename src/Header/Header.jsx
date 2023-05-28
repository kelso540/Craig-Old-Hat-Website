import React from 'react'
import './Header.css'
import logo from '../assets/craig-old-hat-logo.png'

function Header() {
  return (
    <header>
      <a href='/' className='headerLogo'>
        <img src={logo} alt='Logo' />
        <p>LEATHER WORKS</p>
      </a>
      <div className='headerLinks'>
        <a href='/contact'>Contact</a>
        <a href='/about'>About</a>
        <a href='/gallery'>Gallery</a>
      </div>
      <div className='headerMobileLinks'>
        
      </div>
    </header>
  )
}

export default Header