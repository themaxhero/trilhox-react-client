import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { uuid } from "../../types/generic";
import Book from "./Book";
import { state } from "../../initialState";

function Books({ kanbanId, kanban, books, newBook }: any){
    const renderedBooks = kanban.books.map((id: uuid) =>{
        return <Book bookId={id}  book={books.get(id)}/>
    })
    return (<div className="Books">
                { renderedBooks }
                <div className="fas fa-plus Kanban-new-book-btn"
                     onClick={ newBook(kanbanId) }/>
            </div>)    
}

function mapToStateProps(state: state){
    return { books: state.books }
}

function mapDispatchToProps(dispatch: Dispatch){
    return {
        newBook: (kanbanId: uuid) => dispatch({type: "CREATE_NEW_BOOK",
                                               payload: { kanbanId }}),
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(Books);