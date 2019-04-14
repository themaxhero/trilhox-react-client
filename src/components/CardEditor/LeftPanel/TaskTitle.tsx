import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { state } from "../../../initialState";
import FormControl from "react-bootstrap/FormControl";
import { uuid } from "../../../types/generic";

function TaskTitle({page, changeEditingName, checkTask, taskId, task}: any){
    const editing = page.params.editingTasks.include(taskId);
    if (!editing){
        return (<div 
                    onClick={checkTask(taskId)}
                    className="CardEditor-task"
                >
                    {task.name}
                </div>);
    }
    return (<FormControl onChange={changeEditingName} value={task.name}/>)
}

function mapToStateProps(state: state){
    return {page: state}
}


function mapDispatchToProps(dispatch: Dispatch){
    return {
        changeEditingName: (event: any) =>
            dispatch({type: "CHANGE_EDITING_TASK_NAME",
                      payload: {event}}),
        checkTask: (taskId: uuid) => 
            dispatch({type: "CHECK_TASK", payload: {taskId}}),
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(TaskTitle);