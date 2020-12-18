import React from 'react';
import { Redirect, useHistory } from 'react-router';
import Row from 'react-bootstrap/Row';
import CustomSideBar from '../components/sidebar';

import styles from '../css/index.module.css';
import Workspace from '../components/workspace';
import { Container, Col } from 'react-bootstrap';
import useToken from '../functions/useToken';

const methods = require('../functions/server');

export default function MainClient() {

    const logOut = () => {
        localStorage.clear();
    }

    const {token, setToken} = useToken();

    console.log(token.name);
    const workspaces = methods.workspaces(token.user);

    return (
        <div style={{ height: '100%' }} className={'bg-secondary'}>
            <Container style={{ height: '100%' }} className={'mx-0 px-0'}>
                <Row  style={{ height: '100%' }}>
                    <Col>
                        <CustomSideBar className='fill-window'
                            workspaces={ workspaces } 
                            onClick={ logOut }
                        />
                    </Col>
                    <Col md={8}>
                        <Workspace />
                    </Col>
                </Row>
            </Container>
        </div> 
    );
}