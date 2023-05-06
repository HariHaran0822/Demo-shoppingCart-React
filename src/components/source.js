import React from 'react'
import '../styling/source.css'
import Table from 'react-bootstrap/Table'
function Source({price,title,cost,amount}) {

  let count=0;
  count=amount*cost;
  return (
 <div >  
  
   <Table striped bordered hover>
  <thead>
    <tr>
    
      {/* <th>Product</th>
      <th>cost</th>
      <th>qnty</th> */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{title}</td>
      <td>{count}</td>
      <td>{amount}</td>
    {/* <td>{price}</td> */}
    </tr>
   
   
  </tbody>
</Table>



{/* Product Name: {title}<br></br>
Item Price: {count}<br></br>
Quantity: {amount} <br></br>
{price} */}
 </div>
  )
}

export default Source;
