import React from 'react'
import Book from '../Book'

export default class BookShelf extends React.Component{

  constructor(props){
    super(props)


  }



  render(){
    return(
      console.log(this.props.book),
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.book.map(item =>
                <li>
                  <Book
                    shelf={item.shelf}
                    authors={item.authors}
                    imageLinks={item.imageLinks.thumbnail}
                    title={item.title}
                  />
                </li>
              )

            }
          </ol>
        </div>
      </div>
    )
  }
}
