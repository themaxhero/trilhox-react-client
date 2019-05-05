import React from "react";
import Card, { card } from "../../type/card";
import { InputGroup, Button } from "react-bootstrap";

interface IProps {
    card: card;
}

function Component({ card }: IProps){
    const name = Card.getName(card);
    const editingName = false;
    const nameEditInput = <InputGroup></InputGroup>;
    return (
        <div>{ editingName ? nameEditInput : name }</div>
    );
}

export default Component;