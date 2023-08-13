import React, { useState } from 'react'
import './imagegallery.css'

export const ImageGallery = ({images}) => {

    const[selectedImage,setSelectedImage] = useState(0)

    function previous(){
      if(selectedImage > 0) {
        setSelectedImage(selectedImage-1)
      }
      else{
        setSelectedImage( images.length-1)
      }
    }
    function next(){
      if(selectedImage <= images.length-2){
     
      setSelectedImage(selectedImage+1)
      }
      else{
        setSelectedImage(0)
      }
    }

  return (
    <div className='image-gallery'>
      <div className="main-img">
        <img src="./images/icon-previous.svg" alt="" style={{margin:"0 0 0 -5%",cursor:"pointer", padding:"1%", maxWidth:"30vw"}} onClick={()=>previous() }/>
       <img src={images[selectedImage].url} alt='' />
       <img src="./images/icon-next.svg" alt="" style={{margin:"0 -5% 0 0",cursor:"pointer", padding:"1%"}} onClick={()=> next()}/>


      </div>
      <div className="thumnails">
      {images.map((e,i)=>(
        <img src={e.thumbnailUrl} alt="" style={{margin:"10px", cursor:"pointer" }} key={i} onClick={()=>{ setSelectedImage(images.indexOf(e)) 
        }}/>
      ))}
      </div>
    
    </div>
  )
}
