import { uuid } from "./generic";

interface IComment {
    id: uuid;
    content: string;
    author: uuid;
    card: uuid;
    created: Date;
}

export type comment = IComment;