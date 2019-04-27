import React from "react";
import Card, { card } from '../../type/card';
import { task } from "../../type/task";
import { uuid } from '../../type/generic';
import OrderedType, { OrderedObject } from '../../type/OrderedObject';
import Task from "./task";
import { state } from '../../type/state';
import { connect } from "react-redux";

interface IProps {
    card: card;
    tasks: OrderedObject<task>;
}

function Component({ card, tasks }: IProps){
    const taskIds = Card.getTasks(card);
    const mapTask = (id: uuid) => {
        const task = OrderedType.get(tasks, id).toNullable();
        return task ? <Task key={id} id={id} task={task}/> : <div/>
    };
    const renderedTasks = taskIds.map(mapTask);
    return (
        <div>
            <div>Tasks: </div>
            { renderedTasks }
        </div>
    );
}

function mapStateToProps(state: state){
    return {
        tasks: state.task.tasks,
    }
}

export default connect(mapStateToProps)(Component);