import { uuid, name } from "./generic";
import { taskDraft, task } from './task';
import { Guid } from 'guid-typescript';
import OrderedType from "./OrderedObject";
import { taskState } from './state';
import { OrderedObject } from './OrderedObject';

interface ICard {
    id: uuid;
    name: name;
    description: string;
    tasks: uuid[];
    labels: uuid[];
    comments: uuid[];
    book: uuid;
}

interface ICardDraft {
    localId: uuid;
    name: string;
    book: uuid;
}

export type card = ICard;

export type cardDraft = ICardDraft;

export function rename(card: card, name: string): card {
    return { ...card, name };
}

export function changeDescription(card: card, description: string): card {
    return { ...card, description };
}

export function addTask(card: card, taskId: uuid): card {
    const newTasks = [ ...card.tasks, taskId ];
    return { ...card, tasks: newTasks };
}

export function removeTask(card: card, taskId: uuid): card {
    const newTasks = card.tasks.filter( (id: uuid) => id !== taskId );
    return { ...card, tasks: newTasks };
}

export function addLabel(card: card, labelId: uuid): card {
    const newLabels = [ ...card.tasks, labelId ];
    return { ...card, labels: newLabels };
}

export function removeLabel(card: card, labelId: uuid): card {
    const newLabels = card.labels.filter( (id: uuid) => id !== labelId );
    return { ...card, labels: newLabels };
}

export function getName(card: card){
    return card.name;
}

export function  getLabels(card: card){
    return card.labels;
}

export function getDescription(card: card){
    return card.description;
}

export function getComments(card: card){
    return card.comments;
}

export function getTasks(card: card){
    return card.tasks;
}

export function createTaskDraft(card: card): taskDraft {
    const localId = Guid.create().toString();
    return { localId, name: "Untitled Task", active: false, card: card.id };
}

export function doneTasks(card: card, tasks: OrderedObject<task>): number {
    const taskIds = card.tasks;
    const mapF = (task: task) => task.active
    const reducer = 
        (prev: number, current: uuid) => {
            const t = OrderedType.get(tasks, current)
                        .map(mapF)
                        .getOrElse(false)
            return t ? prev + 1 : prev;
        }
    return taskIds.reduce(reducer, 0);
}

export function totalTasks(card: card): number {
    return card.tasks.length;
}

export default { 
    rename,
    changeDescription,
    addTask,
    removeTask,
    addLabel,
    removeLabel,
    getName,
    getLabels,
    getDescription,
    getComments,
    getTasks,
    createTaskDraft,
    doneTasks,
    totalTasks,
};