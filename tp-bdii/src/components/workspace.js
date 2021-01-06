import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useWorkspace from '../functions/useWorkspace';
import ExecuteWindow from './execute_window';
import ResultsTable from './results_table';
import ResultsWindow from './results_window';
import QueryCount from '../components/query_count';
import useToken from '../functions/useToken';

const methods = require('../functions/server');

const getCounter = async(user) => {
    return await methods.counter(user);
}

export default function Workspace(){

    const {workspace, setWorkspaces} = useWorkspace();
    const {token, setToken} = useToken();
    let count;
    getCounter(token.user)
        .then(res => {
            count = res;
            console.log(count);
        })

    return (
        <Container className={'mt-4'}>
            <h1>{workspace}</h1>
            <QueryCount count={ count }/>
            <Row>
                <ExecuteWindow />
            </Row>
            <Row className={'mt-4'}>
                <Col>
                    <ResultsWindow />
                </Col>
                <Col>
                    <ResultsTable />
                </Col>
            </Row>
        </Container>
    );
}