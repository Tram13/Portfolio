import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <Navbar style={{backgroundColor: '#fbfbfb', opacity: '70%'}}>
                <Container>
                    <Navbar.Brand as={NavLink} exact activeClassName="navlink-selected" className="navbar-brand" to="/">Arno
                        Vermote</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} activeClassName="navlink-selected" to="/projects">Projects</Nav.Link>
                        <Nav.Link as={NavLink} activeClassName="navlink-selected"
                                  to="/competitions">Competitions</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar;