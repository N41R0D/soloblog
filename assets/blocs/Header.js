import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Row,
    Col
} from "react-bootstrap";

const Header = () => {
    console.log('mdr')
    return (
        <header>

            <Nav className="float-left">
                <div className="logo">
                </div>
            </Nav>
            <Nav className="float-right">
                <Nav.Link as={Link} to="admin/">ADMIN</Nav.Link>
                <Nav.Link as={Link} to="/auth">Connexion</Nav.Link>
            </Nav>
        </header>
    );
}
export default Header;
