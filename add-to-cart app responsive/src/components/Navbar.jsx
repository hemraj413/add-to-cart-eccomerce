import React, { useState } from 'react'
import './Navbar.css'

export const Navbar = ({cartItem, itemImg, itemDetail,price, deleteCart,buynum}) => {
  const[isCartOpen,setIsCartOpen] = useState(false)
  const[isToggle,setIsToggle] = useState(false)

  function toggleCart(){
    setIsCartOpen(!isCartOpen)
   
     
  }
  return (
    <div className='navbar'>
      <div className="menu1">
        <h1>sneakers</h1>
        <img src={!isToggle? ("./images/icon-menu.svg") : ("./images/icon-close.svg")} alt="" className='menu-btn' onClick={()=>setIsToggle(!isToggle)} />
        <ul  className={!isToggle? ('menu-items'):("menu-items open")}>
            <li>Collection</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </div>
        <div className="menu2">
          <img src="./images/icon-cart.svg" alt="" height="auto" width="25vw" style={{cursor:"pointer"}} onClick={()=> toggleCart()} />
         
           {isCartOpen && (
            <div className='cart-div'>
            <h3>Cart</h3> 
      {cartItem === null ?  (
      <div className="empty-cart">
       <p>Your cart is empty.</p>
      </div>
      
      ) : (
       <div className='cart-items'>
     
      <div className="product-cart">
      <img src={itemImg} alt='' height="80px" style={{borderRadius:"10px"}}/>
        <div className="product-cart-detail">
      <p style={{padding:"0",margin:"0", whiteSpace:"nowrap"}}>{itemDetail} x {buynum}</p>
      <span style={{fontSize:"1vw", fontWeight:"600"}}> total price: ${price}</span>
      
      </div>
     
      <img src="./images/icon-delete.svg" alt="" style={{cursor:"pointer"}} onClick={deleteCart}/>
      
      </div>
      <button style={{backgroundColor:"rgb(241, 104, 0)", padding:"3% 30%", border:"none", borderRadius:"12px", fontSize:"20px",color:"#fff",margin:"1rem",cursor:"pointer"}}>checkout</button>
       </div>
      )
       
        
      }
       </div>) 
         }
          <img id='avatar' src="./images/image-avatar.png" alt=""  height="auto" width="40w"/>
        </div>
    </div>
  )
}
