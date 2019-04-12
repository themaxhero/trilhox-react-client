import { Action } from "redux";
import { loop, Cmd } from "redux-loop";

const initialState = {
    a: "a",
    b: "b",
}

type state = typeof initialState;

function userReducer(state: state = initialState, action: Action){
    switch (action.type){
        case "TEST":
            return loop(state, Cmd.none);
        default:
        return loop(state, Cmd.none);
    }
}

export default userReducer;