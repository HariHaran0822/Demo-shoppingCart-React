import React from "react";
 import"../styling/cart.css"
 import { FcFullTrash } from "react-icons/fc";
 import Order from "./order";
import Mainpage from "./mainpage";
// import Pop from "./popup";npm i react-modal@3.8.1

 const Cart=({cart,handleChange,handleRemove,price,setMshow,mshow,size,gtax})=>{
   
     return(
         <div>
           <div className="totals">
           { mshow ?  
   (<Mainpage price={price}
     cart={cart}
    setMshow={setMshow} 
    gtax={gtax}
      />):
   (<Order/>)
   } 
</div>
 <div className="total">
<span>Sub Total: </span>
<span>  {price}Rs/-</span>
</div>

<div className="card">
<div className="card-body">
{cart.map((item)=>(
    <div className="cart-box" key={item.id}>
     <div className="cart-img">
     <img src={item.img} alt=""/>
     <p>{item.title}</p>           
     </div>

<div>
<button onClick={()=>handleChange(item,+1)}>+</button>
<button>{item.amount}</button>
<button onClick={()=>handleChange(item,-1)}>-</button>    
</div>
<div className="remove">
<p>{item.cost}</p> 
<button onClick={()=>handleRemove(item.id)}> <FcFullTrash/></button>
</div> 

</div>

))}
{/* <Pop/> */}


</div>
</div>


<div className="totals">
    
  {/* <span className='my_shop'onClick={()=>setMshow(true)}><button className='btn btn-warning'>proceed to Buy  ({size}) Item</button>   
 </span>  
 <br></br>
 <br></br>
  { mshow ?  
   (<Mainpage price={price}
     cart={cart}
    setMshow={setMshow} 
    gtax={gtax}
      />):
   (<Order/>)
   } 
   */}
 
 </div>
 </div>
     );
 };
 
 export default Cart;
 