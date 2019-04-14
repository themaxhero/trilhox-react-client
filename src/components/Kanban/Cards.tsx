import React from "react";
import { uuid } from "../../types/generic";
import Card from "./Card";
import { connect } from "react-redux";
import { state } from "../../initialState";
import { Dispatch } from "redux";

function Cards({bookId, book, cards, newCard}: any){
    return (<div className="Cards-container bg-light">
            { book.cards.map((id: uuid)=> {
                return <Card
                        cardId={id} 
                        card={cards.get(id)} 
                       />
            })}
                <div className="Book-new-card-btn" onClick={ newCard(bookId) }>
                    Add a new card
                </div>
            </div>)    
}

function mapToStateProps(state: state){
    return {cards: state.cards}
}

function mapDispatchToProps(dispatch: Dispatch){
    return {
        newCard: (bookId: uuid) => dispatch({type: "NEW_CARD",
                                             payload: { bookId }}),
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(Cards);