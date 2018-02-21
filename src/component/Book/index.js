import React from 'react'


export default class Book extends React.Component{




  render(){
    return (
      console.log(this.props.book),
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${this.props.imageLinks}")` }}></div>
          <div className="book-shelf-changer">
            <select
              onChange={(e) => {
                const value = e.target.value
                const title = this.props.title
                const book = this.props.book
                  this.props.handleBookState(value, title, book)
                }}
              defaultValue={this.props.shelf}
              >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    )
  }
}
