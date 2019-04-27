import { book, bookDraft } from "./book";
import { card, cardDraft } from './card';
import { comment, commentDraft } from './comment';
import { kanban, kanbanDraft } from "./kanban";
import { label, labelDraft } from "./label";
import { member } from "./member";
import { task, taskDraft } from "./task";
import { user } from "./user";
import { OrderedObject } from './OrderedObject';

interface IBooks {
    books: OrderedObject<book>;
    drafts: bookDraft[];
}

interface ICards {
    cards: OrderedObject<card>;
    drafts: cardDraft[];
}

interface IComments {
    comments: OrderedObject<comment>;
    drafts: commentDraft[];
}

interface IKanbans {
    kanbans: OrderedObject<kanban>;
    drafts: kanbanDraft[];
}

interface ILabels {
    labels: OrderedObject<label>;
    drafts: labelDraft[];
}

interface IMembers {
    members: OrderedObject<member>;
}

interface ITasks {
    tasks: OrderedObject<task>;
    drafts: taskDraft[];
}

interface IUsers {
    users: OrderedObject<user>;
}

interface IMainState{
    book: IBooks;
    card: ICards;
    comment: IComments;
    kanban: IKanbans;
    label: ILabels;
    member: IMembers;
    task: ITasks;
    user: IUsers;
    router: any;
}

export type state = IMainState;

export type bookState = IBooks;

export type cardState = ICards;

export type commentState = IComments;

export type kanbanState = IKanbans;

export type labelState = ILabels;

export type memberState = IMembers;

export type taskState = ITasks;

export type userState = IUsers;