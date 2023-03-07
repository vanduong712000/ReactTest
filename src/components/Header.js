import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoApp from '../assets/images/logo192.png';
import { NavLink, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
const Header = (props) => {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
       navigate("/");
       toast.success("Log out success!");
  }
    return (
        <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          Duong app
          <img
          src={logoApp}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
                 <NavLink to="/" className="nav-link">Home</NavLink>
                 <NavLink to="/users" className="nav-link">Manage Users</NavLink>
          </Nav>    
          <Nav>
            <NavDropdown title="Setting">
                   <NavLink to="/login" className="dropdown-item">Login</NavLink>
              <NavDropdown.Item onClick={()=>handleLogout()}> Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Header;