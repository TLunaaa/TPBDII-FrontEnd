import React from 'react';
import NavBarUser from './navbar_user';
import { BrowserRouter as Router } from 'react-router-dom';

export default class MainClient extends React.Component {
    render () {
        return (
            <NavBarUser />
        );
    }
}