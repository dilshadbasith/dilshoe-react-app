import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { myContext } from "./Context";

function Register() {
  const [validated] = useState(false);
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const[phone,setPhone]=useState()
  const navigate = useNavigate();

  const {userdata,setUserdata}=useContext(myContext);
  const handleClick=(e)=>{
    e.preventDefault()
    setUserdata((d)=>d=[...userdata,{name:name,email:email,password:password,phone:phone,id:userdata.length+1}]);
    alert('Registered Successfully')
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
    <div>
      <h1 className="heading">SignUp</h1>
      <Form noValidate validated={validated}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Full name" onChange={(e)=>{setName(e.target.value)}}/>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <Form.Label>E-Mail</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Email"
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
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="Phone number" required onChange={(e)=>{setPhone(e.target.value)}}/>
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
          Already Have an Account?
          <span className="bt" onClick={() => navigate("/login")}>
            Login
          </span><br/>
        </Form.Text>
        <Button type="submit" onClick={handleClick}>SignUp</Button>
      </Form>
    </div>
    </div>
  );
}

export default Register;
