import { uuid } from './generic';

export enum Permission {
    COMMENTER = "COMMENTER",
    EDITOR = "EDITOR",
    READER = "READER",
}

interface IMember {
    id: uuid;
    user: uuid;
    kanban: uuid;
    permission: Permission;
}

export type member = IMember;