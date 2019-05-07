import { loop, Cmd } from "redux-loop";
import { kanbanState as state } from '../type/state';
import { action } from '../type/action';

export function kanban(state: state, { type, payload }: action){
    return loop(state, Cmd.none);
}
