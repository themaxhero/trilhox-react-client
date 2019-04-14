import { uuid } from "./generic";

export interface IKanban{
    name: string;
    background: string;
    books: uuid[];
    author: uuid;
    members: uuid[];
    labels: uuid[];
}