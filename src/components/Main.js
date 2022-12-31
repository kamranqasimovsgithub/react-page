import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BooksContext } from '../App';
import Galerry from '../pages/Galerry';
import Blog from '../pages/Blog';
import About from '../pages/About';


const Stars = () =>{
  var i=1;
  var text=''

  const rndInt = Math.floor(Math.random() * 6) + 1

  let buffer = []
  
  for(i=1;i<=5;i++){
    if( i <= rndInt )
      buffer.push(<i className="fa fa-star" style={{fontSize:"16px", color: 'yellow'}}></i>);
    else
      buffer.push(<i className="fa fa-star" style={{fontSize:"16px", color: 'white'}}></i>);
    }
    
  return (
    <>
      {buffer}
    </>
  )
  
}

const Main = ( props ) => {    
  const context  = useContext(BooksContext);

  return (

    <div id='3' className='container'>

      <div className='row'>
        <div className='column w-100'>
          <About/>
        </div>
        <div className='column w-100'>

          <Galerry/>
        </div>
        
        <div className='column item-list-small w-100 margin-bottom-80'>
            
          {context.state.itemList.map(item=> (item.id<=5) &&
          (
              <div className='item-list' key={item.id}>
                  <img src={item.image} alt={item.name}/>
                  <div className='item-list-details'>
                      <h4>{item.name}</h4>
                      <p>{item.author}</p>

                      <p><Stars/></p>
                      
                  </div>
              </div>
          ))}  
          <h4>
            <Link to="/react-page/list">Complete list</Link>
          </h4>  
        <span id='blog' ></span>

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