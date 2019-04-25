type possiblyUndefined<A> = A | undefined;

export type Maybe<A> = 
    { type: "Just", value: A } | { type: "Nothing" };

export function just<A>(value: A): Maybe<A>{
    return { type: "Just", value };
}

export function nothing<A>(): Maybe<A>{
    return { type: "Nothing" };
}

type andThenCallback<A, B> = (value: A) => Maybe<B>

export function andThen<A, B>( maybe: Maybe<A>,
                               callback: andThenCallback<A, B>): Maybe<B> {
    switch (maybe.type){
        case "Just":
            return callback(maybe.value);
        case "Nothing":
            return nothing<B>();
    }
}

export function possiblyUndefinedToMaybe<A>(value: possiblyUndefined<A>): 
    Maybe<A>{
    if (value === undefined)
        return nothing<A>();
    return just(value);
}

type mapCallback<A, B> = (value: A) => B

export function map<A, B>( maybe: Maybe<A>,
                           callback: mapCallback<A, B>): Maybe<B> {
    switch (maybe.type){
        case "Just":
            const value = callback(maybe.value);
            return just<B>(value);
        case "Nothing":
            return nothing<B>();
    }
}

type ifNotNothingCallback<A, B> = (applyingObj: A, value: B) => A;

export function ifNotNothing<A, B>(maybe: Maybe<A>,
                                   obj: B,
                                   callback: ifNotNothingCallback<B, A>): B {
    switch (maybe.type){
        case "Just":
            return callback(obj, maybe.value);
        case "Nothing":
            return obj;
    }
}

export default { andThen, map, ifNotNothing, possiblyUndefinedToMaybe }