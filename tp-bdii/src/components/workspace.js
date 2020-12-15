import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ExecuteWindow from './execute_window';
import ResultsTable from './results_table';
import ResultsWindow from './results_window';

export default class Workspace extends React.Component {
    render() {
        return (
            <Container className={'mt-4'}>
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
}