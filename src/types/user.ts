import { uuid } from "./generic";

export interface IUser{
    username: string;
    name?: string;
    email?: string;
    avatar: string;
    kanbans: uuid[];
}