import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  render() {
    console.log("[BookList.js]: " + this.props.match.params.bookColor);
    console.log("[BookList.js]: props", this.props);
    let books = [];
    if (this.props.match.params.bookColor) {
      let coloredBooks = this.state.filteredBooks.filter(
        book => book.color === this.props.match.params.bookColor.toLowerCase()
      );
      books = <BookTable books={coloredBooks} />;
    } else {
      books = <BookTable books={this.state.filteredBooks} />;
    }
    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.filterBooks} />
        <div>{books}</div>
      </div>
    );
  }
}

export default BookList;
