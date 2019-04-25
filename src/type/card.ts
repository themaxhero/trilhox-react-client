import { uuid, name } from "./generic";

interface ICard {
    id: uuid;
    name: name;
    description: string;
    tasks: uuid[];
    labels: uuid[];
    comments: uuid[];
    book: uuid[];
}

export type card = ICard;