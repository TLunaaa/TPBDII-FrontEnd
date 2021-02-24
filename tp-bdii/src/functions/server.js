import axios from 'axios';

export const login = (username, password) => {
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
      

    return axios(config)
        .then( (result) => {
            return result.data;
        })
        .catch( error => {
            alert(`Ha ocurrido un error: ${error}`);
        });
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

export const workspaces = (username) => {
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
/*
Completar
*/
export const createWorkspace = (username) => {

    var config = {
        method: 'post',
        url: '/users/' + username + '/workspaces',
        headers: { 
          'Content-Type': 'application/json'
        },
    };

    return axios(config)
        .then((result) => {
            alert('Workspace Creado');
            return result.data;
        })
        .catch(error => {
            alert(`Ha ocurrido un error: ${error}`);
        });
}

export const deleteWorkspace = (username, workspace) => {
    const data = JSON.stringify({
        user: username,
    });

    var config = {
        method: 'delete',
        url: '/workspaces/' + workspace,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };

    return axios(config)
        .then((result) => {
            alert(`Workspace: ${workspace} eliminado`);
            return result.data;
        })
        .catch(error => {
            alert(`Ha ocurrido un error: ${error}`);
        });
}

export const shareWorkspace = (username, workspace, colaborator) => {
    const data = JSON.stringify({
        owner: username,
        workspace: workspace,
    });

    var config = {
        method: 'patch',
        url: '/users/' + colaborator + '/workspaces',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };

    return axios(config)
        .then((result) => {
            alert(`User ${colaborator} added to Workspace: ${workspace}`);
        })
        .catch(error => {
            alert(`Ha ocurrido un error: ${error}`);
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

export const getHistory = (username, workspace) => {
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

export const executeCommand = (workspace, op, key, value, username) => {
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