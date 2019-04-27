import React from "react";
import { card } from '../../type/card';
import Name from "./name";
import Description from "./description";
import Tasks from "./tasks";
import Comments from "./comments";
import Labels from "./labels";
import Actions from "./actions";

interface IProps {
    card: card;
}

function Component({ card }: IProps){
    const right = (
        <div className="p1em">
            <Actions card={ card }/>
            <Labels card={ card }/>
        </div>

    );
    const left = (
        <div className="p1em">
            <Name card={ card }/>
            <Description card={ card }/>
            <Tasks card={ card }/>
            <Comments card={ card }/>
        </div>
    );
    return (
        <div className="bg-light">
         { left } { right }
        </div>);
}

export default Component;