import React, { useContext } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { myContext } from "./Context";
import { useParams } from "react-router-dom";

export default function Payment() {
    const {cart}=useContext(myContext)
    const{id}=useParams()

    const data=cart.filter((item)=>item.id===parseInt(id))
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
    {data.map((item)=>(

      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="5">
            <Card className="bg-primary text-white rounded-3">
              <Card.Body>
                {/* Payment Form */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="mb-0">Card details</h5>
                  <i style={{color:"white"}} class="fa-solid fa-user" ></i>
                </div>
                <p className="small">Card type</p>
                <div className="d-flex">
                  {/* Card Icons */}
                  <a href="#!" type="submit" className="text-white me-2">
                    <i className="fab fa-cc-mastercard fa-2x"></i>
                  </a>
                  {/* ... Repeat for other card types ... */}
                </div>
                <Form className="mt-4">
                  <Form.Group controlId="cardholdersName">
                    <Form.Label>Cardholder's Name</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Cardholder's Name" />
                  </Form.Group>
                  {/* ... Repeat for other form fields ... */}
                  <Button variant="info" block size="lg">
                    <div className="d-flex justify-content-between">
                      <span>Rs:{(item.price * item.qty)+20}</span>
                      <span>
                        Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i>
                      </span>
                    </div>
                  </Button>
                </Form>
                {/* Total Summary */}
                <div className="d-flex flex-column mt-4">
                  <div className="d-flex justify-content-between mb-2">
                    <p className="mb-0">Subtotal</p>
                    <p className="mb-0">Rs:{item.price * item.qty}</p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="mb-0">Shipping</p>
                    <p className="mb-0">Rs:20</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0">Total(Incl. taxes)</p>
                    <p className="mb-0">Rs:{(item.price * item.qty)+20}</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    ))}
    </section>
  );
}
