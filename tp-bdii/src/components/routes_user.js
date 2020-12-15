import React from 'react';
import { 
    Switch, 
    Route
} from 'react-router-dom';

export default class RoutesUser extends React.Component {
    render () {
        return (
            <Switch>
                <Route path="/"/>
            </Switch>
        );
    }
}