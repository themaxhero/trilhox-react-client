import { createStore,
         compose,
         Reducer,
         DeepPartial,
         applyMiddleware
} from "redux";
import ApolloClient from "apollo-boost";
import logger from "redux-logger";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import { install } from "redux-loop";
import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import reducers from "./reducers";
import { initialState, state } from "./initialState";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
    uri: "https://localhost:4600/api"
  });

const enhancer = compose( applyMiddleware(logger), install());



const store = createStore(reducers as Reducer,
                          initialState as DeepPartial<state>,
                          enhancer);

render((<ApolloProvider client={client}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApolloProvider>), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
