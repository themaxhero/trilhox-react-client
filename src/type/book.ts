import { uuid, name } from "./generic";

interface IBook {
    id: uuid;
    name: name;
    kanban: uuid;
    cards: uuid[];
}

export type book = IBook;