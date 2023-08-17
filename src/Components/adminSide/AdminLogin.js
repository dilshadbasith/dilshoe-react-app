import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { myContext } from '../Context';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const navigate=useNavigate()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const {admindata}=useContext(myContext)

    const handleClick=(e)=>{
        e.preventDefault()
        admindata.forEach(data=>{
            if(data.email===email&&data.password===password){
              navigate('/adminhome')  
            }else{
                alert("invalid login")
            }
        })
    }
  return (
    <div className='adminlogin-container'>
    <div className='adminlogin'>
    <h2 className='adminloginh2'>Admin Login</h2>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleClick}>
        Login
      </Button>
    </Form> 
    </div>
    </div>
  )
}

export default AdminLogin
