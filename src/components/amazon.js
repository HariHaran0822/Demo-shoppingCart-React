import React from 'react'
import List   from '../data';
import Card from './card';
import Caurosel from './caurosel';
const Amazon = ({handleClick,handleChange ,button,setButton}) => {
return (<div>
  <Caurosel/>
<section>
{List.map((item)=>(
<Card key={item.id} item={item}  handleClick={handleClick} handleChange={handleChange}  button={button} setButton={setButton}/>

 ))}
 
   </section>
   </div>
  )
}

export default Amazon;