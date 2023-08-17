import React, { useContext } from 'react'
import { myContext } from '../Context'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap';

function ViewUsers() {
    const {userdata}=useContext(myContext)
    const {id}=useParams()
    
    const data=userdata.filter((item)=>item.id===parseInt(id))
  return (
    <div className='viewusers'>
    {data.map((item)=>(
       <Card style={{ width: '18rem' }} className="shadow p-3 mb-5 bg-body-tertiary rounded ">
      <Card.Body>
        <Card.Title ><i style={{color:"grey"}} class="fa-solid fa-user" ></i></Card.Title>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        Email:{item.email}
        </Card.Text>
        <Card.Text>
          Mobile no:{item.phone}
        </Card.Text>
        <Card.Text>
          Password:{item.password}
        </Card.Text>
      </Card.Body>
    </Card>
    ))}
    </div>
  )
}

export default ViewUsers
