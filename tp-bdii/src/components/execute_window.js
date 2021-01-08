import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import useToken from '../functions/useToken';
import useWorkspace from '../functions/useWorkspace';
import useResults from '../functions/useResults';

const methods = require('../functions/server');

export default function ExecuteWindow(props){

    const [command, setCommand] = useState();
    const {token, setToken} = useToken();
    const {workspace, setWorkspace} = useWorkspace();
    const {results, setResults} = useResults();
    
    const sendCommand = async () => {
        var split = command.split(" ", 3);
        var op = split[0];
        var key = split[1];
        var value = command.slice(op.length + key.length + 2);
        
        const commandAns = await methods.command(workspace, op, key, value, token.user);
        console.log(commandAns);
        setResults(commandAns);
    }

    return(
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>Comando</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
                as="textarea"
                aria-label="Comando" 
                value={ command }
                onChange={e => setCommand(e.target.value)}    
            />
            <InputGroup.Append>
                <Button 
                    variant="info"
                    onClick={ () => sendCommand() }
                >
                    Ejecutar
                </Button>
            </InputGroup.Append>
        </InputGroup>
    );
}