import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BooksContext } from '../App';
import Galerry from '../pages/Galerry';
import Blog from '../pages/Blog';
import About from '../pages/About';


const Stars = () =>{
  var i=1;
  var text=''
  //for(i=1;i<=3;i++)

  const rndInt = Math.floor(Math.random() * 6) + 1
  console.log('Random',rndInt)

  let buffer = []
  
  for(i=1;i<=5;i++){
    if( i <= rndInt )
      buffer.push(<i class="fa fa-star" style={{fontSize:"16px", color: 'yellow'}}></i>);
    else
      buffer.push(<i class="fa fa-star" style={{fontSize:"16px", color: 'white'}}></i>);
    }
    
  return (
    <>
      {buffer}
    </>
  )
  
}

const Main = ( props ) => {    
  const context  = useContext(BooksContext);
  //console.log(context);

  const totalCartCount = context.state.cart.reduce(
    (total, book) => ( total = total + book.count ),
    0).toFixed(0);


  return (
    


    <div id='3' className='container'>

      <div className='row'>
        <div className='column w-100'>
          <About/>
        </div>
        
        <div className='column w-100'>
          <Galerry/>
        </div>
        
        <div className='column book-list-small w-100'>
            
          {context.state.bookList.map(book=> (book.id<=5) &&
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
          <h4>
            <Link to="/react-page/cart">Complete list</Link>
          </h4>  
        </div>
        <div className='column w-100'>
          <Blog/>
        </div>
      </div>
      
      
    </div>
    

  );
};

export {Stars}

export default Main;