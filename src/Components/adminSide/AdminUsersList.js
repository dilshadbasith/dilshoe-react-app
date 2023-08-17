import React, { useContext } from 'react'
import { myContext } from '../Context'
import { ListGroup } from 'react-bootstrap';
import Adminnavbar from './Adminnavbar';
import { useNavigate } from 'react-router-dom';

function AdminUsersList() {
    const navigate=useNavigate()
    const {userdata}=useContext(myContext)
  return (
    <div>
    <header  className=' sticky-top'><Adminnavbar/></header>
       <h2 style={{textAlign:"center"}}>User's List</h2>
    {userdata.map((item)=>(
      <ListGroup className="list-group list-group-light">
      <ListGroup.Item action onClick={()=>navigate(`/viewusers/${item.id}`)}>
        <h6><i style={{color:"grey"}} class="fa-solid fa-user" ></i>{item.email}</h6>
        <p style={{color:"grey"}}>Password:{item.password}</p>
      </ListGroup.Item>
      
    </ListGroup>
    ))}
    </div>
  )
}

export default AdminUsersList
