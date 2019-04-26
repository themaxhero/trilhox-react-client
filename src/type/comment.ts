import { uuid } from "./generic";
import { card } from "./card";
import { user } from "./user";

interface IComment {
    id: uuid;
    content: string;
    author: uuid;
    card: uuid;
    created: Date;
}

interface ICommentDraft {
    content?: string;
    author: uuid;
    card: uuid;
    created: Date;
}

export type comment = IComment;

export type commentDraft = ICommentDraft;

export function changeContent(comment: comment, content: string){
    return { ...comment, content };
}

export function createCommentDraft(card: card, user: user): commentDraft {
    return { author: user.id, card: card.id, created: new Date()}
}

export default { changeContent, createCommentDraft };