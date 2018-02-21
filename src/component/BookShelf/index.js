import React from 'react'
import Book from '../Book'

export default class BookShelf extends React.Component{

  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.book.map((item, index) =>
                <li key={index}>
                  <Book
                    book={this.props.book}
                    shelf={item.shelf}
                    authors={item.authors}
                    imageLinks={item.imageLinks.thumbnail}
                    title={item.title}
                    handleBookState={this.props.handleBookState}
                  />
                </li>
              )

            }
          </ol>
        </div>
      </div>
    )
  }
}
