import { loop, Cmd } from "redux-loop";
import { userState as state } from '../type/state';
import { action } from '../type/action';

export function user(state: state, { type, payload }: action){
    return loop(state, Cmd.none);
}
