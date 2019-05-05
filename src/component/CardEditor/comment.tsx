import React from "react";
import Comment, { comment } from "../../type/comment";
import { uuid } from "../../type/generic";

interface IProps{
    id: uuid,
    comment: comment;
}

function Component({id, comment}: IProps){
    const content = Comment.getContent(comment);
    return (
        <div>
            <div>USER AVATAR HERE</div>
            <div>
                <div>{ content }</div>
                <div>ACTION BUTTONS HERE</div>
            </div>
        </div>
    )
}

export default Component;