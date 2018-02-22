import React from 'react'
import BookList from './component/BookList'
import SearchBooks from './component/SearchBooks'

import './App.css'


class BooksApp extends React.Component {
  constructor(props){
    super(props)

    this.state={
      showSearchPage: false
    }
    this.isShowSearchPage = this.isShowSearchPage.bind(this)
  }

  isShowSearchPage(){
    this.setState({showSearchPage: !this.state.showSearchPage})
  }


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks isShowSearchPage={this.isShowSearchPage}/>
        ) : (
          <BookList isShowSearchPage={this.isShowSearchPage}/>
        )}
      </div>
    )
  }
}

export default BooksApp
