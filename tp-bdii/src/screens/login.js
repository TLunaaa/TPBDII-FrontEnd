import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { 
    useHistory, 
    useLocation, 
} from 'react-router';
import { authContext } from '../auth';
import axios from 'axios';

import '../css/index.module.css';

function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
/*   
    constructor (props){
        super(props);
        this.state = {
            username: '',
            password: '',
            toLogin: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getToLogin() {
        return this.state.toLogin;
    }
    handleChange(event){
        this.setState({ 
            ...this.state, 
            [event.target.name]: event.target.value });
    }
*/
    let history = useHistory();
    let location = useLocation();
    let auth = useContext(authContext);

    let { from } = location.state || { from: { pathname: "/home" } };
    let login = () => {
        auth.signin(() => {
            history.replace(from);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = JSON.stringify({
            user: username,
            password: password
        });
        console.log(data);

        var config = {
            method: 'post',
            url: '/login',
            headers: { 
              'Content-Type': 'application/json'
            },
            data: data
        };
          

        axios(config)
            .then( (result) => {
                alert('Sesion Iniciada');
                login();
            })
            .catch( error => {
                alert(`Ha ocurrido un error: ${error}`);
            });
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

function LoginButton(props) {
    let history = useHistory();
    let location = useLocation();
    let auth = useContext(authContext);
  
    let { from } = location.state || { from: { pathname: "/home" } };
    let login = () => {
        if ( props.condition() )
            auth.signin(() => {
                history.replace(from);
            });
    }
    return (
        <Button variant="primary" type="submit" onClick={ login } >
            Iniciar Sesion
        </Button>
    );
}

export default Login;