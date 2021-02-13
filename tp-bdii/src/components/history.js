import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import useWorkspace from '../functions/useWorkspace';
import useToken from '../functions/useToken';

import { getHistory } from '../functions/server';

export default function HistoryTable() {

    const [history, setHistory] = useState([]);
    const {workspace, setWorkspace} = useWorkspace();
    const {token, setToken} = useToken();

    
    useEffect(async () => {
        let result = await getHistory(token.user, workspace);
        setHistory(result);
    }, []);
    
    if (history.length > 0) 
    return (
        <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Query</th>
                    <th>Resultado</th>
                    <th>Workspace</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(item => {
                            //console.log('Hola');
                            //console.log(item);
                            return (
                                <tr>
                                    <td>{item.query}</td>
                                    <td>{item.result}</td>
                                    <td>{item.workspace}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        );
    else 
        return null;
}
