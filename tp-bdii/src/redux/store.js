import {createStore, applyMiddleware} from "@reduxjs/toolkit";
import reducers from './reducers';
import userReducer from './userSlice';
import reduxThunk from 'redux-thunk';

export default createStore({
    reducer,
    // reducer: {
    //     user: userReducer,
    // },
    {}, //estado inicial
    applyMiddleware(reduxThunk)
});