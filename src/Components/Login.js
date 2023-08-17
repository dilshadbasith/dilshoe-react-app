import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { myContext } from "./Context";

function Login() {

  const navigate = useNavigate();
  const [email,setEmail]=useState()
  const[password,setPassword]=useState()
  const {userdata,loggedin,setLoggedin}=useContext(myContext)

  const handleClick=(e)=>{
    e.preventDefault();
    userdata.forEach(data=>{
      if(data.email===email&&data.password===password){
      setLoggedin(!loggedin)
        navigate('/')
      }
      // else{
      //   alert("Invalid login")
      // }
    })
  }

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };
  return (
    <div className="parent">
    <div className='child'>
    <h1 className="heading">Login</h1>
    <Form   >
        
        <Row>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                onChange={(e)=>{setEmail(e.target.value)}}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        
        <Form.Text className="text-muted">
          Don't Have an Account?
          <span className="bt" onClick={() => navigate("/register")}>
            Register
          </span><br/>
        </Form.Text>
        <div className="logindiv">
        <Button type="submit" onClick={handleClick}>Login</Button>
        <h7 className="bt" onClick={()=>navigate('/adminlogin')}>Admin</h7>
        </div>
      </Form>
    </div>
    </div>
  )
}

export default Login
