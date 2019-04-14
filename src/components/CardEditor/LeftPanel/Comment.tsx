import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { uuid } from "../../../types/generic";
import { state } from "../../../initialState";
import Image from "react-bootstrap/Image";
import CommentContent from "./CommentContent";

function Comment({ page,
                   commentId,
                   comment,
                   users
                }: any){
    const editing = (page.params.editingComment === commentId);
    return (<div className="Comment">
                { comment.author.map((id: uuid) => {
                    const author = users.get(id);
                    if (!author){
                        return <div/>
                    }
                    <div className="Comment-container">
                        <div className="Comment-avatar">
                            <Image 
                                src={author.avatar}
                                width="48px"
                                height="48px"
                                roundedCircle/>
                        </div>
                        <CommentContent
                            editing={editing} 
                            comment={comment}
                        />
                    </div>
                  }
                )}
            </div>)
}

function mapToStateProps(state: state){
    return {
        users: state.users,
        page: state.page,
    }
}

function mapDispatchToProps(dispatch: Dispatch){
    return {
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(Comment)