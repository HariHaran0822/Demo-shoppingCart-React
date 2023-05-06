import React,{useState} from 'react'
import Source from './source';
import Total from './total';
import DetailForm from './form';
import Buynow from './buynow';
import Successpage from './successpage';
// import Order from './order';
 import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
 




function Mainpage({price,cart,setMshow,gtax,mshow }) {

  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const[mob ,setMob]=useState(null);
  const[mail,setMail]=useState('');
  const[cardn,setCardn]=useState(null);
  const[cardp,setCardp]=useState(null);


  return (
    <div>
     
      
<div className='container'>
 <div className='cards'>
  <h6>Please Check your Order before confrim order</h6>

{cart.map((item)=>(
<Source  
// img={item.img}
title={item.title}
amount={item.amount}
cost={item.cost}
price={price}
  />
  )
  )
   }
  <br></br>
  
  

  <Total price={price}/> 
  <br></br>



   <div className='card'>
    <h6>Please fill below details To Proceed further:</h6> 
   <DetailForm 
   setMail={setMail} 
   setMob={setMob}
   setName={setName} setAdress={setAdress}
   setCardp={setCardp}
   setCardn={setCardn}
   />
   <div className='card' onClick={()=>setMshow(false)}> <button className='btn btn-danger'> Edit Cart</button> </div>

   </div>
   
 </div>
 <div className='card'>
 <Router>
   <Switch>
<Route exact path="/" component={Buynow}/>
<Route exact path="/buynow" 
                       
               render={() => < Successpage price={price} cart={cart} gtax={gtax}  
                                     name={name}
                                         adress={adress}
                                          mob={mob}
                                          mail={mail}
                                          cardn={cardn}
                                          cardp={cardp}
                                    
                                          />} />
   </Switch>
 </Router>

  
 
</div>
</div>

</div>

  
  )
}

export default Mainpage