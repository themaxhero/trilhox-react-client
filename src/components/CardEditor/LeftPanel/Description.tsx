import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { state } from "../../../initialState";
import { uuid } from "../../../types/generic";

function Description({ cardId,
                       page,
                       text,
                       changeDescription,
                       enterDescriptionEditing
                     }: any){
    const editing = page.params.isEditingDescription;
    const editingDesc = page.params.editingDescription;
    if (!editing){
        return <div 
                    className="CardEditor-description"
                    onClick={enterDescriptionEditing(cardId)}
                >
                    {text}
                </div>
    }
    return (<InputGroup>
                <FormControl 
                    as="textarea"
                    onChange={changeDescription}
                    value={editingDesc} />
            </InputGroup>)
}

function mapToStateProps(state: state){
    return {page: state.page}
}

function mapDispatchToProps(dispatch: Dispatch){
    return {
        changeDescription: (event: any) => 
            dispatch({type: "CHANGE_CARD_DESCRIPTION", payload: {event}}),
        confirmDescription: () =>
            dispatch({type: "CONFIRM_CARD_DESCRIPTION"}),
        enterDescriptionEditing: (cardId: uuid) =>
            dispatch({type: "ENTER_CARD_DESCRIPTION_EDITING",
                      payload: {cardId}
                     }),
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(Description);