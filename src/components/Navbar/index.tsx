import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import HomeButtons from "./HomeButtons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { state } from "../../initialState";

function Topbar({ user, newKanban, enterDeleteMode }: any){
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand className="mr-auto" href="#home">Trilho X</Navbar.Brand>
    <HomeButtons/>
      <Nav>
        <Image className="Navbar-rBtn Navbar-avatar"
          src={ user.avatar }
          width="48px"
          height="48px"
          roundedCircle
        />
      </Nav>
  </Navbar>
  );
}

function mapToStateProps(state: state){
    return {

    }
}

function mapDispatchToProps(dispatch: Dispatch){
    return {
        newKanban: () => dispatch({type: "CREATE_KANBAN"}),
        enterDeleteMode: () => dispatch({type: "DELETE_KANBAN_MODE"}),
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(Topbar);