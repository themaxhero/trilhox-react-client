import React from "react";
import Book, { book } from "../../type/book";
import { uuid } from '../../type/generic';
import { card } from '../../type/card';
import Card from "../Card";
import { state } from '../../type/state';
import OrderedType, { OrderedObject } from "../../type/OrderedObject";
import { connect } from "react-redux";

interface IProps{
    id: uuid;
    book: book;
    cards: OrderedObject<card>;
}

function Component({ id, book, cards }: IProps){
    const name = Book.getName(book);
    const cardIds = Book.getCards(book);
    const mapF = (cardId: uuid) => {
        const card = OrderedType.get(cards, cardId).toNullable();
        return card ? <Card key={ cardId } card={ card }/> : <div/>
    };
    const renderedCards = cardIds.map(mapF);
    //FIXME: Add Actions Button
    return (
        <div className="book-container">
            <div className="bg-dark rounded-top p1em">
                { name }
                <div>Actions Button Here</div>
            </div>
            <div className="bg-light rounded-bottom p1em">
                { renderedCards }
            </div>
        </div>
    );
}

function mapStateToProps(state: state){
    return {
        cards: state.card.cards,
    }
}

export default connect(mapStateToProps)(Component);