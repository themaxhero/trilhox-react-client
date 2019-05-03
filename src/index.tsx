import React from "react";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from 'apollo-link-http';
import { setContext } from "apollo-link-context";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getCookie } from "./utils";
import './index.css';
import Root from './component/Root';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import { install } from "redux-loop";
import logger from "redux-logger";
import reducers from "./reducer";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const enhancer = composeWithDevTools(
    install(),
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(logger),
);

const reducer = reducers(history);

const store = createStore(reducer, enhancer);

const uri = "http://localhost:4600/api";

const ws = "ws://localhost:4600/graphql";

const httpLink = createHttpLink({ uri });
  
const authLink = setContext((_: unknown, { headers }: any) => {
  const token = localStorage.getItem("token");
  const authorization = token ? `Bearer ${token}` : null;
  return { headers: { ...headers, authorization } };
});

const link = authLink.concat(httpLink);

const cache  = new InMemoryCache();

const client = new ApolloClient({ cache, link });

const element = <Root client={ client } store={ store } history={ history }/>;

const renderOnElement = document.getElementById('root');

render(element, renderOnElement);

serviceWorker.unregister();
