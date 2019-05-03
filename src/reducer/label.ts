import { loop, Cmd } from "redux-loop";
import { labelState as state } from '../type/state';
import { action } from '../type/action';

export function label(state: state, { type, payload }: action){
    return loop(state, Cmd.none);
}
