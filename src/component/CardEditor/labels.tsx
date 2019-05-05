import React from "react";
import { uuid } from "../../type/generic";
import Card, { card } from '../../type/card';
import OrderedType, { OrderedObject } from '../../type/OrderedObject';
import { label } from "../../type/label";
import LabelAssigner from "../LabelAssigner";
import { state } from '../../type/state';
import { connect } from "react-redux";

interface IProps{
    card: card;
    labels: OrderedObject<label>;
}

function Component({ card, labels }: IProps){
    const labelIds = Card.getLabels(card);
    const mapLabel = (id: uuid) => {
        const label = OrderedType.get(labels, id).toNullable();
        return label ? <LabelAssigner key={id} id={id} label={label}/> : <div/>;
    };
    const renderedLabels = labelIds.map(mapLabel);
    return (
        <div>
            <div>Labels: </div>
            { renderedLabels }
        </div>
    );
}

function mapStateToProps(state: state){
    return {
        labels: state.label.labels,
    }
}

export default connect(mapStateToProps)(Component);