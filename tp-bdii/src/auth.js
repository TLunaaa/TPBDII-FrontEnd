import React, { useContext, createContext, useState } from 'react';
import { 
    Route,
    Redirect,
    useHistory,
} from 'react-router-dom';
import NavBar from './navbar';

const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const authContext = createContext();

function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

function useAuth() {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = cb => {
        return fakeAuth.signin(() => {
            setUser("user");
            cb();
        });
    };

    const signout = cb => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signin,
        signout
    };
}

function AuthButton() {
    let auth = useAuth();
    
    if (!auth.user)
        return <NavBar />;
    else 
        return null;
    /*
    return auth.user ? (
        <MainClient onClick={ () => {
            auth.signout( () => history.push("/"));
        } } />
    ) : (
        <NavBar />
    );
    */
}

function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
            auth.user ? (
                children
            ) : (
                <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
                />
            )
            }
        />
    );
  }

export {
    ProvideAuth,
    AuthButton,
    PrivateRoute,
    useAuth
}