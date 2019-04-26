import { loop, Cmd } from "redux-loop";
import { bookState as state } from '../type/state';
import OrderedType from "../type/OrderedObject";
import { action } from '../type/action';

function addCard(state: state, payload: any){
    const { id, cardId } = payload;
    const book = state.byKey[id];
    return loop(state, Cmd.none);
}

function removeCard(state: state, payload: any){
    const { id, cardId } = payload;
    const book = OrderedType.get(state, id);
    return loop(state, Cmd.none);
}

function add(state: state, payload: any){
    return loop(state, Cmd.none);
}

function remove(state: state, payload: any){
    return loop(state, Cmd.none);
}

export function book(state: state = OrderedType.empty(),
                     { type, payload }: action){
    switch(type){
        case "BOOK/ADD_CARD":
            return addCard(state, payload);

        case "BOOK/REMOVE_CARD":
            return removeCard(state, payload);

        case "BOOK/ADD":
            return add(state, payload);

        case "BOOK/REMOVE":
            return remove(state, payload);

        default:
            return loop(state, Cmd.none);
    }
}