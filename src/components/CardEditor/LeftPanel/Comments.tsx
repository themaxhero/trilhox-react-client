import React from "react";
import { connect } from "react-redux";
import { state } from "../../../initialState";
import Comment from "./Comment";

function Comments({list, comments}: any){
    return (<div className="Comments">
            {list.map((commentId: any) => {
                const comment = comments.get(commentId);
                if (!comment){
                    return <div/>
                }
                return <Comment commentId={commentId} comment={comment}/>
            })}
            </div>)
}

function mapToStateProps(state: state){
    return {
        comments: state.comments,
    }
}

export default connect(mapToStateProps)(Comments);