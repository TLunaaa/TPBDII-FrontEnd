import React from 'react';
import { 
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom';
import RegisterForm from '../screens/register_form';
import Login from '../screens/login';
import NavBar from './navbar';

export default class Routes extends React.Component {

    constructor(props){
        super(props);
    }

    render () {
        return (
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/login" render={ (props) => <Login setToken={ this.props.setToken } /> } />
                    <Route path="/register_form" component={ RegisterForm }/>
                </Switch>
            </Router>
        );
    }
}