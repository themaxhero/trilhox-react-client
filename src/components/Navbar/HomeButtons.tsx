import React from "react";
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import { state } from "../../initialState";
import { connect } from "react-redux";
import { Dispatch } from "redux";

function HomeButtons({page, newKanban, enterDeleteMode}: any){
    switch(page.type){
        case "HOME":
        return (<Nav>
                    <Button 
                        variant="outline-info"
                        onClick={ newKanban() }
                        className="Navbar-rBtn"
                    >
                        New Kanban
                    </Button>
                    <Button
                        variant="outline-info"
                        onClick={ enterDeleteMode() }
                        className="Navbar-rBtn"
                    >
                        Delete Kanban
                        </Button>
                </Nav>)
        default:
        return (<div/>)
    }
}

function mapToStateProps(state: state){
    return {
        page: state.page,
    }
}

function mapDispatchToProps(dispatch: Dispatch){
    return {
        newKanban: () => dispatch({type: "CREATE_NEW_KANBAN"}),
        enterDeleteMode: () => dispatch({type: "ENTER_KANBAN_DELETE_MODE"})
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(HomeButtons);