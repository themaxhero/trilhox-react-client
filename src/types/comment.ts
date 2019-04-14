import { uuid } from "./generic";

export interface IComment{
    content: string,
    author: uuid,
    card: uuid,
    created: Date,
}