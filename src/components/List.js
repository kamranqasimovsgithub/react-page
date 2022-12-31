import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";
import {Stars} from './Main'

const List = () => {
    const context = useContext(BooksContext);

  return (
      <div id='3' className='container'>
            <header class="section-header text-center margin-bottom-30">
                <h2 class='margin-bottom-30'><br/><span> {context.state.itemList.length} images found</span></h2>
                <p>See our wonderful image collection</p>
            </header>
      <div className='row'>
        
        <div className='column item-list-small w-100'>
            
          {context.state.itemList.map(item=>
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
          
        </div>
        
      </div>
      
      
    </div>
    

  );
};

export default List;