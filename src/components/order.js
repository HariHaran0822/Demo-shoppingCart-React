import React from 'react'
import "../styling/order.css";
// import { useHistory } from "react-router-dom";
// import  List from 'data'
// import DetailForm from './form';

const Order=({price,titles,setMshow})=> {

  

  //  const history = useHistory();
  //   const formPage=()=>{     
  //     history.push("/form");
  // }

   


  return(
  <div>
  <div className='container'>

    
<div >
 {/* <button className="btn btn-success" */}
{/* //  onDoubleClick={()=>formPage()} */}
{/* > */}
   {/* Proceed to checkOut */}
 {/* </button> */}
 </div>
   {/* <span className='my_shop'onClick={()=>setMshow(false)}> <button className='btn btn-warning'>go back</button> </span> */}

 {/* {<DetailForm  cost={cost} title={title} amount={amount} count={count}/>}   */}
      
 </div>

   
</div>
  )
         
};
export default Order;