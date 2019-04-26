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

interface IMemberDraft {
    user: uuid;
    kanban: uuid;
    permission: Permission;
}

export type member = IMember;

export function changePermission(member: member, permission: Permission): member {
    return { ...member,  permission };
}

export default { changePermission };