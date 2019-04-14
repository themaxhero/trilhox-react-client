import { IKanban } from "./types/kanban";
import { uuid } from "./types/generic";

const kanban: IKanban = {
    name: "Como ir para o japão",
    background: "https://www.planetware.com/photos-large/JPN/japan-mt-fuji-and-cherry-blossoms.jpg",
    books: new Array<uuid>(),
    author: "aspiojhfdpojhsapd",
    members: new Array<uuid>(),
    labels: new Array<uuid>(),
}

const kanban2: IKanban = {
    name: "Como ir para o japão",
    background: "https://www.planetware.com/photos-large/JPN/japan-mt-fuji-and-cherry-blossoms.jpg",
    books: new Array<uuid>(),
    author: "aspiojhfdpojhsapd",
    members: new Array<uuid>(),
    labels: new Array<uuid>(),
}

export const initialState = {
    user: {
            avatar: "https://media.tenor.com/images/a4b3be9cbf5bcd3ba53c9dc475c0a77a/tenor.gif",
            name: "Marcelo Amancio de Lima Santos",
            kanbans: new Array<uuid>("abc"),
    },
    kanbans: new Map<uuid, IKanban>([["abc", kanban], ["def", kanban2]]),
}

console.log(JSON.stringify(kanban));
console.log(JSON.stringify(initialState.kanbans))

export type state = typeof initialState;