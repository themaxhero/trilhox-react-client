import { uuid } from "./generic";
import { Option, some, none } from "fp-ts/lib/Option";

export type OrderedObject<T> = {
    byKey: Record<uuid, T>;
    allKeys: uuid[];
}

function from<T>(byKey: Record<uuid, T>, allKeys: uuid[]) : OrderedObject<T>{
    return {
        byKey,
        allKeys,
    };
}

export function empty<T>(): OrderedObject<T>{
    return {
        byKey: {},
        allKeys: [],
    };
}

export function get<T>(list: OrderedObject<T>, id: uuid): Option<T> {
    const value = list.byKey[id];
    if (value === undefined){
        return none;
    }
    return some(value);
}

export function insert<T>(list: OrderedObject<T>, id: uuid, obj: T): OrderedObject<T> {
    const byKey = {...list.byKey, [id]: obj}
    const allKeys = 
        list.allKeys.includes(id) ? list.allKeys : [...list.allKeys, id];
    return from<T>(byKey, allKeys);
}

export function remove<T>(list: OrderedObject<T>, id: uuid): OrderedObject<T> {
    const byKey = list.byKey;
    delete byKey[id];
    const allKeys = list.allKeys.filter((id_: uuid) => id !== id_);
    return from(byKey, allKeys)
}

function updateIfSome<T>(list: OrderedObject<T>,
                         id: uuid,
                         obj: Option<T>): OrderedObject<T>{
    const object = obj.toNullable();
    if (!object){
        return list;
    }
    return insert<T>(list, id, object);
}

type updateCallback<T> = (value: Option<T>) => Option<T>;

export function update<T>(list: OrderedObject<T>,
                          id: uuid,
                          callback: updateCallback<T>): OrderedObject<T>{
    const obj: Option<T> = get(list, id);
    const transformedObj: Option<T> = callback(obj);
    return updateIfSome(list, id, transformedObj);
}

type mapCallback<T, U> = (value: T) => U;

export function map<T, U>(list: OrderedObject<T>, callback: mapCallback<T, U>){
    let byKey: Record<uuid, T> = list.byKey;
    let allKeys = list.allKeys;
    let newByKey: Record<uuid, U> = {};
    const callback_ = (id: uuid) => {
        newByKey = { ...newByKey, [id]: callback(byKey[id])};
    }
    allKeys.forEach(callback_)
    return from(newByKey, allKeys);
}

export default { empty, get, insert, remove, update, map };
