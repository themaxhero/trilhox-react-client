import React, { DialogHTMLAttributes } from "react";
import "./index.css";
import { Mutation } from "react-apollo";
import { Dispatch } from "redux";
import OrderedType, { OrderedObject } from '../../type/OrderedObject';
import { kanban } from '../../type/kanban';
import { state } from "../../type/state";
import { connect } from "react-redux";
import { uuid } from '../../type/generic';
import Navbar from "../Navbar";
import Image from "react-bootstrap/Image";
import gql from "graphql-tag";
import { 
    askForDeletion,
    cancelDeletion,
    reset,
} from '../../action/kanbanList';
import { Query } from "react-apollo";
import { push } from "connected-react-router";
import Modal from "../Modal";

const GET_KANBANS_THUMB = gql`
    query {
        allMyKanbans{
            id,
            background,
            name
        }
    }
`

const DELETE_KANBAN = gql`
    mutation removeKanban($id: ID!){
        removeKanban(id: $id)
    }
`

interface IProps {
    onOpenKanban: (id: uuid) => void;
    onCancelDeletion: () => void;
    onAskForDeletion: (kanban: kanban) => void;
    onReset: () => void;
    deletingKanban: kanban | undefined;
    deleteMode: boolean;
}

function Component({ onOpenKanban,
                     onAskForDeletion,
                     onReset,
                     deleteMode,
                     deletingKanban,
                     onCancelDeletion,
                   }: IProps){
    const deletionDialog = (kanban: kanban) => {
        if (!deleteMode){
            return <div/>
        }
        const title = `Delete Kanban ${ kanban.name }`;
        const msg = "Are you sure?";
        const confirmVariant: "danger" = "danger";
        const confirm = (callback: () => void) =>  {
            return {
                text: "Delete",
                variant: confirmVariant,
                callback,
            }
        }
        const cancelVariant: "primary" = "primary";
        const cancel = () => {
            return {
                text: "Cancel",
                variant: cancelVariant,
                callback: onCancelDeletion,
            }
        }
        return (
            <Mutation mutation={DELETE_KANBAN}>
                {(deleteKanban: (input: any) => void, { data }: any) => {
                    const onConfirm = () => {
                        deleteKanban({ variables: { id: kanban.id } });
                        onReset();
                    };
                    const buttons = [
                        confirm(onConfirm),
                        cancel()
                    ];
                    return (
                        <Modal 
                            title={ title }
                            msg={ msg }
                            buttons={ buttons }/>
                    )
                }}
            </Mutation>
        )
    }
    const KanbanThumb = (kanban: kanban) => {
        const style = {
            width: "320px",
            height: "180px",
        };
        const onClick = deleteMode ? 
            () => onAskForDeletion(kanban)
            : () => onOpenKanban(kanban.id);
        return (
            <div
                style={ style }
                key={ kanban.id }
                className="kanban-thumb"
                onClick={ onClick }>
                <Image 
                    src={ kanban.background } 
                    width="320px"
                    height="180px"
                    thumbnail/>
                <div className="kanban-thumb-title">
                    { kanban.name }
                </div>
            </div>
        );
    };
    const mapKanbans = (kanban: any) => {
        return kanban ? KanbanThumb(kanban) : <div/>
    };
    return (
        <Query query={GET_KANBANS_THUMB}>
            {
                ({ loading, error, data }: any) => {
                    if (loading) return <div>Loading...</div>
                    if (error) return <div>{ error.message }</div>
                    console.log(data);
                    const { allMyKanbans } =  data;
                    const emptyKanbanList: boolean = allMyKanbans.length < 1;
                    return (
                        <div>
                            { deletingKanban ?
                                deletionDialog(deletingKanban)
                                : <div/> 
                            }
                            <Navbar emptyKanbanList={emptyKanbanList}/>
                            <div className="p1em">
                                { allMyKanbans.map(mapKanbans) }
                            </div>
                        </div>
                    )
                }
            }
        </Query>
    );
}

function mapStateToProps(state: state){
    return {
        deleteMode: state.kanbanList.deleteMode,
        deletingKanban: state.kanbanList.deletingKanban,
    }
}

function mapDispatchToProps(dispatch: Dispatch<any>){
    return {
        onOpenKanban: (id: uuid) => dispatch(push(`/kanban/${id}`)),
        onCancelDeletion: () => dispatch(cancelDeletion()),
        onAskForDeletion: (kanban: kanban) => dispatch(askForDeletion(kanban)),
        onReset: () => dispatch(reset()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);