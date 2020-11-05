import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Nombre: </Form.Label>
                                <Form.Control type="text" placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group controlId="formBasicLastName">
                                <Form.Label>Apellido: </Form.Label>
                                <Form.Control type="text" placeholder="Apellido" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address: </Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicUser">
                                <Form.Label>Usuario: </Form.Label>
                                <Form.Control type="text" placeholder="Usuario" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password: </Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPasswordRepeat">
                                <Form.Label>Repeat Password: </Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Registrarse
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}


export default RegisterForm;