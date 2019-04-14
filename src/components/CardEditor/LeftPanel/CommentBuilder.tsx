import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux"
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import { state } from "../../../initialState";
import { uuid } from "../../../types/generic";

function CommentBuilder({page, user, changeCommentDraft, postComment}: any){
    const draftCommentContent = page.params.commentDraft;
    return (<InputGroup>
                <InputGroup.Prepend>
                    <Image src={user.avatar} roundedCircle/>
                </InputGroup.Prepend>
                    <FormControl 
                        as="textarea"
                        onChange={changeCommentDraft}
                        value={draftCommentContent} />
            </InputGroup>)
}

function mapToStateProps(state: state){
    return {
        user: state.user,
    }
}

function mapDispatchToProps(dispatch: Dispatch){
    return {
        changeCommentDraft: (event: any) => 
            dispatch({type: "CHANGE_COMMENT_DRAFT", payload: {event}}),
        postComment: (cardId: uuid) =>
            dispatch({type: "POST_COMMENT", payload: {event}})
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(CommentBuilder);