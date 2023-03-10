import { useState, useEffect, useContext } from 'react'
import '../css/style.css'
import { getAllByAltText, render } from '@testing-library/react'
import { useLoaderData } from 'react-router-dom'
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

let sort='';


function Galerry() {
    function testFunction(event){

        context.selectImage(event.target.value);
        handleChange(event);
        if(event.target.id === 'choose'){
            document.getElementById('choose').style.color='red'
        }
    }

    const context = useContext(BooksContext);

    const [myCar, setMyCar] = useState("");
    const [category, setCategory] = useState(0);
    sort = myCar;
    const handleChange = (event) => {
        setMyCar(event.target.value);
        setCategory(event.target.value);
    }


    sort = myCar;
    sort = `${sort}`;
   
    return (
        <div  className='container filter-section margin-top-80'>
            <header class="section-header text-center margin-bottom-30">
                <h2 class='margin-bottom-30'>Gallery</h2>
            </header>
            
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
                                context.state.filterImage.map(item => 
                                <div className="rivers" key={item.id}>
                                    <img src={item.image}  alt={item.name} />
                                    <h4>{item.name}</h4>
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