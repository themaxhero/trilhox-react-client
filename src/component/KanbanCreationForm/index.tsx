import React from "react";
import "./index.css"
import { Mutation } from "react-apollo";
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import gql from "graphql-tag";
import { Dispatch } from "redux";
import { name, url } from "../../type/generic";
import { 
    draftKanbanNameChange,
    draftKanbanBgChange,
    draftKanbanCancel,
    reset,
} from "../../action/kanbanCreationForm";
import { state } from "../../type/state";
import { connect } from "react-redux";

const CREATE_KANBAN = gql` 
mutation {
    createKanban(input: $input){
        id,
        name,
        background,
        author {
            id
        }
    }
}
`

interface IProps{
    name?: name;
    background?: url;
    onChangeName: (e: any) => void;
    onChangeBg: (e: any) => void;
    onResetForm: () => void;
    onCancel: () => void;
}

function Component({ name,
                     background,
                     onChangeName,
                     onChangeBg,
                     onResetForm,
                     onCancel,
                   }: IProps){
    // FIXME: ASSIGN THE PROPER DISPATCHS
    const onSubmit = (createKanban: Function) => {
        return (e: any) => {
            if (name){
                const variables = { 
                    input: { name, background: background ? background : null },
                };
                e.preventDefault();
                createKanban( { variables } );
                onResetForm();
            }
        }
    };
    return (
        <Mutation mutation={ CREATE_KANBAN }>
            {(createKanban: Function, { data }: any) => (
                <div className="kanban-form-container">
                    <div className="black-bg"/>
                    <div className="kanban-form">
                        <div className="bg-dark text-white rounded-top p1em">
                            Create a Kanban
                        </div>
                        <div className="bg-light p1em rounded-bottom">
                            <Form onSubmit={ onSubmit(createKanban) }>
                                <FormControl
                                    className="kd-form-control" 
                                    placeholder="Kanban`s name"
                                    value={ name ? name : "" }
                                    onChange={ onChangeName }/>
                                <FormControl
                                    className="kd-form-control"
                                    placeholder="Kanban's background url"
                                    value={ background ? background : "" }
                                    onChange={ onChangeBg }/>
                                <div className="kd-btn-container">
                                    <Button
                                        className="kd-form-button"
                                        variant="primary"
                                        disabled={ !name || !background }
                                        onClick={ onSubmit(createKanban) }>
                                        Submit
                                    </Button>
                                    <Button
                                        className="kd-form-button"
                                        variant="danger"
                                        onClick={ onCancel }>
                                        Cancel
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            )}
        </Mutation>
    );
}

function mapStateToProps(state: state){
    return {
        name: state.kanbanCreationForm.name,
        background: state.kanbanCreationForm.background,
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>){
    return {
        onChangeName: (e: any) => {
            dispatch(draftKanbanNameChange(e.target.value));
        },
        onChangeBg: (e: any) => {
            dispatch(draftKanbanBgChange(e.target.value));
        },
        onResetForm: () =>{
            dispatch(draftKanbanCancel());
        },
        onCancel: () => {
            dispatch(draftKanbanCancel());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);