import React from "react";
import Card from "../../type/card";
import { uuid } from '../../type/generic';
import Label from "../CardLabel";
import { state } from '../../type/state';
import { connect } from "react-redux";
import OrderedType, { OrderedObject } from '../../type/OrderedObject';
import { card } from '../../type/card';
import { task } from "../../type/task";
import { label } from '../../type/label';

interface IProps {
    card: card;
    tasks: OrderedObject<task>;
    labels: OrderedObject<label>;
}

function Component({ card, tasks, labels }: IProps){
    const name = Card.getName(card);
    const labelIds = Card.getLabels(card);
    const doneTasks =  Card.doneTasks(card, tasks);
    const totalTasks = Card.totalTasks(card);
    const mapFunction = (labelId: uuid) => {
        const label = OrderedType.get(labels, labelId).toNullable();
        return label ? <Label key={ labelId } label={ label }/> : <div/>
    };
    const renderedLabels = labelIds.map(mapFunction)
    const barStyle = {
        width: `${ doneTasks / totalTasks }%`,
        height: "100%",
        backgroundColor: "#008800",
    }
    return (
        <div className="card-container bg-light shadow-sm rounded">
            <div>{ renderedLabels }</div>
            <div>{ name }</div>
            <div className="progress-bar">
                <div>{`${ doneTasks }/${ totalTasks }`}</div>
                <div className="progress-bar" style={ barStyle }/>
            </div>
        </div>
    )
}

function mapStateToProps(state: state){
    return {
        tasks: state.task.tasks,
        labels: state.label.labels,
    }
}

export default connect(mapStateToProps)(Component);