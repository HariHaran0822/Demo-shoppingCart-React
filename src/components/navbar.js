import React from 'react'
import { CgShoppingCart } from "react-icons/cg";
import { FaAmazon } from "react-icons/fa";
import '../styling/navbar.css'
function Navbar({setShow,size,setMshow,mshow,price,cart}) {

  return (
   <nav>
       <div className='nav_box'>
    <span className='my_shop'onClick={()=>setShow(true) }> <FaAmazon/>  AMAZON <span  style={{color:"white"}}>LiTE</span>  </span>

    {/* <span className='my_shop'onClick={()=>setMshow(true)}><button className='btn btn-warning'>procced to check out</button>  </span> */}
   {/* <span className='my_shop'onClick={()=>setMshow(false)}> <button className='btn btn-warning'>go back</button> </span> */}

   <div className='cart'onClick={()=>setShow(false)}>
   <span><CgShoppingCart/></span>
   <span>{size}</span>
   </div>
<span className='my_shop'onClick={()=>setMshow(true)}><button className='btn btn-warning'>proceed to Buy  ({size}) Item</button> 
   </span>  

  

  
       </div>
     
 
 <br></br>
 <br></br>
  
   </nav>
   
  )
}

export default Navbar;