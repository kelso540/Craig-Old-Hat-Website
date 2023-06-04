import React from 'react'
import './Footer.css'
import { BsFacebook, BsInstagram } from 'react-icons/bs'


function Footer() {
  return (
    <footer>
        <div className='footerPTagDiv'>
          <p>Follow us on...</p>
          <div>
            <a href='https://www.facebook.com/OldHatLeatherWorks'><BsFacebook className='faceBookIcon' /></a>
            <a href='https://www.instagram.com/OldHatLeatherWorks/'><BsInstagram className='instagramIcon' /></a>
          </div>
        </div>
        <p className='copyRight'>&copy; 2023 Old Hat Leather Works</p>
    </footer>
  )
}

export default Footer