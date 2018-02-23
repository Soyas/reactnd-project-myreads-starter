import React from 'react'
import Book from '../Book'

export default function BookShelf(props) {

  let {title, handleBookState, books} = props

    return (<div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map((item, index) => <li key={index}>
              <Book
                books={books}
                shelf={item.shelf}
                title={item.title}
                authors={item.authors}
                imageLinks={item.imageLinks.thumbnail}
                handleBookState={handleBookState}
              />
            </li>)
          }
        </ol>
      </div>
    </div>)

}
