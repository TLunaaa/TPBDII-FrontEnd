import React from 'react';
import { useHistory } from 'react-router';
import NavBarUser from './navbar_user';
import { useAuth } from './auth';
import Row from 'react-bootstrap/Row';
import CustomSideBar from './sidebar';

import styles from './css/index.module.css';

export default function MainClient() {

    let auth = useAuth();
    let history = useHistory();

    return (
        <div style={{ height: '100%' }}>
            <CustomSideBar className='fill-window' 
                onClick={ () => {
                    auth.signout( () => history.push("/home"));
                } }
            />
        </div>
    );
}