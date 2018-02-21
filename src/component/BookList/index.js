import React from 'react'
import BookShelf from '../BookShelf'
import * as BooksAPI from '../../BooksAPI'

export default class BookList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bookList: []
    }
    this.handleBookState = this.handleBookState.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => this.setState({bookList: data}))
  }

  handleBookState(value, title, book) {

    this.setState({

      bookList: this.state.bookList.map(item =>
            item.title === title ? {
              ...item,
              shelf: value
            }: item
        )
      }
    )
  }

  render() {
    return (<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title='Currently Reading' handleBookState={this.handleBookState} book={this.state.bookList.filter(item => item.shelf === 'currentlyReading')}/>
          <BookShelf title='Want To Read' handleBookState={this.handleBookState} book={this.state.bookList.filter(item => item.shelf === 'wantToRead')}/>
          <BookShelf title='Read' handleBookState={this.handleBookState} book={this.state.bookList.filter(item => item.shelf === 'read')}/>
        </div>
      </div>
      <div className="open-search">
        <a onClick={this.props.showSearchPage}>Add a book</a>
      </div>
    </div>)
  }
}
