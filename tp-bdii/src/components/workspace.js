import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

import HistoryTable from './history';
import useToken from '../functions/useToken';
import useWorkspace from '../functions/useWorkspace';
import useResults from '../functions/useResults';

import { shareWorkspace, counter, executeCommand, deleteWorkspace, workspaces } from '../functions/server';


const getCounter = async(user) => {
    return await counter(user);
}

export default function Workspace(){
    
    const {workspace, setWorkspace} = useWorkspace();
    const {results, setResults} = useResults();
    const {token, setToken} = useToken();
    
    const [command, setCommand] = useState();
    const [count, setCount] = useState();
    const [show, setShow] = useState(false);
    const [colaborator, setColaborator] = useState();
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const callShareWorkspace = async () => {
        const result = await shareWorkspace(token.user, workspace, colaborator);
        setShow(false);
    }

    //Habria que setear un nuevo workspace al eliminar el activo
    const callDeteleWorspace = async () => {
        const restult = await deleteWorkspace(token.user, workspace);
        const workspaceArray = await workspaces(token.user);
        window.location.reload();
        //Se setea el primer workspace como activo;
        setWorkspace(workspaceArray[0]);
    }

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
            
            const commandAns = await executeCommand(workspace, op, key, value, token.user);
            getCounter(token.user)
                .then(res => {
                    setCount(res);
                })
            setResults(commandAns);
        }
    }

    const Results = () => {
        if (results){
            return(
                <Card className="bg-dark text-white">
                    <Card.Body>
                        <Card.Title>Resultado</Card.Title>
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Colaborador</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Nombre de Usuario:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            aria-label="Small" 
                            aria-describedby="inputGroup-sizing-sm"
                            value={ colaborator }
                            onChange={ e => setColaborator(e.target.value) }
                        />
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button 
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Cerrar
                    </Button>
                    <Button 
                        variant="primary"
                        onClick={ callShareWorkspace }
                    >
                        Compartir
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row>
                <Col md={8}>
                    <h1>{workspace}</h1>
                    <p> Queries Left: { count } </p>
                </Col>
                <Col md={2}>
                    <Button 
                        variant="success"
                        onClick={ handleShow }
                    >
                        Colaborador
                    </Button>
                </Col>
                <Col md={2}>
                    <Button 
                        variant="danger"
                        onClick={ callDeteleWorspace }
                    >
                        Eliminar
                    </Button>
                </Col>
            </Row>
            <Row>
                <h5>Ejemplos de Operaciones:</h5>
            </Row>
            <Row>
                <Button variant="info" className="m-3" onClick={ () => setCommand('get hello') }>Get Hello</Button>
                <Button variant="info" className="m-3" onClick={ () => setCommand('set hello world!')}>Set Hello World!</Button>
                <Button variant="info" className="m-3" onClick={ () => setCommand('delete hello')}>Delete Hello</Button>
                <Button variant="info" className="m-3" onClick={ () => setCommand('exists hello')}>Exists Hello</Button>
            </Row>
            <Row mt={4} className={'mt-4'}>
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
            <Row className={'mt-4'} 
                style={{
                    height: '300px',
                    overflow: 'scroll'
                }}
            >
                <Col md={6}>
                    <Results/>
                </Col>
                <Col md={6}>
                    <HistoryTable/>
                </Col>
            </Row>
        </Container>
    );
}