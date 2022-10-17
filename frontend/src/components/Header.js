import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

function Header() {
    return (
        <header>
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    )
}

export default Header