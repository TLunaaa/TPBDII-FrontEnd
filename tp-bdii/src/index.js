import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import MainClient from './screens/main_client';
import useToken from './functions/useToken';

import './css/index.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.scss';


function App() {

    const { token, setToken } = useToken();
    if(token == null){
        return <Routes setToken={ setToken } />
    }
    else {
        return <MainClient />
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);