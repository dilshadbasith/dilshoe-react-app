import React, { useContext } from 'react'
import { myContext } from '../Context'
import Card from "react-bootstrap/Card";
import Adminnavbar from './Adminnavbar';
import { useNavigate } from 'react-router-dom';


function AdminProducts() {
    const {product,setProduct} = useContext(myContext)

    const navigate=useNavigate()

    const deleteItem = (id) => {
      setProduct((b) => b.filter((item) => item.id !== id));
    };
  return (
    <div>
    <header  className=' sticky-top'><Adminnavbar/></header>
    <h2 style={{textAlign:"center"}}>All Products</h2>
    <div style={{display:"flex",justifyContent:"flex-end"}}>
    <button  className='addbtn' onClick={()=>navigate('/addproducts')}>Add products<i class="fa-sharp fa-solid fa-plus"></i></button>
    </div>
      <div className="productsdiv">
        {product.map((item) => (
            <Card
              className="shadow p-3 mb-5 bg-body-tertiary rounded "
              style={{ width: "18rem" }}
            >
            <i class="fa-solid fa-trash" style={{display:"flex",justifyContent:"flex-end"}} onClick={() => deleteItem(item.id)}></i>
              <Card.Img  variant="top" src={item.src} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <h5>Rs.{item.price}</h5>
                <button
                  className="viewshoe"
                  onClick={()=>navigate(`/adminviewproducts/${item.id}`)}
                >
                  View
                </button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  )
}

export default AdminProducts
