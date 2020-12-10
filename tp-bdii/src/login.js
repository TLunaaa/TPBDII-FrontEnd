import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { 
    useHistory, 
    useLocation, 
} from 'react-router';
import { authContext } from './auth';
import axios from 'axios';

import './css/index.module.css';

class Login extends React.Component {
    
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

    handleSubmit(event){
        event.preventDefault();
        const data = JSON.stringify({
            user: this.state.user,
            password: this.state.password
        });

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
            })
            .catch( error => {
                alert(`Ha ocurrido un error: ${error}`);
            });
        
        this.setState({ toLogin: true });
    }

    render (){
        return (
            <Form onSubmit={ this.handleSubmit } >
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <Form.Group controlId="formBasicUser">
                                <Form.Label>Usuario: </Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="username"
                                    value={ this.state.username } 
                                    placeholder="Usuario"
                                    onChange={ this.handleChange } 
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password: </Form.Label>
                                <Form.Control 
                                    type="password" 
                                    name="password"
                                    value={ this.state.password } 
                                    placeholder="Password" 
                                    onChange={ this.handleChange } 
                                />
                            </Form.Group>
                            <LoginButton condition={ () => this.getToLogin() }/>
                        </Col>
                    </Row>
                </Container>
            </Form>
        );
    }
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