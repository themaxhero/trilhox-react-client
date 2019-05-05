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

export function getEmail(user: user){
    return user.email;
}

export function getName(user: user){
    return user.name;
}

export function getAvatar(user: user){
    return user.avatar;
}

export function getUsername(user: user){
    return user.username;
}

export default { rename, getEmail, getName, getUsername, getAvatar };
