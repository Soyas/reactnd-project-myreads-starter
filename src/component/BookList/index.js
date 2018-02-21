import React from 'react'
import BookShelf from '../BookShelf'
import * as BooksAPI from '../../BooksAPI'

export default class BookList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bookList: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => this.setState({bookList: data}))
  }

  handleBookState(e) {
    let value = e.target.value
    this.setState({
      bookList: this.props.book.map((item) =>
            item.title === this.props.title ? item.shelf = value : item
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
          <BookShelf title='Currently Reading' book={this.state.bookList.filter(item => item.shelf === 'currentlyReading')}/>
          <BookShelf title='Want To Read' book={this.state.bookList.filter(item => item.shelf === 'wantToRead')}/>
          <BookShelf title='Read' book={this.state.bookList.filter(item => item.shelf === 'read')}/>
        </div>
      </div>
      <div className="open-search">
        <a onClick={this.props.showSearchPage}>Add a book</a>
      </div>
    </div>)
  }
}
