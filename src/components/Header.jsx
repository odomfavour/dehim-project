import React from 'react'
import { Navbar, Container, Nav, } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar className="main-navbar" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand >DEHIM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#home">DEFI-MED SUITE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#about">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#nft-market">login</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-warning signup" to="/">SIGNUP</Link>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
