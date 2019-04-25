import { book } from "./book";
import { card } from "./card";
import { comment } from "./comment";
import { kanban } from "./kanban";
import { label } from "./label";
import { member } from "./member";
import { task } from "./task";
import { user } from "./user";
import { OrderedObject } from './OrderedObject';

interface IMainState{
    book: OrderedObject<book>;
    card: OrderedObject<card>;
    comment: OrderedObject<comment>;
    kanban: OrderedObject<kanban>;
    label: OrderedObject<label>;
    member: OrderedObject<member>;
    task: OrderedObject<task>;
    user: OrderedObject<user>;
    router: any;
}


export type state = IMainState;

export type bookState = OrderedObject<book>;

export type cardState = OrderedObject<card>;

export type commentState = OrderedObject<comment>;

export type kanbanState = OrderedObject<kanban>;

export type labelState = OrderedObject<label>;

export type memberState = OrderedObject<member>;

export type taskState = OrderedObject<task>;

export type userState = OrderedObject<user>;