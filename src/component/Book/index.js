import React from 'react'


export default class Book extends React.Component{


  handleBookState(e) {
    let value = e.target.value
    this.setState({
      bookList: this.props.book.map(item =>
            item.title === this.props.title ? {
              ...item,
              shelf: value
            }: item
        )
      }
    )
  }

  render(){
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${this.props.imageLinks}")` }}></div>
          <div className="book-shelf-changer">
            <select>
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
