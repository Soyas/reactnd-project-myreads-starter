import React from 'react';
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from '../Book'

export default function SearchBooks(props) {

  let {result, query, updateQuery, searchBook, handleBookState} = props

  let showingResult
  if (query) {
    const match = new RegExp(escapeRegExp(query), 'i')
    showingResult = result.filter(book => match.test(book.title))
  } else {
    showingResult = result
  }

  showingResult.sort(sortBy('title'))

  return (<div className="search-books">
    <div className="search-books-bar">
      <Link to="/" className="close-search" >Close</Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={(e) => searchBook(e.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {
          showingResult.map((item, index) =>
          <li key={index}>
            <Book
              books={result}
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
  </div>);
}
