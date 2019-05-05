import { RouterState } from "connected-react-router";
import { book, bookDraft } from "./book";
import { card, cardDraft } from './card';
import { comment, commentDraft } from './comment';
import { kanban, kanbanDraft } from "./kanban";
import { label, labelDraft } from "./label";
import { member } from "./member";
import { task, taskDraft } from "./task";
import { user } from "./user";
import { OrderedObject } from './OrderedObject';
import { name, url } from "./generic";

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

interface IKanbanList{
    deleteMode: boolean;
    deletingKanban?: kanban;
}

interface IKanbanCreationForm {
    name?: name;
    background?: url;
}

interface ILabels {
    labels: OrderedObject<label>;
    drafts: labelDraft[];
}

interface ILanding {
    login?: string;
    password?: string;
    loggedIn?: boolean;
    token?: string;
    error?: string;
}

interface IRegister {
    username?: string;
    email?: string;
    password?: string;
    error?: string;    
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
    kanbanList: IKanbanList;
    kanbanCreationForm: IKanbanCreationForm;
    label: ILabels;
    landing: ILanding;
    register: IRegister;
    member: IMembers;
    task: ITasks;
    user: IUsers;
    router: RouterState;
}

export type state = IMainState;

export type bookState = IBooks;

export type cardState = ICards;

export type commentState = IComments;

export type kanbanState = IKanbans;

export type kanbanListState = IKanbanList;

export type kanbanCreationFormState = IKanbanCreationForm;

export type labelState = ILabels;

export type landingState = ILanding;

export type registerState = IRegister;

export type memberState = IMembers;

export type taskState = ITasks;

export type userState = IUsers;