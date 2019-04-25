import { uuid, name } from './generic';

interface ILabel {
    id: uuid;
    name: name;
    color: string;
    kanban: uuid;
}

export type label = ILabel;