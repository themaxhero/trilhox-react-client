import { uuid, name } from "./generic";

interface ITask {
    id: uuid;
    name: name;
    card: uuid;
    active: boolean;
}

export type task = ITask;