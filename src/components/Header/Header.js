import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='py-3'>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="text-light">Langify</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Link to='/home' className="text-light text-decoration-none ms-3">Home</Link>
                            <Link to='/about/' className="text-light text-decoration-none ms-3">About</Link>
                            <Link to='/services' className="text-light text-decoration-none ms-3">Services</Link>
                            <Link to='/teachers' className="text-light text-decoration-none ms-3">Teachers</Link>
                            <Link to='/contact' className="text-light text-decoration-none ms-3">Contact</Link>
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