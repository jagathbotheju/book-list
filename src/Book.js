//rafce
import React from 'react'

const Book = ({ image, title, author }) => {
  //attribute, eventHandler
  //onClick, onMouseOver

  const clickHandler = (e) => {
    console.log(title);
    console.log(e);
    console.log(e.target);
  }

  const passArgs = (pAuthor) => {
    console.log(pAuthor);
  }

  return <article className='book'>
    <div className='bg-image hover-overlay ripple hover-zoom hover-shadow hover-overlay'>
      <img
      src={image}
      alt="book"
      className='w-100'
    />
    </div>
    <h1 onClick={ ()=>console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button
      type="button"
      onClick={clickHandler }
      className="btn btn-primary me-2">
      Click
    </button>
    <button
      type="button"
      onClick={()=>passArgs(author) }
      className="btn btn-warning">
      Pass Args
    </button>
  </article>
}


export default Book
