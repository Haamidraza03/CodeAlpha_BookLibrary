import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function BookList({ books, selectBook }) {
  return (
    <Container>
      <Row>
        {books.map((book, index) => (
          <Col md={3} key={index} className="mt-4 px-3">
            <Card className='shadow border-0 bg-black text-white rounded-top-4'>
              <Card.Img className='img-fluid rounded-top-4' style={{height:"400px"}} variant="top" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} />
              <Card.Body>
                <Card.Title className='py-1 m-0'>{book.title}</Card.Title>
                <Card.Text className='m-0 py-1'>{book.author_name?.join(', ')}</Card.Text>
                <Button variant="info" onClick={() => selectBook(book)}>Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
