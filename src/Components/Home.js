import React from 'react'
import Navbar1 from './Navbar1'
import Slider from './Slider/Carousel1'
import Products from './productsFolder/Products'
import Footer from './Footer'
import Banner1 from './Banner1'


function Home() {
  return (
    <>
    <div className='sticky-top'>
    <Navbar1/>
    </div>
    <div>
        <Slider/>
    </div>
    <div>
      <Products />
    </div>
    <div>
      <Banner1/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default Home
