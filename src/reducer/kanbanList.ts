import { loop, Cmd } from "redux-loop";
import { kanbanListState as state } from '../type/state';
import { action } from '../type/action';

const initialState = {
    deleteMode: false,
    deletingKanban: undefined,
}

function cancelDeletion(state: state, payload: any){
    return loop({ ...state, deletingKanban: undefined }, Cmd.none);
}

function askForDeletion(state: state, payload: any){
    return loop({ ...state, deletingKanban: payload.kanban }, Cmd.none);
}

function toggleDeleteMode(state: state, payload: any){
    return loop({ ...state, deleteMode: !state.deleteMode }, Cmd.none);
}

function reset(state: state, payload: any){
    return loop(initialState, Cmd.none);
}

export function kanbanList(state: state = initialState, { type, payload }: action){
    switch (type){
        case "KANBAN_LIST/CANCEL_DELETION":
            return cancelDeletion(state, payload);

        case "KANBAN_LIST/ASK_FOR_DELETION":
            return askForDeletion(state, payload);

        case "KANBAN_LIST/TOGGLE_DELETE_MODE":
            return toggleDeleteMode(state, payload);

        case "KANBAN_LIST/RESET_DELETION":
            return reset(state, payload);
        
        default:
            return loop(state, Cmd.none);
    }
}
