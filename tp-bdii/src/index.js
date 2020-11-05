import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './register_form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <Container fluid>
        <Row>
            <Col lg={5} xl={5}>
                <div> Falopa que hizo tomi </div>
            </Col>
            <Col lg={7} xl={7}>
                <RegisterForm />
            </Col>
        </Row>
    </Container>,
    document.getElementById('root')
);