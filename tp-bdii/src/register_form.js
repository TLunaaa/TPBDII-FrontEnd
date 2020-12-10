import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/index.module.css';
import axios from 'axios';

class RegisterForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            username: '',
            password: '',
            password_rpt: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ 
            ...this.state, 
            [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        const data = JSON.stringify({
            user: this.state.user,
            password: this.state.password,
            name: this.state.name,
            surname: this.state.surname,
            mail: this.state.email
        });

        var config = {
            method: 'post',
            url: '/register',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then( (result) => {
                alert('Usuario registrado');
            })
            .catch( error => {
                alert(`Ha ocurrido un error: ${error}`);
            });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Nombre: </Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="name"
                                    value={ this.state.name }
                                    placeholder="Juan" 
                                    onChange={ this.handleChange } 
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicLastName">
                                <Form.Label>Apellido: </Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="surname"
                                    value={this.state.surname}
                                    placeholder="Perez"
                                    onChange={ this.handleChange } 
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email: </Form.Label>
                                <Form.Control 
                                    type="email"
                                    name="email"
                                    value={ this.state.email }
                                    placeholder="example@example.com" 
                                    onChange={ this.handleChange }
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formBasicUser">
                                <Form.Label>Usuario: </Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="username"
                                    value={ this.state.username }
                                    placeholder="JuanPerez123"
                                    onChange={ this.handleChange } 
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Contraseña: </Form.Label>
                                <Form.Control 
                                    type="password" 
                                    name="password"
                                    value={ this.state.password }
                                    placeholder="Contraseña" 
                                    onChange={ this.handleChange }
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPasswordRepeat">
                                <Form.Label>Repetir contraseña: </Form.Label>
                                <Form.Control 
                                    type="password"
                                    name="password_rpt"
                                    value={ this.state.password_rpt }
                                    placeholder="Contraseña" 
                                    onChange={ this.handleChange }   
                                />
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