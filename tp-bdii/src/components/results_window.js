import React from 'react';
import Card from 'react-bootstrap/Card';
import useResults from '../functions/useResults';

export default function ResultsWindow() {
    const {results, setResults} = useResults();
    if (results)
        return (
            <Card className="bg-dark text-white">
                <Card.Body>
                    <Card.Title>Comando</Card.Title>
                    <Card.Text>
                        { results }
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    else 
        return null;
}
