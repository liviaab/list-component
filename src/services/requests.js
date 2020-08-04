import mockBooksDetails from '../mocks/books.json'

const requests = () => {
  const get = () => mockBooksDetails

  return { get }
}

export default requests
