import React from "react";
import { connect } from "react-redux";
import { state } from "../../../initialState";
import Title from "./Title";
import Description from "./Description";
import TaskList from "./TaskList";
import CommentBuilder from "./CommentBuilder";
import Comments from "./Comments";

function LeftPanel({cardId, cards}: any){
    const card = cards.get(cardId);
    if (!card){
        return (<div></div>);
    }
    return (<div className="CardEditor-left-panel">
                <Title cardId={cardId} name={card.name}/>
                <h2>Description:</h2>
                <Description cardId={cardId} text={card.description}/>
                <h2>Tasks:</h2>
                <TaskList list={card.tasks}/>
                <h2>Add a Comment:</h2>
                <CommentBuilder/>
                <h2>Comments:</h2>
                <Comments list={card.comments}/>
            </div>);
}

function mapToStateProps(state: state){
    return {
        cards: state.cards,
    }
}

export default connect(mapToStateProps)(LeftPanel);