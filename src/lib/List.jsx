import React, { Component } from 'react'
import requests from '../services/requests'
import './List.css'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      booksList: []
    }
  }

  componentDidMount() {
    const booksList = requests().get()
    this.setState({ booksList })
  }

  render() {
    const { booksList } = this.state

    return(
      <dl className="book-list">
        {booksList.map(book => (
          <a key={book.id} href={book.id}><div>
            <dt>
              <h3>{book.name}</h3>
            </dt>
            <dd>
              <h5>{book.author}</h5>
              <p>Ano: {book.year}</p>
              <p><strong>Preço: {book.price}</strong></p>
            </dd>
          </div></a>
        ))}
      </dl>
    )
  }
}
