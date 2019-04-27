import React from 'react';
import Label, { label } from '../../type/label';

interface IProps {
    label: label;
}

function Component({ label }: IProps){
    const color = Label.getColor(label);
    const style = { backgroundColor: color, fontSize: "8px" };
    return (
        <div className="rounded text-white" style={ style }>
            { Label.getName(label) }
        </div>
    );
}

export default Component;
