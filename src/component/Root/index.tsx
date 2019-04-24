import React from "react";
import { Store } from "redux";
import { Provider } from "react-redux";
// eslint-disable-next-line 
import { BrowserRouter as _, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import Navbar from "../App";
import { state } from '../../type/state';
import App from '../App';

interface IRootProps {
    store: Store<state>,
    history: History,
}

type props = IRootProps;

function Root({ store, history }: props){
    return(
        <Provider store={ store }>
            <Navbar/>
            <ConnectedRouter history={ history }>
                <Switch>
                    <Route path="/" component={ App } exact/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    )
}

export default Root;