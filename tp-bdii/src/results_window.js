import React from 'react';
import Card from 'react-bootstrap/Card';

export default class ResultsWindow extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Card className="bg-dark text-white">
                <Card.Body>
                    <Card.Title>Comando</Card.Title>
                    <Card.Text>
                        Resultados del Comando
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
