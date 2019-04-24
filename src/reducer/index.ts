import { combineReducers } from "redux-loop";
import { connectRouter } from "connected-react-router";
import { History } from "history";

export default (history: History<any>) => {
    return combineReducers({
        router: connectRouter(history),
    } as any)
}