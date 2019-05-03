import { loop, Cmd } from "redux-loop";
import { taskState as state } from '../type/state';
import { action } from '../type/action';

export function task(state: state, { type, payload }: action){
    return loop(state, Cmd.none);
}
