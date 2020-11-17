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

import './css/index.module.css';

function Login () {

    let history = useHistory();
    let location = useLocation();
    let auth = useContext(authContext);
  
    let { from } = location.state || { from: { pathname: "/home" } };
    let login = () => {
        auth.signin(() => {
            history.replace(from);
        });
    }

    return (
        <Form>
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
                        <Button variant="primary" type="button" onClick={ login }>
                            Iniciar Sesion
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default Login;