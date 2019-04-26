import { uuid, name, url } from "./generic";

interface IUser {
    id: uuid;
    name: name;
    username: string;
    email: string;
    avatar: url;
    token: string;
    kanbans: uuid[];
}

export type user = IUser;

export function rename(user: user, name: name): user {
    return { ...user, name };
}

export default { rename };