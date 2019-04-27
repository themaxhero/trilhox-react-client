import { uuid, name } from "./generic";

interface ITask {
    id: uuid;
    name: name;
    card: uuid;
    active: boolean;
}

interface ITaskDraft {
    localId: uuid;
    name: string;
    active: boolean;
    card: uuid;
}

export type task = ITask;

export type taskDraft = ITaskDraft;

export function rename(task: task, name: string): task {
    return { ...task, name };
}

export function toggle(task: task): task {
    return { ...task, active: !task.active };
}

export function getName(task: task){
    return task.name;
}

export function getValue(task: task){
    return task.active;
}

export default { rename, toggle, getName, getValue };