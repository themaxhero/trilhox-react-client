import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { connect } from "react-redux";
import { state } from "../../type/state";
import { Dispatch } from "redux";
import { toggleDeleteMode } from '../../action/kanbanList';
import { push } from "connected-react-router";

interface IProps {
    pathname: string;
    emptyKanbanList: boolean;
    deleteMode: boolean;
    onToggleDeleteMode: () => void;
    onClickCreateKanban: () => void;
}

function Component({ pathname,
                     emptyKanbanList,
                     deleteMode,
                     onToggleDeleteMode,
                     onClickCreateKanban,
                   }: IProps){
    const searchBar = (
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="primary">Search</Button>
        </Form>
    );
    const deleteModeButton = () => {
        if (emptyKanbanList){
            return <div/>;
        }
        return (
            <Button
                className="mr-2"
                variant="outline-danger"
                onClick={ onToggleDeleteMode }>
                { deleteMode ? "Cancel" : "Delete Kanban" }
            </Button>
        );
    }
    const kanbansRelated = (
        <Nav>
            <Nav className="ml-auto">
                <Button 
                    className="mr-2"
                    onClick={ onClickCreateKanban }
                    variant="outline-primary">New Kanban</Button>
                { !emptyKanbanList ? deleteModeButton() : <div/> }
            </Nav>
            { searchBar }
        </Nav>
    )
    const pageButton = (path: string, name: string) => {
        return (
            <Nav.Link to={ path } active={ pathname === path }>
                { name }
            </Nav.Link>
        )
    }
    const pages = () => {
        return (
            <Nav className="mr-auto">
                { pageButton("/kanbans", "Kanbans") }
            </Nav>
        )
    }
    const pageRelated = () => {
        switch (pathname){
            case "/kanbans":
                return kanbansRelated;
            default:
                return <div/>;
        }
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Nav.Link className="navbar-brand" to="/">Trilho X</Nav.Link>
            { pages() }
            { pageRelated() }
        </Navbar>
    );
}

function mapStateToProps(state: state){
    return {
        pathname: state.router.location.pathname,
        deleteMode: state.kanbanList.deleteMode,
    }
}

function mapDispatchToProps(dispatch: Dispatch<any>){
    return {
        onToggleDeleteMode: () => dispatch(toggleDeleteMode()),
        onClickCreateKanban: () => dispatch(push("/kanbans/new")),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);