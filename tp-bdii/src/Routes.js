import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom';
import RegisterForm from './register_form';
import Login from './login';

export default class Routes extends React.Component {
    render () {
        return (
            <Switch>
                <Route path="/login" component={ Login } />
                <Route path="/register_form" component= { RegisterForm }/>
            </Switch>
        );
    }
}