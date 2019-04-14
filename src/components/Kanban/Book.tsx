import React from "react";
import Cards from "./Cards";
import { connect } from "react-redux";
import { state } from "../../initialState";
import { Dispatch } from "redux";
import { uuid } from "../../types/generic";

function Book({kanbanId, bookId, books, editName, deleteBook}: any){
    const book = books.get(bookId);
    return (<div className="Book-container">
                <div className="Book-title bg-dark">
                    { book.name }
                    <div>
                        <div 
                            className="far fa-edit Book-title-btn"
                            onClick={ editName(bookId, kanbanId) }
                        />
                        <div 
                        className="far fa-trash-alt Book-title-btn"
                            onClick={deleteBook(bookId, kanbanId)}
                        />
                    </div>
                </div>
                <Cards bookId={bookId} book={book}/>
            </div>)
}

function mapToStateProps(state: state){
    return {
        books: state.books,
    }
}

function mapDispatchToProps(dispatch: Dispatch){
    return {
        editName: (bookId: uuid, kanbanId: uuid) => 
            dispatch({type: "EDIT_BOOK_NAME", payload: { bookId, kanbanId }}),
        deleteBook: (bookId: uuid, kanbanId: uuid) =>
            dispatch({type: "DELETE_BOOK", payload: { bookId, kanbanId }}),
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(Book);