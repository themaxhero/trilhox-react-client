import React from "react";
import Card, { card } from "../../type/card";
import { comment } from "../../type/comment";
import { uuid } from "../../type/generic";
import OrderedType, { OrderedObject } from '../../type/OrderedObject';
import Comment from "./comment";
import { state } from '../../type/state';
import { connect } from "react-redux";

interface IProps {
    card: card;
    comments: OrderedObject<comment>;
}

function Component({ card, comments }: IProps){
    const commentIds = Card.getComments(card);
    const mapComment = (id: uuid) => {
        const comment = OrderedType.get(comments, id).toNullable();
        return comment ? <Comment key={id} id={id} comment={comment}/> : <div/>;
    };
    const renderedCommets = commentIds.map(mapComment);
    return (
        <div>
            <div>Comment Builder HERE</div>
            <div>Comments: </div>
            <div>{ renderedCommets }</div>
        </div>
    );
}

function mapStateToProps(state: state){
    return {
        comments: state.comment.comments,
    }
}

export default connect(mapStateToProps)(Component);