import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import MainClient from './screens/main_client';
import useToken from './functions/useToken';

import './css/index.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.scss';

import { Provider } from 'react-redux';
import store from "./redux/store"


function App() {

    const { token, setToken } = useToken();
    console.log(token);
    if(token == null){
        return <Routes setToken={ setToken } />
    }
    else {
        return <MainClient />
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);