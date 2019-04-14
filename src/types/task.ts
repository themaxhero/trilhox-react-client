import { uuid } from "./generic";

export interface ITask{
    name: string,
    card: uuid,
    active: boolean,
}