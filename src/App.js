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
      query: '',
      result:[],
      bookList: [],
      addBooksList:[],
    }
    this.searchBook = this.searchBook.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
    this.handleBookState = this.handleBookState.bind(this)
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


  searchBook(){
    BooksAPI.search(this.state.query).then( books => this.setState({result: books}))
  }


  updateQuery(query){
    this.setState({ query: this.state.query.trim() })
  }

  updateBook(books){
    books.map( book=> {
      BooksAPI.update(book, book.shelf).then( books => {
        this.setState( { bookList: this.state.bookList.concat([books]) } )
      })
    })
  }



  render() {

    const { bookList, result, query} = this.state
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookList
            handleBookState={this.handleBookState}
            bookList={bookList}/>
        )}/>
        <Route exact path='/search' render={( history ) => (
          <SearchBooks
            query={query}
            result={result}
            searchBook={this.searchBook}
            updateQuery={this.updateQuery}
            handleBookState={this.handleBookState}
            onUpdateBook={ searchBookResult => {
              this.updateBook(searchBookResult)
              history.push('/')
            }}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
