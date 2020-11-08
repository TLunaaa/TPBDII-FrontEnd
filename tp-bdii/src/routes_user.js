import React from 'react';
import { 
    Switch, 
    Route
} from 'react-router-dom';

export default class Routes extends React.Component {
    render () {
        return (
            <Switch>
                <Route path="/login" component={ Login } />
            </Switch>
        );
    }
}