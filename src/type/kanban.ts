import { uuid, name, url } from "./generic";
import { user } from './user';
import { Guid } from 'guid-typescript';

interface IKanban {
    id: uuid;
    name: name;
    background: url;
    books: uuid[];
    author: uuid;
    members: uuid[];
    labels: uuid[];
}

interface IKanbanDraft {
    localId: uuid;
    name: name;
    background?: url;
    author: uuid;
}

export type kanban = IKanban;

export type kanbanDraft = IKanbanDraft;

export function rename(kanban: kanban, name: name): kanban {
    return { ...kanban, name };
}

export function changeBackground(kanban: kanban, background: url): kanban {
    return { ...kanban, background };
}

export function addBook(kanban: kanban, bookId: uuid): kanban {
    const newBooks = [ ...kanban.books, bookId ];
    return { ...kanban, books: newBooks };
}

export function removeBook(kanban: kanban, bookId: uuid): kanban {
    const newBooks = kanban.books.filter( (id: uuid) => id !== bookId );
    return { ...kanban, books: newBooks };
}

export function addLabel(kanban: kanban, labelId: uuid): kanban {
    const newLabels = [ ...kanban.labels, labelId ];
    return { ...kanban, labels: newLabels };
}

export function removeLabel(kanban: kanban, labelId: uuid): kanban {
    const newLabels = kanban.labels.filter( (id: uuid) => id !== labelId );
    return { ...kanban, labels: newLabels };
}

export function addMember(kanban: kanban, memberId: uuid): kanban {
    const newMembers = [ ...kanban.members, memberId ];
    return { ...kanban, members: newMembers };
}

export function removeMember(kanban: kanban, memberId: uuid): kanban {
    const newMembers = kanban.members.filter( (id: uuid) => id !== memberId );
    return { ...kanban, labels: newMembers };
}

export function createKanbanDraft(user: user){
    const localId = Guid.create().toString();
    return { localId,
             name: "Untitled Kanban",
             author: user.id
    };
}

export default {
    rename,
    changeBackground,
    addBook,
    removeBook,
    addLabel,
    removeLabel,
    addMember,
    removeMember,
    createKanbanDraft,
}