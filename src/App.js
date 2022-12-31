import React, { useState, createContext } from "react";
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
    itemList: data,
    list: [], 
    filterImage: [],
  });


  const selectImage = item => setState({
    ...state,
    filterImage: state.itemList.filter(listItem => (item !== 'Empty' )  ? listItem.image.includes(item.toLowerCase()):null)
 }) 
    

  return(
    <BooksContext.Provider value={{ 
      state: state,selectImage
    }}>
      <div className="App">
        <Topline/>

        <Element/>
        
        <Routes>
          <Route exact path="/react-page/" element={<Main/>} /> 
          <Route path="/react-page/list" element={<List/>} /> 
        </Routes> 

        <Footer/>       
      </div>
    </BooksContext.Provider>
  );
};

export default App;