import React from "react";
import { connect } from "react-redux";
import { state } from "../../initialState";
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";


function CardEditor({page}: any){
    const cardId = page.params.cardId;
    const bookId = page.params.bookId;
    if (!cardId || !bookId || page.type === "KANBAN"){
        return (<div/>)
    }
    return (
        <div className="Blackground">
            <div className="CardEditor-container">
                <LeftPanel cardId={cardId}/>
                <RightPanel cardId={cardId} bookId={bookId}/>
            </div>
        </div>
    )
}

function mapToStateProps(state: state){
    return {
        page: state.page,
    }
}

export default connect(mapToStateProps)(CardEditor);