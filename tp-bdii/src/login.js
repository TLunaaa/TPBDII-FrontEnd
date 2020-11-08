import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './css/index.css';

class Login extends React.Component {

    render () {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <Form.Group controlId="formBasicUser">
                                <Form.Label>Usuario: </Form.Label>
                                <Form.Control type="text" placeholder="Usuario" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password: </Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="button" href="./login" onClick={ this.handleClick}>
                                Iniciar Sesion
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        );
    }
}

export default Login;