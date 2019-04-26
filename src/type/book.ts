import { uuid, name } from "./generic";
import { cardDraft } from './card';
import { Guid } from "guid-typescript";

interface IBook {
    id: uuid;
    name: name;
    kanban: uuid;
    cards: uuid[];
}

export type book = IBook;

export function rename(book: book, name: string): book {
    return { ...book, name };
}

export function addCard(book: book, cardId: uuid): book {
    const newCards = [ ...book.cards, cardId ];
    return { ...book, cards: newCards };
}

export function removeCard(book: book, cardId: uuid): book {
    const newCards = book.cards.filter( (id: uuid) => id !== cardId );
    return { ...book, cards: newCards };
}

export function createCardDraft(book: book): cardDraft {
    const localId = Guid.create().toString();
    return { localId, name: "Untitled Card", book: book.id };
}

export default { rename, addCard, removeCard, createCardDraft };