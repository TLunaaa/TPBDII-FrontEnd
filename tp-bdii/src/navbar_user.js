import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class NavBarUser extends React.Component {
    render () {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
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
                    <Nav.Link href="">Cerrar Sesion</Nav.Link>
                    <Nav.Link href="">Dashboard</Nav.Link>
                    <Nav.Link href="">Cerrar Sesion</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
