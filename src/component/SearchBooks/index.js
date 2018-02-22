import React from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


export default class SearchBooks extends React.Component {


  state = {
    query: ''
  }

  updateQuery(query){
    this.setState({ query: query.trim() })
  }

  render() {

    let showingResult 


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.props.isShowSearchPage()}>Close</a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {

            }
          </ol>
        </div>
      </div>);
  }
}
