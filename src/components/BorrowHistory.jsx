import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

function BorrowHistory({ history }) {
  return (
    <Container>
      <h4 className='text-center mt-5 fs-2'>Borrowing History</h4>
      <ListGroup className='bg-secondary'>
        {history.map((record, index) => (
          <ListGroup.Item key={index} className='fs-5 text-info bg-secondary'>
            <center>{record.title} - Borrowed on {new Date(record.date).toLocaleDateString()}</center>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default BorrowHistory;
