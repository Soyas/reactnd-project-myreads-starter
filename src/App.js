import React from 'react'
import { Route, history} from 'react-router-dom'
import BookList from './component/BookList'
import SearchBooks from './component/SearchBooks'
import * as BooksAPI from './BooksAPI'

import './App.css'


class BooksApp extends React.Component {
  constructor(props){
    super(props)

    this.state={
      bookList: [],
      result:[],
      addBooksList:[],
      query: '',
    }
    this.handleBookState = this.handleBookState.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
  }


  componentWillMount() {
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


  searchBook(query){
    BooksAPI.search(updateQuery(this.state.query)).then( data => this.setState({result: data}))
  }

  updateBook(books){
    BooksAPI.update(addBooksList, shelf).then( books => {
      this.setState(state => ({
        bookList: this.state.bookList.concat([books])
      }))
    })
  }

  updateQuery(query){
    this.setState({ query: this.state.query.trim() })
  }


  render() {

    const { bookList, result, query } = this.state

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookList
            handleBookState={this.handleBookState}
            bookList={bookList}/>
        )}/>
        <Route exact path='/search' render={( history ) => (
          <SearchBooks
            result={result}
            updateQuery={this.updateQuery}
            handleBookState={this.handleBookState}
            query={query}

          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
