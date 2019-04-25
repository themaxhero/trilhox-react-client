import { loop, Cmd } from "redux-loop";
import { state } from '../type/state';
import { action } from '../type/action';

export function task(state: state, { type, payload }: action){
    return loop(state, Cmd.none);
}
