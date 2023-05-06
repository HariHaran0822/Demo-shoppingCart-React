import React ,{useState}from 'react'
import'../styling/form.css'
import {useHistory} from'react-router-dom'

function DetailForm({setName,setAdress,setMob,setMail,setCardn,setCardp}) {
 
   const[buts,setButs]=useState("save")
   const history = useHistory();

    const handleSubmit=(e)=>{
      e.preventDefault();
     
      setButs("saved");

      history.push("/");
    }



  return (
 <div>
<form>
  <label>
    Name:
    <input type="text" name="name"
     onChange={e => setName(e.target.value)}
     />
  </label>

  <br></br>
  <label>
    Address:
    <input type="text" name="Adress"
    onChange={e => setAdress(e.target.value)}
     />
  </label>
  <br></br>
    <label>
    MobileNumber:
    <input type="number" name="mobnumber"  
        onChange={e => setMob(e.target.value)}
        />
  </label>

  <br></br>
  <label>
    Mail ID :
    <input type="email" name="mailid" 
     onChange={e => setMail(e.target.value)}
      />
  </label>
  <br></br>


  <label>
     ATM Card number :
    <input type="password" name="cardnumber" 
    onChange={e => setCardn(e.target.value)}
    />
  </label>
  <br></br>

  <label>
     ATM Card Password :
    <input type="password" name="cardpassword" 
      onChange={e => setCardp(e.target.value)}
    // onChange={handleChange1} 
    />
  </label>
  <br></br>
  {/* {formData.map((f)=>(<FetchForm key={f.name} name={f.name} number={f.number} Adress={f.Adress}
 mailid={f.mailid} cardnumber={f.cardnumber}  cardpassword={f.cardpassword}/>))} 
 


  {/* <br></br> */}
  <br></br>
  <div className='but'>
<button className='btn btn-primary' 
// onClick={handleSubmit}
// onClick={
  // () => setShowPreview(!showPreview)}
  onClick={handleSubmit}
  // onClick={buynow}
>
  {buts}</button></div>
</form>


 </div> 

  )
}

export default DetailForm;