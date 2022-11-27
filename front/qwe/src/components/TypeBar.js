import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Container, ListGroup} from "react-bootstrap";
const TypeBar = observer(() => {
    const  {device} = useContext(Context)
    return (
        <Container >
            {device.types.map(type=>
            <button
                className="custom-btn btn-8"
                active={type.id === device.selectedType.id}
                onClick={()=> device.setSelectedType(type)}
                key={type.id}
            >
                <span>{type.name}</span>
            </button>
            )}
        </Container>
    );
});

export default TypeBar;