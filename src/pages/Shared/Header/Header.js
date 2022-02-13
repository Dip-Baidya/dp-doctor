import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import img from '../../../Images/ICONS Logos/l.png'

const Header = () => {

    return (
        <Container fluid className="header-section">
            <Navbar bg="white" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            src={img}
                            width="120"
                            height="50"
                            className=" image d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="navbarCollapse-height" >
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <NavDropdown title="Doctor" id="navbarScrollingDropdown" className="nav-drop">
                                <NavDropdown.Item href="#action3">Doctor</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Services" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Services</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Pharmacy Owner" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Pharmacy Owner</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action1">About Us</Nav.Link>
                            <Nav.Link href="#action2">Blog</Nav.Link>
                            <Nav.Link href="#action1">Contact</Nav.Link>
                            <Nav.Link href="#action2">FAQ</Nav.Link>

                            <NavDropdown title="En" id="navbarScrollingDropdown" className="nav-drop">
                                <NavDropdown.Item href="#action3">Doctor</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <button className="btn-login">Login</button>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;