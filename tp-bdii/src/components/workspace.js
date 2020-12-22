import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useWorkspace from '../functions/useWorkspace';
import ExecuteWindow from './execute_window';
import ResultsTable from './results_table';
import ResultsWindow from './results_window';

export default function Workspace(){

    const {workspace, setWorkspaces} = useWorkspace();

    return (
        <Container className={'mt-4'}>
            <h1>{workspace}</h1>
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