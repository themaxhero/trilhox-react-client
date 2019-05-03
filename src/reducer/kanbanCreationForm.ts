import { loop, Cmd } from "redux-loop";
import { kanbanCreationFormState as state } from "../type/state";
import { action } from "../type/action";
import { push } from "connected-react-router";

const initialState: state = {
    name: undefined,
    background: undefined,
}

function nameChange(state: state, payload: any){
    const name = payload.name === "" ?  undefined : payload.name;
    return loop({...state, name}, Cmd.none);
}

function bgChange(state: state, payload: any){
    const background =
        payload.background === "" ?  undefined : payload.background;
    return loop({...state, background }, Cmd.none);
}

function cancel(state: state, payload: any){
    const cmd = Cmd.action(push("/kanbans"));
    return loop(initialState, cmd);
}

export function kanbanCreationForm(state: state = initialState,
                                   { type, payload }: action){
    switch(type){
        case "KANBANDRAFT/NAME_CHANGE":
            return nameChange(state, payload);

        case "KANBANDRAFT/BG_CHANGE":
            return bgChange(state, payload);

        case "KANBANDRAFT/CANCEL":
            return cancel(state, payload);

        default:
            return loop(state, Cmd.none);
    }
}