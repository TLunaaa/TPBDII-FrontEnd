import React from 'react';
import { 
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom';
import RegisterForm from '../screens/register_form';
import Login from '../screens/login';
import MainClient from '../screens/main_client';
import {
    ProvideAuth,
    PrivateRoute,
    AuthButton
} from '../auth';

export default class Routes extends React.Component {

    render () {
        return (
            <ProvideAuth>
                <Router>
                    <AuthButton />
                    <Switch>
                        <Route path="/login" render={ (props) => <Login onClick={ () => this.props.onClick() } /> } />
                        <Route path="/register_form" component={ RegisterForm }/>
                        <PrivateRoute path="/home">
                            <MainClient />
                        </PrivateRoute>
                    </Switch>
                </Router>
            </ProvideAuth>
        );
    }
}