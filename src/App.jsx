import React, { useState, useEffect } from 'react';
import SearchBooks from './components/SearchBooks';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import BorrowHistory from './components/BorrowHistory';
import CategoryFilter from './components/CategoryFilter';

function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]); // For storing filtered books
  const [selectedBook, setSelectedBook] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [history, setHistory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // Track selected category

  const selectBook = (book) => {
    setSelectedBook(book);
    setShowDetail(true);
    setHistory([...history, { title: book.title, date: Date.now() }]);
  };

  const handleClose = () => setShowDetail(false);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === '') {
      setFilteredBooks(books); // Show all books if no category is selected
    } else {
      const filtered = books.filter((book) =>
        book.subject ? book.subject.includes(category) : false
      );
      setFilteredBooks(filtered);
    }
  };

  // Update filteredBooks whenever the books list changes
  React.useEffect(() => {
    filterByCategory(selectedCategory);
  }, [books, selectedCategory]);

  useEffect(() => {
    const handleRightClick = (e) => {
      e.preventDefault();
    }

    document.addEventListener('contextmenu', handleRightClick);
    
    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
    }
  }, []);

  return (
    <div>
      <SearchBooks setBooks={setBooks} />
      <CategoryFilter
        categories={['Fantasy', 'Science Fiction', 'Non-Fiction']}
        filterByCategory={filterByCategory}
      />
      <BookList books={filteredBooks} selectBook={selectBook} />
      {selectedBook && (
        <BookDetail book={selectedBook} show={showDetail} handleClose={handleClose} />
      )}
      <BorrowHistory history={history} />
      <div className="row rounded-4 justify-content-center text-center py-3 bg-black text-white" style={{marginTop:"300px"}}>
        <footer className="footer">
            <div>
                Copyright &#169; HRK Library 2024. All Right Reserved.
            </div>
            <div>
              Made with <i className="bi bi-heart-fill"></i> by <a href="https://hrk03.vercel.app" target='_blank' rel="noreferrer" className="text-white" style={{textDecoration: "none"}}>Haamid Raza Kazi</a>.
            </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
