import React, { Component } from 'react';
import {Link , withRouter} from "react-router-dom";
// import { withRouter } from 'react-router';
import { Nav } from "react-bootstrap";
import UserApi from "../api/UserApi";

const Header = ({history}) => {

    const handleLogout = () => {
        UserApi.logout();
        history.push('/login');
    }
    return (
        <header>

            <Nav className="float-left" as={Link} to={"/"}>
                <div className="logo"></div>
            </Nav>
            <Nav className="float-right">
                <Nav.Link as={Link} to="/articlecreate">New article</Nav.Link>
                {!UserApi.isAdmin() && (
                    <Nav.Link as={Link} to="/articleadmin">Manage Articles</Nav.Link>
                )}
                {!UserApi.isAuth() && (
                    <Nav.Link as={Link} to="/login">Connexion</Nav.Link>
                )||(
                <Nav.Link onClick={handleLogout} >Deconnexion</Nav.Link>
                )}

            </Nav>
        </header>
    );
}
export default Header;
