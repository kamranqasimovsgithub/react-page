import { useState, useEffect, useContext } from 'react'
import '../css/style.css'
import { getAllByAltText, render } from '@testing-library/react'
import { useLoaderData } from 'react-router-dom'
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

let sort='';


function Galerry() {
    function testFunction(event){
        console.log('SELEXTBOOK', event.target);

        context.selectBook(event.target.value);
        handleChange(event);
        console.log('COLOR', event.currentTarget.id);
        if(event.target.id === 'choose'){
            document.getElementById('choose').style.color='red'
        }
    }

    const context = useContext(BooksContext);
    console.log(context);

    const [myCar, setMyCar] = useState("");
    const [category, setCategory] = useState(0);
    sort = myCar;
    const handleChange = (event) => {
        setMyCar(event.target.value);
        setCategory(event.target.value);
    }
    console.log('CRADDDDDD', sort)


    sort = myCar;
    sort = `${sort}`;
   
    return (
        <div  className='container filter-section margin-top-80'>
            <div className="row">
                    <div className="column">
                        <div className="filter-panel">
                            <h3>Category</h3>
                            <div className="filter-group">
                                <form>
                                    <select value={myCar} onChange={testFunction}>
                                        <option id='choose' value="Empty"><span></span></option>
                                        <option value="Mountain">Mountain</option>
                                        <option value="Field">Field</option>
                                        <option  value="Waterfall">Waterfall</option>
                                    </select>
                                </form>
                                {/* <h3>{myCar}</h3> */}
                            </div>
                        </div>
                    </div>
            
            
                <div className="column">
                    <div className="galerry-photos">
                    <h2>Travel beautiful places in the world</h2>

                        <div id='' className="image-list">
                            {
                                context.state.filterBook.map(book => 
                                <div className="rivers" key={book.id}>
                                    <img src={book.image}  alt={book.name} />
                                    <h4>{book.name}</h4>
                                </div>
                            )} 
                        </div>

                </div>

                </div>  


        </div>
    </div>
    )
  }
  




export default Galerry;