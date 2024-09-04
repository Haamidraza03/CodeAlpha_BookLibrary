import React from 'react';
import { Form } from 'react-bootstrap';

function CategoryFilter({ categories, filterByCategory }) {
  return (
    <div className='px-3'>
        <center><div className="col-md-7 mt-3">
        <Form.Group>
      <Form.Label className='px-3 m-0 py-1 fs-5'>Filter by Category</Form.Label>
      <Form.Control as="select" onChange={(e) => filterByCategory(e.target.value)}>
        <option value="" className='fs-5'>All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </Form.Control>
    </Form.Group>
        </div></center>
    </div>
  );
}

export default CategoryFilter;
