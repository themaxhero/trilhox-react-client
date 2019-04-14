import { uuid } from "./generic";

export interface IBook{
    name: string,
    kanban: uuid,
    cards: uuid[],
}