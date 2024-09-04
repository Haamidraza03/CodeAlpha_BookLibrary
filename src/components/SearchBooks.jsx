import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function SearchBooks({ setBooks }) {
  const [query, setQuery] = useState('');

  const searchBooks = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${query}`);
      setBooks(response.data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Container fluid>
        <Col md={12} className='mt-5 justify-content-center'>
          <p className='m-0 text-center fs-5'>Welcome to</p>
          <h1 className='text-center fs-1'><span className="text-info">HRK</span> Library</h1>
        </Col>

        <Row className='justify-content-center'>
        <center><Col md={5}>
        <Form onSubmit={searchBooks}>
            <Row>
            <Col md={11}>
            <Form.Control
              type="text"
              className='m-0 fs-5'
              placeholder="Search for a book..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            </Col>
            <Col md={1}>
            <Button className='srcbtnn px-4 m-0 fs-5 rounded-4' variant="info" type="submit">
            Search
            </Button>
            </Col>
            </Row>
        </Form>
        </Col></center>
        </Row>
    </Container>
  );
}

export default SearchBooks;
