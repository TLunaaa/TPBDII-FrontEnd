import axios from 'axios';

//action types
export const SET_USER = 'SET_USER'
export const SET_WORKSPACE = 'SET_WORKSPACE'
export const ADD_WORKSPACE = 'ADD_WORKSPACE'
export const GET_WORKSPACE = 'GET_WORKSPACE'

//action creators
export const getWorkspace = (username) => async (dispatch) => {
    const response = await axios.get('/users/' + username + '/workspaces');
    dispatch({
        type: 'getWorkspace',
        payload: response.data
    })
}

export const setUser = user => ({
    type: SET_USER,
    payload: user,
})

export const setWorkspace = workspace => ({
    type: SET_WORKSPACE,
    payload: workspace,
})

export const addWorkspace = workspace => ({
    type: ADD_WORKSPACE,
    payload: workspace,
})