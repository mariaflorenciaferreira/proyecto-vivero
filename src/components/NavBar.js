import {Container,Nav,Navbar} from "react-bootstrap"
import {Link,NavLink} from "react-router-dom"
import LogoIcon from "./LogoIcon"
import CartWidget from "../widget/CartWidget"

function NavBar() {
    return  <Navbar className="navBar"  expand="lg" >
        <Container>
        
        <LogoIcon/>
        <Navbar.Brand as={Link} to="/" ><h1 className="brandText">VIVERO</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/" className="navLinks"  >INICIO</Link>
            <NavLink  to="/categoria/interior" className="navLinks" active-classname="active"  >INTERIOR</NavLink>
            <NavLink  to="/categoria/exterior" className="navLinks" active-classname="active" >EXTERIOR</NavLink>
            <NavLink  to="/categoria/herramientas" className="navLinks" active-classname="active" >HERRAMIENTAS</NavLink>
            <NavLink  to="/categoria/sustratos" className="navLinks" active-classname="active" >SUSTRATOS</NavLink>
            <Link to="/Checkout" ><CartWidget/></Link>
            
            
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
}

export default NavBar


