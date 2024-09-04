import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function BookDetail({ book, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='fs-3 text-black'>{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='fs-5 text-black'><strong>Author:</strong> {book.author_name?.join(', ')}</p>
        <p className='fs-5 text-black'><strong>First Published Year:</strong> {book.first_publish_year}</p>
        <p className='fs-5 text-black'><strong>Edition Count:</strong> {book.edition_count}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='fs-5 text-white' variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookDetail;
