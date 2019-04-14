import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { state } from "../../../initialState";
import { uuid } from "../../../types/generic";
import FormControl from "react-bootstrap/FormControl";

function Title({page, 
                name,
                cardId,
                startEditingName,
                confirmName,
                changeEditingName
               }: any){
    const editingName = page.params.editingName;
    if (!editingName){
        return (<div 
                    className="CardEditor-card-title"
                    onClick={startEditingName(cardId)}
                >
                    {name}
                </div>)
    }
    return (<div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Card Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                        placeholder="Card's title"
                        onChange={changeEditingName} 
                        value={name}/>
                </InputGroup>
                <div 
                    className="fas fa-check"
                    onClick={confirmName()}
                />
            </div>)

}

function mapToStateProps(state: state){
    return {page: state.page}
}

function mapDispatchToState(dispatch: Dispatch){
    return {
        startEditingName: (cardId: uuid) => 
            dispatch({type: "START_EDITING_CARD_NAME", payload: {cardId}}),
        changeEditingName: (event: any) =>
            dispatch({type: "CHANGE_EDITING_CARD_NAME", payload: {event}}),
        confirmName: () =>
            dispatch({type: "CONFIRM_CARD_NAME"})
    }
}

export default connect(mapToStateProps, mapDispatchToState)(Title);