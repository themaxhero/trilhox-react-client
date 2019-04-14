import React from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux"
import { Dispatch } from "redux";
import { state } from "../../initialState";
import { uuid } from "../../types/generic";

function RightPanel({ openLabelSelect,
                      startCheckList,
                      selectCardDestiny,
                      deleteCard,
                      page
                    }: any){
    const cardId = page.params.cardId;
    const bookId = page.params.bookId;
    if (!cardId || !bookId){
        return (<div/>)
    }
    return (
        <div className="CardEditor-right-panel">
            <div className="CardEditor-add-to-card">
                <div>Add to the card</div>
                <Button 
                    variant="secondary"
                    onClick={openLabelSelect(cardId, bookId)}
                >
                Labels
                </Button>
                <Button 
                    variant="secondary"
                    onClick={startCheckList(cardId)}
                >
                Checklist
                </Button>
            </div>
            <div className="CardEditor-actions">
                <div>Actions</div>
                <Button 
                    variant="secondary"
                    onClick={selectCardDestiny(cardId)}
                >
                Move
                </Button>
                <Button 
                    variant="secondary"
                    onClick={deleteCard(cardId)}
                >
                Delete
                </Button>
            </div>
        </div>
    )
}

function mapToStateProps(state: state){
    return {
        page: state.page,
    }
}

function mapDispatchToProps(dispatch: Dispatch){
    return {
        openLabelSelect: (cardId: uuid, bookId: uuid) => 
            dispatch({type: "OPEN_LABEL_SELECT",
                      payload: {cardId, bookId} }),
        startCheckList: (cardId: uuid) => 
            dispatch({type: "START_CHECKLIST",
                      payload: {cardId}}),
        selectCardDestiny: (cardId: uuid) =>
            dispatch({type: "SELECT_CARD_DESTINY",
                      payload: {cardId}}),
        deleteCard: (cardId: uuid) =>
            dispatch({type: "DELETE_CARD",
                      payload: {cardId}})
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(RightPanel);