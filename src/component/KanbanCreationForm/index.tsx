import React from "react";
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Component({}){
    // FIXME: ASSIGN THE PROPER DISPATCHS
    const onChangeName = () => {};
    const onChangeBg = () => {};
    const onSubmit = () => {};
    const onCancel = () => {};
    return (
        <Form onSubmit={ onSubmit }>
            <FormControl 
                placeholder="Kanban`s name"
                onChange={ onChangeName }/>
            <FormControl 
                placeholder="Kanban's background url"
                onChange={ onChangeBg }/>
            <Button variant="primary" onClick={ onSubmit }>
                Submit
            </Button>
            <Button variant="danger" onClick={ onCancel }>
                Cancel
            </Button>
        </Form>
    )
}

export default Component;