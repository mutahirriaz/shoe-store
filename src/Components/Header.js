import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div>
 
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="home"><Link className='header_text' to='/'>Shoe-Store</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Link to='/'>Home</Link>
      <Link to="/Men">Men</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 

        </div>
    )
}

export default Header
