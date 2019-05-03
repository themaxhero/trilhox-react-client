import { loop, Cmd } from "redux-loop";
import { memberState as state } from '../type/state';
import { action } from '../type/action';

export function member(state: state, { type, payload }: action){
    return loop(state, Cmd.none);
}
