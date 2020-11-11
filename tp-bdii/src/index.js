import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

import './css/index.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.scss';


class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            logged: false,
        }
    }

    changeLogin (){
        this.setState({ 
            logged: true 
        });
    }

    logOut (){
        this.setState({
            logged: false
        });
    }

    render (){
        return (
            <Routes />
        );
    }
/*
   render (){
        if (!this.state.logged){
            return (
                <Router>
                    <NavBar />
                    <Routes onClick={ () => this.changeLogin() } />
                </Router>
            )
        }
        else {
            return (
                <Router>
                    <MainClient />
                    <RoutesUser />
                </Router>
            );
        }
    }
*/
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);