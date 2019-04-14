import React from "react";
import { Dispatch } from "redux";
import "./index.css"
import { IKanban } from "../../types/kanban";
import TaskProgress from "./TaskProgress";
import { state } from "../../initialState";
import { uuid } from "../../types/generic";
import { connect } from "react-redux";

function Card({ cardId, card, cards, tasks, openCard }: any){
    const maxTasks = () => cards.get(cardId).tasks.length;
    var doneTasks = 0;
    const func = (v: any, k: string, map: Map<string, IKanban>) => { 
        if (!card.tasks.includes(k)){
            return;
        }
        const task = tasks.get(k);
        if (!task || !task.completed === true){
            return;
        }
        doneTasks++
    }
    return (<div className="Card-container" onClick={ openCard(cardId) }>
                <div className="Card-labels"/>
                <div className="Card-name">
                    { card.name }
                </div>
                <TaskProgress doneTasks={doneTasks} maxTasks={maxTasks()}/>
            </div>)
}

function mapToStateProps(state: state){
    return {cards: state.cards,
            tasks: state.tasks
           }
}

function mapDispatchToProps(dispatch: Dispatch){
    return{
        openCard: (id: uuid) => dispatch({type: "OPEN_CARD", payload: {id}})
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(Card);