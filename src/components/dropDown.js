import React from 'react';
import '../styling/dropDown.css'
import { Nav,Navbar, NavDropdown } from 'react-bootstrap';

const Dropdown =()=>{
    return(
        
        
<Navbar bg='dark' variant='dark'  >
    <Nav className='Navstyle'>
        <NavDropdown style={{ fontSize: `70%`,alignContent:`center`}} title="PC">
            <NavDropdown.Item  href="#">WindowTablet</NavDropdown.Item> 
            <NavDropdown.Item href="#">Laptops&NoteBooks</NavDropdown.Item> 
            <NavDropdown.Item href="#">Tablets</NavDropdown.Item> 
            <NavDropdown.Item href="#">Destops</NavDropdown.Item> 
            <NavDropdown.Item href="#">Apple products</NavDropdown.Item> 
            <NavDropdown.Item href="#">Transformer</NavDropdown.Item> 
            <NavDropdown.Item href="#">Graphic Tablets</NavDropdown.Item> 
            </NavDropdown>
   
            <NavDropdown title="PRINTER&MULTIFUNCTIONS" style={{ fontSize: `70%` }}>
            <NavDropdown.Item href="#" >LaserJet</NavDropdown.Item> 
            <NavDropdown.Item href="#">inkJet</NavDropdown.Item> 
            <NavDropdown.Item href="#">All in one Printer</NavDropdown.Item> 
            <NavDropdown.Item href="#">Inks and toner</NavDropdown.Item> 
            <NavDropdown.Item href="#">Scanners</NavDropdown.Item> 
            <NavDropdown.Item href="#">Transformer</NavDropdown.Item> 
            <NavDropdown.Item href="#">Printer Accessories</NavDropdown.Item> 
            </NavDropdown>
   
            <NavDropdown title="DISPLAY" style={{ fontSize: `70%` }}>
            <NavDropdown.Item href="#">Satellite Reciver</NavDropdown.Item> 
            <NavDropdown.Item href="#">LCD/LED Monitor</NavDropdown.Item> 
            <NavDropdown.Item href="#">LCD /LED TV</NavDropdown.Item> 
            <NavDropdown.Item href="#">Plasma tv</NavDropdown.Item> 
            <NavDropdown.Item href="#">Projrctor</NavDropdown.Item> 
            <NavDropdown.Item href="#">Mount</NavDropdown.Item> 
            <NavDropdown.Item href="#">Frames</NavDropdown.Item> 
            </NavDropdown>

            <NavDropdown title="STORAGE" style={{ fontSize: `70%` }}>
            <NavDropdown.Item href="#">Flash Memory</NavDropdown.Item> 
            <NavDropdown.Item href="#">External Hardware</NavDropdown.Item> 
            <NavDropdown.Item href="#">CD/DVD blank</NavDropdown.Item> 
            <NavDropdown.Item href="#">Memory Card</NavDropdown.Item> 
            <NavDropdown.Item href="#">Memory Card Reader</NavDropdown.Item> 
            <NavDropdown.Item href="#">Memory Card Reader/Writer</NavDropdown.Item> 
            <NavDropdown.Item href="#">Network Storage</NavDropdown.Item> 
            </NavDropdown>

            <NavDropdown title="NETWORK" style={{ fontSize: `70%` }}>
            <NavDropdown.Item href="#">Acess Point</NavDropdown.Item> 
            <NavDropdown.Item href="#">Adaptor</NavDropdown.Item> 
            <NavDropdown.Item href="#">Switch</NavDropdown.Item> 
            <NavDropdown.Item href="#">Router</NavDropdown.Item> 
            <NavDropdown.Item href="#">Bluetooth</NavDropdown.Item> 
            <NavDropdown.Item href="#">Mobiles</NavDropdown.Item> 
            <NavDropdown.Item href="#">GPS </NavDropdown.Item> 
            <NavDropdown.Item href="#"> Phone Accessories</NavDropdown.Item> 
            </NavDropdown>

            <NavDropdown title="CAMERAS" style={{ fontSize: `70%` }}>
            <NavDropdown.Item href="#">Digital cameras</NavDropdown.Item> 
            <NavDropdown.Item href="#">DSLR cameras</NavDropdown.Item> 
            <NavDropdown.Item href="#">Cam Corder</NavDropdown.Item> 
            <NavDropdown.Item href="#">WebCam</NavDropdown.Item> 
            <NavDropdown.Item href="#">Security Cameras</NavDropdown.Item> 
            <NavDropdown.Item href="#">Camera Accessories</NavDropdown.Item> 
          
            </NavDropdown>
      
            <NavDropdown title="GAMING" style={{ fontSize: `70%` }}>
            <NavDropdown.Item href="#">Cd games</NavDropdown.Item> 
            <NavDropdown.Item href="#">Playstation</NavDropdown.Item> 
            <NavDropdown.Item href="#">Xbox</NavDropdown.Item> 
            <NavDropdown.Item href="#">Wii</NavDropdown.Item> 
            <NavDropdown.Item href="#">PSP</NavDropdown.Item> 
            <NavDropdown.Item href="#">Elecronic Toys</NavDropdown.Item> 
            <NavDropdown.Item href="#">Gaming Accessories</NavDropdown.Item> 
            <NavDropdown.Item href="#">WII Accessories</NavDropdown.Item> 
            <NavDropdown.Item href="#">Wii Games</NavDropdown.Item> 
            <NavDropdown.Item href="#">Xbox Accessories</NavDropdown.Item>
            </NavDropdown>
   
            <NavDropdown title="SOFTWARE" style={{ fontSize: `70%` }}>
        
            <NavDropdown.Item href="#">Operating system </NavDropdown.Item> 
            <NavDropdown.Item href="#">Security software</NavDropdown.Item> 
            <NavDropdown.Item href="#">Microsoft office</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="ENTERTAINMENT" style={{ fontSize: `70%` }}>
        
        <NavDropdown.Item href="#">Boob box </NavDropdown.Item> 
        <NavDropdown.Item href="#">Home theater</NavDropdown.Item> 
        <NavDropdown.Item href="#">Radio</NavDropdown.Item>
        <NavDropdown.Item href="#">Dvd player </NavDropdown.Item> 
        <NavDropdown.Item href="#">Ipods</NavDropdown.Item> 
        <NavDropdown.Item href="#">Fm Transmitor</NavDropdown.Item>
        <NavDropdown.Item href="#">MP3 &MP4 Player </NavDropdown.Item> 
        <NavDropdown.Item href="#">Multimedia drive</NavDropdown.Item> 
        <NavDropdown.Item href="#">Musical instument</NavDropdown.Item>
        <NavDropdown.Item href="#">Voice Recorder</NavDropdown.Item> 
        <NavDropdown.Item href="#">Speaker &DocK stations</NavDropdown.Item>
        </NavDropdown>
   
   
        <NavDropdown title="POWER" style={{ fontSize: `70%` }}>
            <NavDropdown.Item href="#">Batteries</NavDropdown.Item> 
            <NavDropdown.Item href="#">Batteries Chargers</NavDropdown.Item> 
            <NavDropdown.Item href="#">Sabilizers</NavDropdown.Item> 
            <NavDropdown.Item href="#">UPS</NavDropdown.Item> 
            <NavDropdown.Item href="#">Voltgard</NavDropdown.Item> 
            <NavDropdown.Item href="#">portable power pack</NavDropdown.Item> 
            <NavDropdown.Item href="#">Chargers & adapters </NavDropdown.Item> 
            </NavDropdown>

            <NavDropdown title="ACCESSORIES" style={{ fontSize: `70%` }}>
            <NavDropdown.Item href="#">Tab Accessories</NavDropdown.Item> 
            <NavDropdown.Item href="#">Mouse</NavDropdown.Item> 
            <NavDropdown.Item href="#">Keyboards</NavDropdown.Item> 
            <NavDropdown.Item href="#">Speaker</NavDropdown.Item> 
            <NavDropdown.Item href="#">Keyboards & Mouse combo kit</NavDropdown.Item> 
            <NavDropdown.Item href="#">Headphones& Microphones </NavDropdown.Item> 
            <NavDropdown.Item href="#">Carry case </NavDropdown.Item> 
            <NavDropdown.Item href="#">Clocks & Watches </NavDropdown.Item> 
            </NavDropdown>


            <NavDropdown title="OSN EGYPT" style={{ fontSize: `70%` }}>
            <NavDropdown.Item href="#">Clocks & Watches </NavDropdown.Item> 
            </NavDropdown>
   
   
    
      
</Nav>
</Navbar>


       
        
    );
}
export default Dropdown;