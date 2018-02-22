import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from '../BookShelf'



export default function BookList(props){

  let { handleBookState, bookList } = props

  return (<div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf title='Currently Reading' handleBookState={handleBookState} books={bookList.filter(item => item.shelf === 'currentlyReading')}/>
        <BookShelf title='Want To Read' handleBookState={handleBookState} books={bookList.filter(item => item.shelf === 'wantToRead')}/>
        <BookShelf title='Read' handleBookState={handleBookState} books={bookList.filter(item => item.shelf === 'read')}/>
      </div>
    </div>
    <div className="open-search">
      <Link to="/search" >Add a book</Link>
    </div>
  </div>)
}
