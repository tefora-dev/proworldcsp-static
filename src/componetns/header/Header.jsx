
import React, { useState } from "react";
import "./Header.css";
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '../../assests/images/Proworld Logo-1.png'

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 150) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div>
      <Navbar expand="lg" className={color ? "header header-bg" : "header"}>
        <Container>
          <Navbar.Brand href="">
           <Link to="/"> <img
             src={logo}
              className="logo"
              alt="Pic"
            /></Link>
          </Navbar.Brand>
          <Navbar aria-controls="" />
          <Navbar.Collapse id="">
            <Nav className="ms-auto my-2 my-lg-0 nav">
            
            <Link to='/' className="nav-item" >Home</Link>
            <Link to='/AboutUs' className="nav-item" >About Us</Link>
            <Link to='/services' className="nav-item" >Services</Link>
            <Link to="/ContactUs" className="btn-primary">Contact Us</Link>
            </Nav>
            
          </Navbar.Collapse>
          <div className="toggle-btn" onClick={handleShow}>
            <AiOutlineMenu size={25} />
          </div>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {" "}
            <img

            src={logo} 
              className="logo"
              alt="Pic"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="offcanvas-items">
          <Link to='/' className="nav-item" onClick={handleClose}>Home</Link>
            <Link to='/AboutUs' className="nav-item "onClick={handleClose} >About Us</Link>
            <Link to='/services' className="nav-item" onClick={handleClose}>Services</Link>
            <Link to='/ContactUs' className="nav-item" onClick={handleClose}>Contact Us</Link>
        
         
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;
