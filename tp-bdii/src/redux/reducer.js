import { combineReducers } from 'redux'

import { SET_USER, SET_WORKSPACE, ADD_WORKSPACE} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const userReducer = (state = {}, action) => {
    switch (action.type){
        case SET_USER:
            return merge(state, action.payload)
        case SET_WORKSPACE:
            return merge(state, {prevWorkspace: action.payload})
        default: 
            return state
    }
}

const workspaceReducer = (state = [], action) => {
    switch (action.type){
        case ADD_WORKSPACE:
            return [...state, action.payload]
        default: 
            return state
    }
}

const reducer = combineReducers({
    user: userReducer,
    workspace: workspaceReducer,
})

export default reducer