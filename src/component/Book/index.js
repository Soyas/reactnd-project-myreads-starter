import React from 'react'

export default function Book(props) {
  let nativeStyle = {
    width: 128,
    height: 192
  }
  let {books, shelf, title, authors, imageLinks, handleBookState} = props

  return (<div className="book">
    <div className="book-top">
      <div className="book-cover" style={Object.assign({}, nativeStyle, {background: `url(${imageLinks})`})}></div>
      <div className="book-shelf-changer">
        <select onChange={(e) => {
            let value = e.target.value
            handleBookState(value, title, books)
          }} defaultValue={shelf}>
          <option value="none" disabled="disabled">Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{authors}</div>
  </div>)
}
