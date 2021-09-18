import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { books } from './books';
import Book from './Book'

function BookList() {
  return (
    <section className='book-list'>
      {
        books.map((book) => {
          return <Book key={book.id} { ...book}></Book>;
        })
      }
    </section>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
