import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const Header = () => {
    return (
        <div className='py-3'>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="text-light" href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="text-light" to="/home">Home</Nav.Link>
                            <Nav.Link className="text-light" to="/about">About</Nav.Link>
                            <Nav.Link className="text-light" href="#action2">Services</Nav.Link>
                            <Nav.Link className="text-light" href="#action2">Teachers</Nav.Link>
                            <Nav.Link className="text-light" href="#action2">Contact</Nav.Link>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;