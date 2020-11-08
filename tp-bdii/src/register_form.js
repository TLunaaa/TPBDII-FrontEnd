import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/index.css';

class RegisterForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ value: event.tagert.value });
    }

    handleSubmit(event){
        alert('Usuario Registrado');
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Nombre: </Form.Label>
                                <Form.Control type="text" placeholder="Juan" />
                            </Form.Group>
                            <Form.Group controlId="formBasicLastName">
                                <Form.Label>Apellido: </Form.Label>
                                <Form.Control type="text" placeholder="Perez" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email: </Form.Label>
                                <Form.Control type="email" placeholder="example@example.com" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formBasicUser">
                                <Form.Label>Usuario: </Form.Label>
                                <Form.Control type="text" placeholder="JuanPerez123" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Contraseña: </Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPasswordRepeat">
                                <Form.Label>Repetir contraseña: </Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={3}>
                            <Button variant="primary" type="submit">
                                Registrarse
                            </Button>
                        </Col>
                    </Row>  
                </Container>
            </Form>
        )
    }
}


export default RegisterForm;