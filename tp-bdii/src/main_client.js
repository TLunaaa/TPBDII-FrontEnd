import React from 'react';
import { useHistory } from 'react-router';
import NavBarUser from './navbar_user';
import { useAuth } from './auth';


export default function MainClient() {

    let auth = useAuth();
    let history = useHistory();

    return (
        <NavBarUser onClick={ () => {
            auth.signout( () => history.push("/home"));
        } }/>
    );
}