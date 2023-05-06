import React from 'react'
import{useHistory} from 'react-router-dom'
import Source from './source';
import { FaAmazon } from "react-icons/fa";
import '../styling/successpage.css'

function Successpage({price,cart,name,adress,mob,mail,cardn,cardp}) {
   let tax=50;
  let gtax=price+tax;

  
    const history = useHistory();
    const buynow = () => {
        history.push("/");
    }
   
   
  return (
   
    <div className='container'>
      <div className='billad'>
      <div className='col1b'></div>
      <span style={{fontSize:"15px",marginRight:"20px;"}}>   <FaAmazon/>  AMAZON <span  style={{color:"gold"}}>LiTE</span> </span>
      <div className='col2b'>
        Tax invoice/Bill of Supply
      </div>
      </div>
       <br>
    </br>
    
            {/* <h1> Successfuly Ordered</h1> */}
            <div className='cards'>
              <div className='billad'>
              <div className='col1b'>
               <h6>Sold by:</h6>
                 Grv retails,
<br></br>
                 ANNA arch ,<br></br>
                 chennai


              </div>
<div className='col2b'>
<h6>Billing address:</h6>
            {name}<br></br>
            {adress}<br></br>
            {mob}<br></br>
            {mail}
            {cardp}
            </div>
            </div>
            </div>

<>
<div className='cards'>
<div className='billad'>
<div className='col1b'>
PAN NO:BBDPK6150L
<br>
</br>
GST <br></br>
RegistrationNumber:<br>
</br>
067623721982
</div>

<div className='col2b'>
  <h6>ShippingAddress:</h6>
{name}<br></br>
{adress}<br></br>
</div>

</div>
</div>
</>


<div className='cards'>
{/* <div className='billad'> */}
<div className='billprod'>
  {/* <div className='col1b'> */}
  <div className='col1'>
  Title
  </div>
  <div className='col2'>
 cost 
 </div>
 <div className='col2b'>
 qnty</div>
 
 </div>
     {cart.map((item)=>(
 <Source  
 img={item.img}
 title={item.title}
 amount={item.amount}
cost={item.cost}
  />))}
  {/* </div> */}
  </div>
       
       
       <div className='cards'>
       <div className='billad'>
       Sub Total:{price} <br>
       </br>
       Shipping charge:{tax}Rs <br>
       </br>
      Grand Total : {gtax}
      </div>
      
       </div>
       <div className="totls">
<div className='card'>
                <button className='btn btn-danger' onClick={buynow}>back to cart</button>
                </div>
                </div>
              
    </div>
  );}
  





export default Successpage