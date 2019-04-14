import React from "react";
import { uuid } from "./types/generic";
import Navbar from "./components/Navbar";
import Container from 'react-bootstrap/Container';
import Home from "./components/Home";
import { Dispatch } from "redux";
import "./App.css";
import { state }from "./initialState"
import { connect } from "react-redux";

function App({ user, kanbans, openKanban, newKanban, enterDeleteMode }: any){
  return (
    <div className="App">
      <Navbar 
        user={user} 
        newKanban={newKanban} 
        enterDeleteMode={enterDeleteMode}
      />
      <Container className="App-contents">
        <Home
          user={user}
          kanbans={kanbans}
          openKanban={openKanban}
        />
      </Container>
      </div>
  )
}

function mapToStateProps(state: state) {
  return { user: state.user,
           kanbans: state.kanbans
         }
};

function mapDispatchToProps(dispatch: Dispatch){
  return {
    openKanban: (id: uuid) => dispatch({ type: "OPEN_KANBAN", payload: id }),
    newKanban: () => dispatch({ type: "CREATE_KANBAN" }),
    enterDeleteMode: () => dispatch({ type: "ENTER_DELETE_KANBAN_MODE" }),
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(App);
