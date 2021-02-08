import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { login } from "../redux/userSlice"
import axios from 'axios';
import '../css/index.module.css';
import { useDispatch } from  'react-redux'

const methods = require('../functions/server');

async function loginUser(username, password){
    const data = JSON.stringify({
        user: username,
        password: password
    });

    var config = {
        method: 'post',
        url: '/login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data: data
    };
      

    return axios(config)
        .then( (result) => {
            alert('Sesion Iniciada');
            return result.data;
        })
        .catch( error => {
            alert(`Ha ocurrido un error: ${error}`);
        });
}


function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch(); 
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(
            login({
                username: username,
                password: password,
        }))
        const userToken = await methods.login(username, password);
        setToken(userToken);
    }
    
    return (
        <Form onSubmit={ handleSubmit } >
            <Container>
                <Row className="justify-content-center">
                    <Col md={4}>
                        <Form.Group controlId="formBasicUser">
                            <Form.Label>Usuario: </Form.Label>
                            <Form.Control 
                                type="text"
                                name="username"
                                value={ username } 
                                placeholder="Usuario"
                                onChange={ e => setUserName(e.target.value) } 
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control 
                                type="password" 
                                name="password"
                                value={ password } 
                                placeholder="Password" 
                                onChange={ e => setPassword(e.target.value) } 
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Iniciar Sesion
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default Login;