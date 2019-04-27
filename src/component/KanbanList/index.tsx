import React from "react";
import OrderedType, { OrderedObject } from '../../type/OrderedObject';
import { kanban } from '../../type/kanban';
import { state } from "../../type/state";
import { connect } from "react-redux";
import { uuid } from '../../type/generic';
import Image from "react-bootstrap/Image";

interface IProps {
    kanbans: OrderedObject<kanban>
}

function Component({ kanbans }: IProps){
    //FIXME: MAKE PROPER DISPATCH HERE
    const openKanban = (id: uuid) => {};
    const kanbanIds = kanbans.allKeys;
    const KanbanThumb = (kanban: kanban) => {
        const onClick = () => openKanban(kanban.id);
        <div onClick={ onClick } >
            <Image 
                src={ kanban.background } 
                thumbnail/>
        </div>
    }
    const mapKanbans = (id: uuid) => {
        const kanban = OrderedType.get(kanbans, id).toNullable();
        return kanban ? KanbanThumb(kanban) : <div/>
    }
    return <div>{ kanbanIds.map(mapKanbans) } </div>;    
}

function mapStateToProps(state: state){
    return {
        kanbans: state.kanban.kanbans,
    }
}

export default connect(mapStateToProps)(Component);