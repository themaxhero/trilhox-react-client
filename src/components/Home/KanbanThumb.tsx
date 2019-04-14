import React from "react";
import "./index.css";
import Image from 'react-bootstrap/Image';
import { state } from "../../initialState";
import { Dispatch } from "redux";
import { uuid } from "../../types/generic";
import { connect } from "react-redux";

function KanbanThumb({kanbanId, kanban, openKanban}: any){
    return (
        <div onClick={ openKanban(kanbanId) } className="KanbanThumb-container">
            <Image  src={ kanban.background } thumbnail/>
            <div className="KanbanThumb-text">
                { kanban.name }
            </div>
        </div>)
}

function mapToStateProps(_: state){
    return {};
}

function mapDispatchToProps(dispatch: Dispatch){
    return {
        openKanban: (id: uuid) => dispatch({type: "OPEN_KANBAN", payload: {id}}),
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(KanbanThumb);