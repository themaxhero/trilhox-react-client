import { Action } from "redux";
import { loop, Cmd } from "redux-loop";

const initialState = {
    a: "a",
    b: "b",
}

type state = typeof initialState;

function kanbanReducer(state: state = initialState, _: Action){
    return loop(state, Cmd.none);
}

export default kanbanReducer;