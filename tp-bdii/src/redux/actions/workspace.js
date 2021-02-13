import axios from 'axios';
export const getWorkspace = (username) => async (dispatch) => {
    const response = await axios.get('/users/' + username + '/workspaces');
    dispatch({
        type: 'getWorkspace',
        payload: response.data
    })
}