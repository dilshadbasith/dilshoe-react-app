import React from 'react'
import { Carousel, Image } from "react-bootstrap";


function Adimncarousel() {
  return (
    <div>
      <Carousel id="home">
      <Carousel.Item>
        <Image
          src={require("./images2/img1.jpg")}
          alt="Photo"
          className="w-100"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={require("./images2/img2.jpg")}
          alt="Photo"
          className="w-100"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={require("./images2/img3.jpg")}
          alt="Photo"
          className="w-100"
        />

       
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Adimncarousel
