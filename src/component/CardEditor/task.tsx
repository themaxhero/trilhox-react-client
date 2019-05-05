import React from "react";
import Task, { task } from '../../type/task';
import { uuid } from '../../type/generic';
import Form from 'react-bootstrap/Form';

interface IProps {
    id: uuid;
    task: task;
}

function Component({id, task}: IProps){
    //FIXME: The right dispatch to the following callback.
    const onChange = () => {};
    const name = Task.getName(task);
    const value = Task.getValue(task);
    return (
        <Form>
            <Form.Check
                onChange={ onChange }
                checked={ value }
                type="checkbox"/>
            <Form.Check.Label>{ name }</Form.Check.Label>
        </Form>
    );
}

export default Component;