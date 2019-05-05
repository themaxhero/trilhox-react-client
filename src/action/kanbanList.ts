import { kanban } from "../type/kanban";

export function toggleDeleteMode(){
    return { type: "KANBAN_LIST/TOGGLE_DELETE_MODE" };
}

export function cancelDeletion(){
    return { type: "KANBAN_LIST/CANCEL_DELETION" }
}

export function askForDeletion(kanban: kanban){
    return { type: "KANBAN_LIST/ASK_FOR_DELETION", payload: { kanban } }
}

export function reset(){
    return { type: "KANBAN_LIST/RESET_DELETION" };
}