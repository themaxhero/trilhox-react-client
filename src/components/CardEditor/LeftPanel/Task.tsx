import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { state } from "../../../initialState";
import { uuid } from "../../../types/generic";
import TaskTitle from "./TaskTitle";

function Task({page, taskId, task, checkTask}: any){
    const name = page.params.taskName;
    if (!name){
        return (<div/>)
    }
    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Checkbox onChange={checkTask(taskId)}/>
            </InputGroup.Prepend>
            <TaskTitle taskId={taskId} task={task}/>
        </InputGroup>)
}

function mapToStateProps(state: state){
    return {page: state}
}

function mapDispatchToProps(dispatch: Dispatch){
    return {
        checkTask: (taskId: uuid) => 
            dispatch({type: "CHECK_TASK", payload: {taskId}})
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(Task);