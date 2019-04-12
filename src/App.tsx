import React, { Component } from 'react';
import { Dispatch } from "redux";
import logo from "./logo.svg";
import "./App.css";
import { state }from "./initialState"
import { connect } from "react-redux";

function App({ testarRedux }: any){
  return (
    <div className="App">
        <header className="App-header">
          <div className="navbar navbar-light bg-light">
            <div className="navbar-brand mb-0 h1">Navbar</div>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <button onClick={testarRedux}>Test</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  )
}

function mapToStateProps(state: state) {
  return state.a;
}

function mapDispatchToProps(dispatch: Dispatch){
  return {
    testarRedux: () => dispatch({type: "TEST"}),
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(App);
