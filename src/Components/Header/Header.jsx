import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/craig-old-hat-logo.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Header() {

  const [displayMobileMenu, setDisplayMobileMenu] = useState(true)

  const toggleMenu = ()=>{
    setDisplayMobileMenu(!displayMobileMenu)
  }

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
        {
        (displayMobileMenu)?
          <AiOutlineMenu onClick={()=>toggleMenu()} className='burgerMenuIcon'/>
          :<AiOutlineClose onClick={()=>toggleMenu()} className='closeMenuIcon'/>   
        }
      </div>
      <div className={(!displayMobileMenu)?'headerLinksMobile':'headerLinksMobileHide'}>
        <a href='/contact'>Contact</a>
        <a href='/about'>About</a>
        <a href='/gallery'>Gallery</a>
      </div>
    </header>
  )
}

export default Header