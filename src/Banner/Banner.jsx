import React, { useState } from 'react'
import './Banner.css'
import logo from '../assets/craig-old-hat-logo.png'
import { imageArray } from '../Data/ImagesArray'

function Banner() {

    const [image, setImage] = useState(imageArray[0])
    const [count, setCount] = useState(0)

    setTimeout(()=>{
        setCount(prev=>prev + 1)
        setImage(imageArray[count])
        if(count >= imageArray.length - 1){
            setCount(0)
            setImage(imageArray[count])
        }
    }, 3000)

  return (
    <section className='bannerSection'>
        <div className='overlayDiv'>
            <img alt='Logo Overlay' src={ logo } className='logoOverlay' />
            <div>
                <p className='PleatherWorks'>LEATHER WORKS</p>
                <p className='PallHandmadeByMe'>ALL HANDMADE BY ME</p>
            </div>
        </div>
        <img alt='Banner Image' src={ image } className='bannerImg' />
    </section>
  )
}

export default Banner