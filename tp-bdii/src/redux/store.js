import {createStore, applyMiddleware} from "@reduxjs/toolkit";
import reducers from './reducer';
import userReducer from './userSlice';
import reduxThunk from 'redux-thunk';

export default createStore(
    reducers,
    // reducer: {
    //     user: userReducer,
    // },
    {}, //estado inicial
    applyMiddleware(reduxThunk)
);