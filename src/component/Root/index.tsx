import React from "react";
import { Store } from "redux";
import { Provider, connect } from "react-redux";
// eslint-disable-next-line 
import { BrowserRouter as _, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import Navbar from "../App";
import KanbanList from '../KanbanList';
import Landing from "../Landing";
import Register from "../Register";
import { ApolloClient } from "apollo-boost";
import { state } from "../../type/state";

interface IProps {
    store: Store<any>,
    history: History,
    client: ApolloClient<any>,
    token: string | undefined,
}

function Root({ store, history, client, token }: IProps){
    console.log(`Token: ${token}`);
    const loggedIn = (
        <Switch>
            <Route path="/" component={ KanbanList } exact/>
            <Route path="/kanbans" component={ KanbanList }/>
        </Switch>
    );
    const loggedOut = (
        <Switch>
            <Route path="/" component={ Landing } exact/>
            <Route path="/login" component={ Landing } exact/>
            <Route path="/register" component={ Register } exact/>
        </Switch>
    );
    return (
        <ApolloProvider client={ client }>
            <Provider store={ store }>
                <Navbar/>
                <ConnectedRouter history={ history }>
                    { token ? loggedIn : loggedOut }
                </ConnectedRouter>
            </Provider>
        </ApolloProvider>
    );
}

function mapStateToProps(state: state){
    return { token: state.landing.token };
}

export default connect(mapStateToProps)(Root);