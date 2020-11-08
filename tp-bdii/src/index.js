import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './navbar';

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <Router>
        <NavBar />
        <Routes />
    </Router>,
    document.getElementById('root')
);