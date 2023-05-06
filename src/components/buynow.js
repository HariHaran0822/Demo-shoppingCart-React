import React from 'react'
import{useHistory} from 'react-router-dom'

function Buynow() {


    const history = useHistory();
    const success= () => {
        history.push("/buynow");
   
}
 
  return (
    <div  className='card'>
        <button className='btn btn-success' onClick={success}>buynow</button>
        </div>
  )
}

export default Buynow;