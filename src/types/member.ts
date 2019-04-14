import { uuid } from "./generic";

enum Permission{
    COMMENTER = "COMMENTER",
    EDITOR = "EDITOR",
    READER = "READER",
}

export interface IMember{
    user: uuid,
    kanban: uuid,
    permission: Permission,
}