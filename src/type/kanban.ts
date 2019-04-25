import { uuid, name, url } from "./generic";

interface IKanban {
    id: uuid;
    name: name;
    background: url;
    books: uuid[];
    author: uuid[];
    members: uuid[];
    labels: uuid[];
}

export type kanban = IKanban;