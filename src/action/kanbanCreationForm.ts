export function draftKanbanNameChange(value: string){
    return { type: "KANBANDRAFT/NAME_CHANGE", payload: { name: value } };
}
export function draftKanbanBgChange(value: string){
    return { type: "KANBANDRAFT/BG_CHANGE", payload: { background: value } };
}

export function reset(){
    return { type: "KANBANDRAFT/RESET" };
}

export function draftKanbanCancel(){
    return { type: "KANBANDRAFT/CANCEL" };
}