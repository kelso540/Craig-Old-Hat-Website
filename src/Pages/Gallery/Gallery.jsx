import React, { useState } from 'react'
import './Gallery.css'
import { galleryArray } from '../../Components/Data/ImagesArray'
import ReactModal from 'react-modal'

function Gallery() {

  const [currentImg, setCurrentImg] = useState(galleryArray[0])
  const [modalOpen, setModalOpen] = useState(false)

  const setImg = (index)=>{
    setCurrentImg(galleryArray[index])
  }

  return (
    <section className='galleryDiv'>

      <ReactModal 
        appElement={document.getElementById('root')}
        isOpen={ modalOpen }
        className='modal'
        onRequestClose={()=>setModalOpen(false)}
      >
        <button className='closeModalBtn' onClick={()=>{setModalOpen(false)}}>X</button>
        <img alt='Main Image' src={ currentImg } className='modalGalleryImg' />
      </ReactModal>
      
      <img alt='Main Image' src={ currentImg } className='galleryMainImg' onClick={()=>setModalOpen(true)} />
      <div className='gallerySelectionDiv'>
        {
          galleryArray.map((item, index)=>
            <img alt='Galley Image' 
              key={ item }
              src={ item } 
              className='galleryImg' 
              onClick={()=>setImg(index)}/>
            )
        }
      </div>
    </section>
  )
}

export default Gallery