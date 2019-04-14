import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { state } from "../../../initialState";

function CommentContent({ page,
                          editing, 
                          comment,
                          changeEditingComment,
                          confirmCommentChanges
                        }: any){
    const editingCommentContent = page.params.editingCommentContent;
    if (!editing || !editingCommentContent){
        return <div className="Comment-content">{comment.content}</div>
    }
    return (<div className="Comment-editing">
                <FormControl 
                    as="textarea" 
                    onChange={changeEditingComment}
                    value={editingCommentContent}/>
                <Button
                    className="Comment-save"
                    onClick={confirmCommentChanges()}
                    variant="primary">
                    Save
                </Button>
            </div>)
}

function mapToStateProps(state: state){
    return {
        page: state.page,
    };
}

function mapDispatchToProps(dispatch: Dispatch){
    return {
        changeEditingComment: (event: any) =>
            dispatch({type: "CHANGE_EDITING_COMMENT", payload: {event}}),
        confirmCommentChanges: () =>
            dispatch({type: "CONFIRM_COMMENT_CHANGES"})
    };
}

export default connect(mapToStateProps, mapDispatchToProps)(CommentContent);