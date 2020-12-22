import React from 'react';
import Table from 'react-bootstrap/Table';
import useResults from '../functions/useResults';

export default function ResultsTable() {

    const {results, setResults} = useResults();

    if (results) 
        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Clave</th>
                    <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>Bird</td>
                    </tr>
                </tbody>
            </Table>
        );
    else 
        return null;
}
