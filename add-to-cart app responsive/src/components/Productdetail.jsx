import React, { useEffect, useState } from 'react'
import './Productdetail.css'
import { Navbar } from './Navbar'
import { ImageGallery } from './ImageGallery'

export const Productdetail = () => {
    const[price,setPrice] = useState(0)
    const[selectedImage] = useState(0)
    const[cartItem,setCartItem] = useState(null)
    const[buyNum, setBuyNum] = useState(0)
    const[ProductPrice,setProductPrice] = useState(0)
    const[discount,setDiscount] = useState(0)
    const[buyProduuct,setBuyProduct] = useState(0)
    
    const images = [
        { thumbnailUrl: './images/image-product-1-thumbnail.jpg', url: './images/image-product-1.jpg' },
        { thumbnailUrl: './images/image-product-2-thumbnail.jpg', url: './images/image-product-2.jpg' },
        { thumbnailUrl: './images/image-product-3-thumbnail.jpg', url: './images/image-product-3.jpg' },
        { thumbnailUrl: './images/image-product-4-thumbnail.jpg', url: './images/image-product-4.jpg' },

      
      ];
      function addToCart(){
        if(buyNum == 0) return
        else{
            
            setCartItem(`Fall limited sneakers`)
            setPrice(buyNum * Math.ceil(ProductPrice-ProductPrice*discount/100) )
            setBuyProduct(buyNum)
        }
        setBuyNum(0)
      }
      function deleteCart(){
        setCartItem(null)

      }
    
    function addNumber(){
        setBuyNum(buyNum+1)
    }
    function subNumber(){
        if(buyNum >= 1){
        setBuyNum(buyNum -1)
        }else{
            setBuyNum(0)
        }
      
    }

    useEffect(()=>{
      setProductPrice(Math.ceil(Math.random()*500+100))
      setDiscount(Math.ceil(Math.random()*50))
    },[])
  return (
    <>
     <Navbar cartItem={cartItem} itemImg={images[selectedImage].thumbnailUrl}  itemDetail={cartItem} price={price} deleteCart={deleteCart} buynum={buyProduuct}/>

    <main>
<ImageGallery images={images} />
   
    <div className="product-detail">
    <h3>SNEAKER COMPANY</h3>
    <h1 className='product-title'>Fall Limited Edition Sneakers</h1>
    <p className='shoe-details'>These low-profile Sneakers are your perfect casual wear companion. Featuring a durablerubber outer sole, they'll stand everything the weather can offer.</p>
    <div className="price-details">
        <h4 className='price'> ${Math.ceil(ProductPrice-ProductPrice*discount/100)}</h4><h5 className='discount'>{discount}%</h5>
    </div>
    <h4 className="previous-price"><del>${ProductPrice}</del></h4>
    <div className="buy-product">
        <div className="btn-part">
        <button onClick={subNumber}>-</button>
        <p>{buyNum}</p>
        <button onClick={addNumber}>+</button>
    </div>
    <button onClick={()=>addToCart()} className='add-to-cart' ><img src="./images/icon-cart.svg" alt="" /> <span>add to cart</span></button>
    </div>

    </div>
    </main>
    </>
  )
}
