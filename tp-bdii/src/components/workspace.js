import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//import ExecuteWindow from './execute_window';
import ResultsTable from './results_table';
import ResultsWindow from './results_window';
//import QueryCount from '../components/query_count';
import useToken from '../functions/useToken';
import useWorkspace from '../functions/useWorkspace';
import useResults from '../functions/useResults';

const methods = require('../functions/server');

const getCounter = async(user) => {
    return await methods.counter(user);
}

export default function Workspace(){

    const [command, setCommand] = useState();
    const [count, setCount] = useState();
    const {workspace, setWorkspaces} = useWorkspace();
    const {results, setResults} = useResults();
    const {token, setToken} = useToken();

    getCounter(token.user)
        .then(res => {
            setCount(res);
            console.log(count);
        })

    const sendCommand = async () => {
        if (command){
            var split = command.split(" ", 3);
            var op = split[0];
            var key = split[1];
            var value = command.slice(op.length + key.length + 2);
            
            const commandAns = await methods.command(workspace, op, key, value, token.user);
            getCounter(token.user);
            console.log(commandAns);
            setResults(commandAns);
        }
    }

    const Results = () => {
        if (results){
            return(
                <Card className="bg-dark text-white">
                    <Card.Body>
                        <Card.Title>Comando</Card.Title>
                        <Card.Text>
                            { results }
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        }
        return null;
    }

    return (
        <Container className={'mt-4'}>
            <h1>{workspace}</h1>
            <p> Queries Left: { count } </p>
            <Row>
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
            </Row>
            <Row className={'mt-4'}>
                <Results/>
            </Row>
        </Container>
    );
}