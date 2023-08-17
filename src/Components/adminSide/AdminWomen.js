import React, { useContext } from 'react'
import { myContext } from '../Context'
import Card from "react-bootstrap/Card";
import Adminnavbar from './Adminnavbar';
import { useNavigate } from 'react-router-dom';

function AdminWomen() {
  const {product}=useContext(myContext)
  const navigate=useNavigate()
  const data=product.filter((item)=>item.type==='women')
  return (
    <div>
      <header  className=' sticky-top'><Adminnavbar/></header>
       <h2 style={{textAlign:"center"}}>Women</h2>
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
            <button className="viewshoe" onClick={()=>navigate(`/adminviewproducts/${item.id}`)}>View</button>
          </Card.Body>
        </Card>
      ))}
      </div>
    </div>
  )
}

export default AdminWomen
