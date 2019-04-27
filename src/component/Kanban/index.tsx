import React from "react";
import { uuid } from '../../type/generic';
import Kanban, { kanban } from '../../type/kanban';
import OrderedType, { OrderedObject } from '../../type/OrderedObject';
import { book } from '../../type/book';
import Book from "../Book";
import { state } from '../../type/state';
import { connect } from 'react-redux';

interface IProps {
    id: uuid;
    kanban: kanban;
    books: OrderedObject<book>;
}

function Component({id, kanban, books}: IProps){
    const name = Kanban.getName(kanban);
    const bookIds = Kanban.getBooks(kanban);
    const mapF = (bookId: uuid) => {
        const book = OrderedType.get(books, bookId).toNullable();
        return book ? <Book key={ bookId } id={ bookId } book={ book }/> : <div/>;
    }
    const renderedBooks = bookIds.map(mapF);
    return (
        <div className="kanban-container">
            <div className="FIXME: PUT A NAME EDITOR HERE.">
                { name }
            </div>
            <div>
                { renderedBooks }
            </div>
        </div>
    );
}

function mapStateToProps(state: state){
    return {
        books: state.book.books,
    }
}

export default connect(mapStateToProps)(Component);