import React from "react";
import { Dispatch } from "redux";
import OrderedType, { OrderedObject } from '../../type/OrderedObject';
import { kanban } from '../../type/kanban';
import { state } from "../../type/state";
import { connect } from "react-redux";
import { uuid } from '../../type/generic';
import Image from "react-bootstrap/Image";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_KANBANS_THUMB = gql`
    query {
        allMyKanbans{
            id,
            background,
            name
        }
    }
`

interface IProps {
    openKanban: (id: uuid) => void;
}

function Component({ openKanban }: IProps){
    //FIXME: MAKE PROPER DISPATCH HERE
    const KanbanThumb = (kanban: kanban) => {
        return (
            <div onClick={ () => openKanban(kanban.id) }>
                <Image src={ kanban.background } thumbnail/>
            </div>
        );
    }
    const mapKanbans = (kanban: any) => {
        return kanban ? KanbanThumb(kanban) : <div/>
    }
    const kanbans: any[] = [];
    return (
        <Query query={GET_KANBANS_THUMB}>
            {
                ({ loading, error, data }: any) => {
                    console.log("Rendering Kanban List");
                    if (loading) return <div>Loading...</div>
                    if (error) return <div>{ error.message }</div>
                    console.log(data);
                    return (
                        <div>
                            { kanbans.map(mapKanbans) }
                        </div>
                    )
                }
            }
        </Query>
    );
}

function mapDispatchToProps(dispatch: Dispatch<any>){
    return {
        openKanban: () => dispatch({type: "FIXME:"}),
    }
}

export default connect(null, mapDispatchToProps)(Component);