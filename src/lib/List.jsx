import React, { Component } from 'react'
import requests from '../services/requests'
import { styled } from '@material-ui/styles';

const Title = styled('h3')({
  margin: '5px'
})

const Author = styled('h5')({
  margin: '5px'
})

const Info = styled('p')({
  margin: '5px'
})

const ButtonWrapper = styled('a')({
  textDecoration: 'none',
  color: 'black'
})

const Button = styled('div')({
  borderRadius: '8px',
  border: '1px solid lightgrey',
  padding: '30px',
  margin: '10px'
})

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
          <ButtonWrapper key={book.id} href={book.id}>
            <Button>
              <dt>
                <Title>{book.name}</Title>
              </dt>
              <dd>
                <Author>{book.author}</Author>
                <Info>Ano: {book.year}</Info>
                <Info><strong>Preço: {book.price}</strong></Info>
              </dd>
            </Button><
          /ButtonWrapper>
        ))}
      </dl>
    )
  }
}
