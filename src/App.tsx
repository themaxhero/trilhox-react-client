import React from "react";
import Navbar from "./components/Navbar";
import PageRouter from "./components/PageRouter";
import { Dispatch } from "redux";
import "./App.css";
import { state }from "./initialState"
import { connect } from "react-redux";

function App({ page, user, kanbans}: any){
  return (
    <div className="App">
      <Navbar user={user}/>
      <div className="App-contents">
        <PageRouter/>
      </div>
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
    enterDeleteMode: () => dispatch({ type: "ENTER_DELETE_KANBAN_MODE" }),
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(App);
