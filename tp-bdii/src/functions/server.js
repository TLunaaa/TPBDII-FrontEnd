import axios from 'axios';

export const login = (username, password) => async (dispatch) => {
    const data = JSON.stringify({
        user: username,
        password: password
    });

    var config = {
        method: 'post',
        url: '/login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data: data
    };

    const result = await axios.post(config);

    dispatch({
        type: 'traer_usuarios',
        payload: result.data
    })

    // return axios(config)
    //     .then( (result) => {
    //         dispatch({
    //             type: 'traer_usuarios',
    //             payload: result.data
    //         })
    //         alert('Sesion Iniciada');
    //         return result.data;
    //     })
    //     .catch( error => {
    //         alert(`Ha ocurrido un error: ${error}`);
    //     });
}

export const register = (username, password, name, surname, email) => {
    const data = JSON.stringify({
        user: username,
        password: password,
        name: name,
        surname: surname,
        mail: email
    });

    var config = {
        method: 'post',
        url: '/register',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };

    return axios(config)
        .then((result) => {
            alert('Usuario registrado');
            return result.data;
        })
        .catch(error => {
            alert(`Ha ocurrido un error: ${error}`);
        });
}

export const getWorkspaces = (username) => {
    var config = {
        method: 'get',
        url: '/users/' + username + '/workspaces',
        headers: { 
          'Content-Type': 'application/json'
        },
    };

    return axios(config)
        .then((result) => {
            return result.data;
        })
        .catch(error => {
            alert(`Ha ocurrido un error Workspace: ${error}`);
        })
}

export const counter = (username) => {
    var config = {
        method: 'get',
        url: '/users/' + username + '/counter',
        headers: { 
          'Content-Type': 'application/json'
        },
    };

    return axios(config)
        .then((result) => {
            return result.data;
        })
        .catch(error => {
            alert(`Ha ocurrido un error Counter: ${error}`);
        })
} 

export const history = (username, workspace) => {
    var config = {
        method: 'get',
        url: '/users/' + username + '/history?workspaceId=' + workspace,
        headers: { 
          'Content-Type': 'application/json'
        },
    };

    return axios(config)
        .then((result) => {
            return result.data;
        })
        .catch(error => {
            alert(`Ha ocurrido un error History: ${error}`);
        })
}

export const command = (workspace, op, key, value, username) => {
    const data = JSON.stringify({
        operation: op,
        key: key,
        value: value,
        user: username,
    });

    var config = {
        method: 'post',
        url: '/workspaces/' + workspace + '/query',
        headers: { 
          'Content-Type': 'application/json'
        },
        data: data
    };
      

    return axios(config)
        .then( (result) => {
            return result.data;
        })
        .catch( error => {
            alert(`Ha ocurrido un error Command: ${error}`);
        });
}