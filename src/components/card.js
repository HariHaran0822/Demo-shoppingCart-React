import React from "react";
import"../styling/amazon.css";
const Card=({item,handleClick,button})=> {
    const{cost,img,title}=item;
   
   

  return (
    <div className="cards">
     <div className="image-box aligncontent-center"><img src={img} alt={title}/></div>
     <div className="details text-center" >
   <h6>{title}</h6> 
     <h6> Price:{cost} </h6> 
 <button  className="btn btn-warning" onClick={()=>handleClick(item)}>{button}</button>
     </div>
     
     </div> 
     



  )
}

export default Card;

 


