import { uuid, name } from './generic';
import { kanban } from './kanban';

interface ILabel {
    id: uuid;
    name: name;
    color: string;
    kanban: uuid;
}

interface ILabelDraft {
    name: name;
    color: string;
    kanban: uuid;
}

export type label = ILabel;

export type labelDraft = ILabelDraft;

export function changeColor(label: label, color: string): label {
    return { ...label, color };
}

export function rename(label: label, name: name): label {
    return { ...label, name };
}

export function createLabelDraft(kanban: kanban,
                                 name: name,
                                 color: string): labelDraft {
    return { kanban: kanban.id, name, color };
}

export default { changeColor, rename, createLabelDraft }