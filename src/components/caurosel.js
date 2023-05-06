import React from 'react'
import { Carousel } from 'react-bootstrap';
function Caurosel() {
  return (
      <div className='caro-img'>
    <Carousel>
      <Carousel.Item interval={800}>
        
        <img width={500} height={500} 
          className="d-block w-100"
          src=
"https://nettv4u.com/fileman/Uploads/top-10-bollywood-celebs-who-promot-gadgets/deepika_padukone.jpg"   alt="deepika"     />
        <Carousel.Caption>
          <h3>BOOK NOW</h3>
          <p> Oppo 128 GB,  </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img width={500} eight={500}
          className="d-block w-100"
          src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEfVV7kCfJLZVueM55ZhTXrWC7JwUi1LNUA&usqp=CAU"         alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Cool Sunglasses </h3>
<p>Mens need to be Cool    </p>
        </Carousel.Caption>
      </Carousel.Item>
    {/*   <Carousel.Item> */}
    <Carousel.Item interval={800}>
        <img width={500} height={500}
          className="d-block w-100"
          src="
    https://paisebachaoindia.com/wp-content/uploads/2021/02/5-1-400x270.jpg"          alt="Third slide"
        />
      
        <Carousel.Caption>
          <h3>BOat Airpods</h3>
          <p>Lowest Price in Market</p>
          
        </Carousel.Caption>
      
      </Carousel.Item>
      
    </Carousel>
    </div>
        );
    }
    
  

export default Caurosel;