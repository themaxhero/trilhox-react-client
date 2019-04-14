import React from "react";
import Books from "./Books";
import { connect } from "react-redux";
import { state } from "../../initialState";
import CardEditor from "../CardEditor";

function Kanban({ kanbanId, kanbans }: any){
    const kanban = kanbans.get(kanbanId);
    const style = {
        backgroundImage: `url(${kanban.background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    return (<div className="Kanban" style={ style }>
                <CardEditor/>
                <h2 className="Kanban-title">{ kanban.name }</h2>
                <Books kanbanId={ kanbanId } kanban={ kanban }/>
            </div>)
    }

function mapToStateProps(state: state){
    return {
        kanbans: state.kanbans,
    }
}

export default connect(mapToStateProps)(Kanban);