import React, { useState, useEffect } from 'react'
import './Banner.css'
import logo from '../../assets/craig-old-hat-logo.png'
import { imageArray } from '../Data/ImagesArray'

function Banner() {
  const [image, setImage] = useState(imageArray[0])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev + 1) % imageArray.length);
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    setImage(imageArray[count])
  }, [count])

  return (
    <div className='bannerSection'>
      <div className='overlayDiv'>
        <img alt='Logo Overlay' src={logo} className='logoOverlay' />
        <div>
          <p className='PleatherWorks'>LEATHER WORKS</p>
          <p className='PallHandmadeByMe'>ALL HANDMADE BY ME</p>
        </div>
      </div>
      <img
        alt='Banner Image'
        src={image}
        className='bannerImg'
      />
    </div>
  )
}

export default Banner
