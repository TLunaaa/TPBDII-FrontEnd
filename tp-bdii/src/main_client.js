import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import NavBarUser from './navbar_user';
import { authContext } from './auth';
import Row from 'react-bootstrap/Row';
import CustomSideBar from './sidebar';

import styles from './css/index.module.css';
import Workspace from './workspace';
import { Container, Col } from 'react-bootstrap';

export default function MainClient() {

    let auth = useContext(authContext);
    let history = useHistory();

    return (
        <div style={{ height: '100%' }} className={'bg-secondary'}>
            <Container style={{ height: '100%' }} className={'mx-0 px-0'}>
                <Row  style={{ height: '100%' }}>
                    <Col>
                        <CustomSideBar className='fill-window' 
                            onClick={ () => {
                                auth.signout( () => history.push("/login"));
                            } }
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