import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";
import {Stars} from './Main'

const List = () => {
    const context = useContext(BooksContext);
    console.log(context);

  return (
      <div id='3' className='container'>
            <header class="section-header text-center margin-bottom-30">
                <h2 class='margin-bottom-30'><br/><span> {context.state.bookList.length} images found</span></h2>
                <p>See our wonderful image collection</p>
            </header>
      <div className='row'>
        
        <div className='column book-list-small w-100'>
            
          {context.state.bookList.map(book=>
          (
              <div className='book-list' key={book.id}>
                  <img src={book.image} alt={book.name}/>
                  <div className='book-list-details'>
                      <h4>{book.name}</h4>
                      <p>{book.author}</p>

                      <p><Stars/></p>
                      
                  </div>
              </div>
          ))}  
          
        </div>
        
      </div>
      
      
    </div>
    

  );
};

export default List;