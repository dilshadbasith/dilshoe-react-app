import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function Adminnavbar() {
    const navigate=useNavigate()
    
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" onClick={()=>navigate('/adminhome')}>ADMIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" onClick={()=>navigate('/adminproducts')}>Products</Nav.Link>
            <Nav.Link href="#features" onClick={()=>navigate('/adminmen')}>Men</Nav.Link>
            <Nav.Link href="#features" onClick={()=>navigate('/adminwomen')}>Women</Nav.Link>
            <Nav.Link href="#pricing" onClick={()=>navigate('/adminuserslist')}>Users</Nav.Link>
            
          </Nav>
          <Nav>
          <NavDropdown title=<i class="fa-solid fa-user"></i> id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={()=>navigate('/')}>LogOut</NavDropdown.Item>            
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Adminnavbar
