import React from "react";
import { connect } from "react-redux";
import { state } from "../../../initialState";
import Task from "./Task";

function TaskList({list, tasks}: any){
    return (<div className="CardEditor-task-list">
                {list.map((taskId: any) => {
                    const task = tasks.get(taskId);
                    if (!task){
                        return <div/>
                    }
                    return <Task taskId={taskId} task={task}/>
                })
                }
            </div>)
}

function mapToStateProps(state: state){
   return {tasks: state.tasks} 
}


export default connect(mapToStateProps)(TaskList);