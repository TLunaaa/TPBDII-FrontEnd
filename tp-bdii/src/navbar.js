import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class NavBar extends React.Component {
    render () {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://logo.clearbit.com/redis.io"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Redis
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="./login">Iniciar Sesion</Nav.Link>
                    <Nav.Link href="./register_form">Registrarse</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
