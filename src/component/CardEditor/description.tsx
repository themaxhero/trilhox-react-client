import React from "react";
import Card, { card } from '../../type/card';
import { InputGroup, Button } from "react-bootstrap";

interface IProps {
    card: card;
}

function Component({ card }: IProps){
    const description = Card.getDescription(card);
    const editingDesc = false;
    const descEditInput = <InputGroup></InputGroup>;
    return (
        <div>
            <div> Description: </div>
            { editingDesc ? descEditInput : description }
        </div>
    );
}

export default Component;