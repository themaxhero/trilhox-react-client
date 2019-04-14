import React from "react";
import { connect } from "react-redux";

function TaskProgress({doneTasks, maxTasks }: any){
    const barStyle = {
        backgroundColor: "#00AA00",
        width: `${ doneTasks / maxTasks }%`,
    }
    if (maxTasks > 0){
        return (<div className="TaskProgress-container">
                    <div>
                        { doneTasks } / { maxTasks }
                    </div>
                    <div className="Card-bar">
                        <div className="Card-bar" style={ barStyle }/>
                    </div>
                </div>
        )
    } else {
        return (<div/>)
    }
}

export default TaskProgress;