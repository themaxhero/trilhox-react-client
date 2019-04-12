import { combineReducers } from "redux-loop";
import kanban from "./kanban";
import user from "./user";

const reducers = combineReducers({kanban, user});

export default reducers;