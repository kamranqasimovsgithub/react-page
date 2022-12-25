import React, { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Element from "./pages/Header";
import Main from "./components/Main";
import List from "./components/List";

import { data } from "./data";
import Footer from "./pages/Footer";
import Topline from "./pages/Topline";
export const BooksContext = createContext();

function App() {
  const [state, setState] = useState({
    bookList: data,
    cart: [], 
    filterBook: [],
  });
  console.log("sekil", data[1].image.substring(data[0].image.lastIndexOf('/')+1, data[0].image.lastIndexOf('/')+2))

  const removefromCart = id => setState({
    ...state,
    cart: state.cart.filter(cartItem => cartItem.id !== id)
  })

  const selectBook = book => setState({
    ...state,
    filterBook: state.bookList.filter(bookItem => (book !== 'Empty' )?bookItem.image.includes(book.toLowerCase()):null)
 })

//  const selectBook = book => setState({
//   ...state,
//   filterBook: state.bookList.filter(bookItem => (book !== 'Empty')?bookItem.image.substring(data[0].image.lastIndexOf('/')+1, data[0].image.lastIndexOf('/')+2) === book[0]:bookItem.name !== '')
// })


  const addToCart  = book => setState({
    ...state,
    cart: state.cart.find(cartItem => cartItem.id === book.id ) 
    ? state.cart.map(cartItem => cartItem.id === book.id ? {...cartItem, count: cartItem.count + 1} : cartItem ) 
    : [...state.cart, {...book, count: 1 }]
 })

 const increase = id =>{
  setState({
    ...state, 
    cart: state.cart.map(cartItem=>
      cartItem.id === id
      ? { ...cartItem, count: cartItem.count + 1 }
      : cartItem)
  })}
  
  const decrease = id =>{
    setState({
      ...state, 
      cart: state.cart.map(cartItem=>
        cartItem.id === id
        ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
        : cartItem)
    })}


    

  return(

    <BooksContext.Provider value={{ 
      state: state, addToCart,  increase, decrease, 
      removefromCart, selectBook
    }}>
      <div className="App">
        <Topline/>
        
        

        <Element/>
        <Routes>
          <Route exact path="/react-page/" element={<Main/>} /> 
          <Route path="/react-page/cart" element={<List/>} /> 
        </Routes> 

        <Footer/>       
      </div>
    </BooksContext.Provider>
  );
};

export default App;