import { loop, Cmd } from "redux-loop";
import { state } from '../type/state';
import { action } from '../type/action';

export function book(state: state, { type, payload }: action){
    return loop(state, Cmd.none);
}