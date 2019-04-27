import React from "react";
import Label, { label } from '../../type/label';
import { uuid } from '../../type/generic';

interface IProps {
    id: uuid;
    label: label;
}

function Component({ id, label }: IProps){
    //FIXME: Make onClick to assign label to given card
    const name = Label.getName(label);
    const style = { backgroundColor: Label.getColor(label) }
    return (
        <div
            className="text-white p1em"
            style={ style }>
                { name }
        </div>
    );
}

export default Component;