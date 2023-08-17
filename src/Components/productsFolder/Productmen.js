import React, { useContext } from 'react'
import Card from "react-bootstrap/Card";
import { myContext } from '../Context';
import Navbar1 from '../Navbar1';
import Footer from '../Footer';
import { useNavigate } from "react-router-dom";


function Productmen() {
    const dataa=useContext(myContext)
    const {product}=dataa
    const navigate=useNavigate()

    const data=product.filter((item)=>item.type==='men')
  return (
    <div>
    <header  className=' sticky-top'><Navbar1/></header>
      <h2 className='shopmenh2'>Shop Men</h2>
      <div className='productsdiv'>

      {data.map((item)=>(
        <Card className="shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: "18rem" }}>
          <Card.Img
          className="productimg"
            variant="top"
            src={item.src}
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <h5>Rs.{item.price}</h5>
            <button className="viewshoe" onClick={()=>navigate(`/browseproducts/${item.id}`)}>View</button>
          </Card.Body>
        </Card>
      ))}
      </div>
      <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Productmen
