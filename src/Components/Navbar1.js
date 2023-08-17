import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { myContext } from "./Context";

function Navbar1() {
  const navigate = useNavigate();
  const { search, setSearch, cart, loggedin,setLoggedin,userdata } = useContext(myContext);
  console.log(search);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand onClick={() => navigate("/")} className="title">
            DILSHOE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={() => navigate("/productmen")}>MEN</Nav.Link>
              <Nav.Link onClick={() => navigate("/productwomen")}>
                WOMEN
              </Nav.Link>
              <Nav.Link href="#action2">COLLECTION</Nav.Link>
              <Nav.Link href="#action2">LOOKBOOK</Nav.Link>
              <Nav.Link href="#action2">SALE</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action2">CONTACT</Nav.Link>
              {loggedin===true?(

              <Nav.Link href="#action2">
                <i
                  class="fa-solid fa-cart-shopping"
                  onClick={() => navigate("/cart")}
                >
                  <sup>{cart.length}</sup>
                </i>
              </Nav.Link>
              ):null}
              {loggedin === true ? (
                <NavDropdown
                  title={userdata[userdata.length-1].name}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item onClick={() => setLoggedin(false)}>
                    LogOut
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown
                  title=<i class="fa-solid fa-user"></i>
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item onClick={() => navigate("/login")}>
                    LogIn
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/register")}>
                    SignUp
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
