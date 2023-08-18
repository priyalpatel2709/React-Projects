import React from "react";
import { Outlet } from "react-router-dom";


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const NavBarCom = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">Reduc Toolkit</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav >
          <Nav.Link to="/" as={Link}>Home</Nav.Link>
        </Nav>
        <Navbar.Collapse className="d-flex">
          <Navbar.Text>
          <Nav.Link to="/addcart" as={Link}>My Bag 0</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Outlet/>
  </>
  );
};

export default NavBarCom;
