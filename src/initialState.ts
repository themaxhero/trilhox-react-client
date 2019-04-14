import { IKanban } from "./types/kanban";
import { uuid } from "./types/generic";
import { IUser } from "./types/user";
import { IBook } from "./types/book";
import { ICard } from "./types/card";
import { IComment } from "./types/comment";
import { ILabel } from "./types/label";
import { IMember } from "./types/member";
import { ITask } from "./types/task";

const kanban: IKanban = {
    name: "Como ir para o japão",
    background: "https://wallpaperplay.com/walls/full/b/5/9/45055.jpg",
    books: new Array<uuid>("abc"),
    author: "aspiojhfdpojhsapd",
    members: new Array<uuid>(),
    labels: new Array<uuid>(),
}

const kanban2: IKanban = {
    name: "Como ficar no Japão",
    background: "https://wallpaperplay.com/walls/full/9/0/8/45056.jpg",
    books: new Array<uuid>(),
    author: "aspiojhfdpojhsapd",
    members: new Array<uuid>(),
    labels: new Array<uuid>(),
}

const book: IBook = {
    name: "Um livro qualquer",
    kanban: "abc",
    cards: new Array<uuid>("abc", "def"),
}

const card: ICard = {
    name: "Um card qualquer",
    description: undefined,
    tasks: new Array<uuid>("abc", "def"),
    labels: new Array<uuid>("abc", "def"),
    book: "abc",
    comments: new Array<uuid>("abc", "def"),
}

const card2: ICard = {
    name: "Um card qualquer 2",
    description: undefined,
    tasks: new Array<uuid>("ghi", "jkl"),
    labels: new Array<uuid>("ghi", "jkl"),
    book: "abc",
    comments: new Array<uuid>("ghi", "jkl"),
}

const c1: IComment = {
    content: "lixo",
    author: "abc",
    card: "abc",
    created: new Date(),
}

const c2: IComment = {
    content: "fist",
    author: "abc",
    card: "abc",
    created: new Date(),
}

const c3: IComment = {
    content: "fist",    
    author: "def",
    card: "def",
    created: new Date(),
}

const c4: IComment = {
    content: "seilamano",    
    author: "def",
    card: "def",
    created: new Date(),
}

const t1: ITask = {
    name: "Uma task qualquer",
    active: true,
    card: "abc"
}

const t2: ITask = {
    name: "Uma task qualquer 2",
    active: true,
    card: "abc"
}

const t3: ITask = {
    name: "Uma task qualquer 3",
    active: true,
    card: "ghi"
}

const t4: ITask = {
    name: "Uma task qualquer 3",
    active: true,
    card: "jkl"
}

const l1: ILabel = {
    name: "vermelho",
    color: "#FF0000",
    kanban: "abc"
}

const l2: ILabel = {
    name: "rubro",
    color: "#AA0000",
    kanban: "abc"
}

const l3: ILabel = {
    name: "verde-oliva",
    color: "#AFAF00",
    kanban: "def"
}

const l4: ILabel = {
    name: "verde-escuro",
    color: "#005500",
    kanban: "def"
}

const userMe: IUser = {
    avatar: "https://media.tenor.com/images/a4b3be9cbf5bcd3ba53c9dc475c0a77a/tenor.gif",
    name: "Marcelo Amancio de Lima Santos",
    username: "maxhero",
    kanbans: new Array<uuid>("abc", "def"),
}

export const initialState = {
    user: { ...userMe, id: "abc" },
    books: new Map<uuid, IBook>([["abc", book]]),
    cards: new Map<uuid, ICard>([["abc", card], ["def", card2]]),
    comments: new Map<uuid, IComment>(
        [["abc", c1],
         ["def", c2],
         ["ghi", c3],
         ["jkl", c4]]),
    kanbans: new Map<uuid, IKanban>([["abc", kanban], ["def", kanban2]]),
    labels: new Map<uuid, ILabel>(
        [["abc", l1],
         ["def", l2],
         ["ghi", l3],
         ["jkl", l4]]),
    members: new Map<uuid, IMember>(),
    tasks: new Map<uuid, ITask>(
        [["abc", t1],
         ["def", t2],
         ["ghi", t3],
         ["jkl", t4]]),
    page: {type: "KANBAN", params: {kanbanId: "abc"}},
    users: new Map<uuid, IUser>([["abc", userMe]]),
}

console.log(JSON.stringify(kanban));
console.log(JSON.stringify(initialState.kanbans))

export type state = typeof initialState;