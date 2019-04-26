import { uuid, name } from "./generic";
import { taskDraft } from "./task";
import { Guid } from 'guid-typescript';

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

export function createTaskDraft(card: card): taskDraft {
    const localId = Guid.create().toString();
    return { localId, name: "Untitled Task", active: false, card: card.id };
}

export default { 
    rename,
    changeDescription,
    addTask,
    removeTask,
    addLabel,
    removeLabel,
};