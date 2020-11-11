import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


export default class ExecuteWindow extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Comando</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="Comando" />
                <InputGroup.Append>
                    <Button variant="info">Ejecutar</Button>
                </InputGroup.Append>
            </InputGroup>
        );
    }
}