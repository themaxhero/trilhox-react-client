import React from "react";
import Button from "react-bootstrap/Button";
import { card } from '../../type/card';

interface IProps {
    card: card;
}

function Component({ card }: IProps){
    return (
        <div>
            <div> Actions: </div>
            <div>
                <Button>
                    Move
                </Button>
                <Button>
                    Delete
                </Button>
            </div>
        </div>
    );
}

export default Component;