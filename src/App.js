 import Navbar from './components/navbar';
import React, { useState,useEffect} from 'react'
import Amazon from './components/amazon';
import Cart from './components/cart';
import Dropdown from './components/dropDown';
import './App.css';



 const App=()=>{
   const [mshow,setMshow]=useState(false);
   const [show,setShow] = useState(true);
   const[cart,setCart] = useState([]);
   const[button,setButton]=useState("AddToCart")
   const[price,setPrice]=useState(0);

   

   const handleClick=(item)=>{
  if(cart.indexOf(item) !== -1) return;
  setCart([...cart,item]);
    }

const handleRemove= (id) =>{
  const arr = cart.filter((item) => item.id!== id );
  setCart(arr);
  handlePrice();
}

const handlePrice = () =>{
  let count= 0;
  cart.map((item)=>(count += item.amount * item.cost));
  setPrice(count);
  };

  useEffect(()=>{
    handlePrice();
});

const handleChange = (item,d)=>{
  const ind = cart.indexOf(item);
  const arr = cart;
  arr[ind].amount += d ;
  if(arr[ind].amount === 0){arr[ind].amount= 1 ;}
  setCart([...arr]);
  console.log(arr[ind].amount);
};





   return(
<React.Fragment>

  <Navbar setShow={setShow} size={cart.length}  setMshow={setMshow}  cart={cart} price={price} mshow={mshow}/>
  <Dropdown/>
 

  
 { 
 show ?  (<Amazon handleClick={handleClick}  button={button}  setButton={setButton}/>)
 :
 (<Cart cart={cart} 
  setCart={setCart} 
   handleChange={handleChange} 
   handleRemove={handleRemove}
  handlePrice={handlePrice}
  setMshow={setMshow}
  price={price}
  mshow={mshow}
  size={cart.length}
 />
  ) }


</React.Fragment>
   );
 }; 

export default App;
