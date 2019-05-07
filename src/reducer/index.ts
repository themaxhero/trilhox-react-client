import { combineReducers } from "redux-loop";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { book } from "./book";
import { card } from "./card";
import { comment } from "./comment";
import { kanban } from "./kanban";
import { kanbanCreationForm } from "./kanbanCreationForm";
import { label } from "./label";
import { landing } from "./landing";
import { member } from "./member";
import { register } from "./register";
import { task } from "./task";
import { user } from "./user";

export default (history: History<any>) => {
    const reducerMap = {
        book,
        card,
        comment,
        kanban,
        kanbanCreationForm,
        label,
        landing,
        member,
        register,
        task,
        user,
        router: connectRouter(history),
    };
    return combineReducers(reducerMap as any);
}