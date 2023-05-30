import React, { useState } from 'react';
import { Navbar, NavDropdown, Nav, Container, Form } from 'react-bootstrap';
import { BsFillTelephoneFill, BsWhatsapp, BsMailbox } from "react-icons/bs";
import './navbar.css';

function MyNavbar() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    const showDropdown2 = (e) => {
        setShow2(!show2);
    }
    const hideDropdown2 = e => {
        setShow2(false);
    }
    return (
        <Navbar sticky="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img src="logo.png" alt="logo" height="28" width="50" /><br />
                    BeJoHo<br />
                    <p className='slogan'>Begin Your Journey of Hope</p>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{ justifyContent: 'flex-end' }} id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Form className="d-flex">
                            <Form.Control
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                type="file"
                                name="image"
                                accept="image/*"
                                capture="environment"
                            >
                            </Form.Control>

                        </Form>
                        <NavDropdown title="English"
                            id="collasible-nav-dropdown"
                            show={show}
                            onMouseEnter={showDropdown}
                            onMouseLeave={hideDropdown}
                        >
                            <NavDropdown.Item href="#action/3.2">Hindi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Arabic</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Russian</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bangla</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Contact"
                            id="collasible-nav-dropdown"
                            show={show2}
                            onMouseEnter={showDropdown2}
                            onMouseLeave={hideDropdown2}
                        >
                            <NavDropdown.Item href="#action/3.2">
                                <BsFillTelephoneFill /><span className='pad-left'>1800-00-67876</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                <BsMailbox /><span className='pad-left'>hi@bejoho.com</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                <BsWhatsapp /><span className='pad-left'>6238454067</span>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;





