import '../css/style.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Element = () => {


    const [pos, changeSticky] = useState(0)
    
    useEffect(() => {

        window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
        }
        
       
        ///alert(1)
    
    }, [pos]);


    return (
        <div className="tst">
            <header id='home' className="header animate-left">
                <div  onScroll={changeSticky} id='navbar' className="container-header">
                    <div  className="row row-small-size align-center justify-between">
                        <div  className="column ">
                            <div className="row  align-center">
                                <div className="column">
                                    <a href="#home" className="logo" aria-label="logo" title="logo">
                                        <i class="fa fa-plane" style={{fontSize:'48px', color:'white'}}></i>
                                    </a>
                                </div>
                        
                        <div className="column ">

                                <div className="navbar">
                                        <div className="dropdown">
                                        <button className="dropbtn">
                                            <i class="fa fa-bars"></i>
                                        </button>
                                        <div className="dropdown-content">
                                            
                                            <ul className="dropdown-row">
                                                <li className="dropdown-column">
                                                    <a href="#home">
                                                        <Link to='/react-page/' className='a'>Home</Link>
                                                    </a>
                                                </li>
                                                <li className="dropdown-column">
                                                    <a href="#1">
                                                    <Link to='/react-page/' className='a'>About</Link>
                                                    </a>
                                                </li>
                                                <li className="dropdown-column">
                                                <a href="#2">
                                                <Link to='/react-page/' className='a'>Galerry</Link>
                                                </a>
                                                </li> 
                                                <li className="dropdown-column">
                                                <a href="#3">
                                                <Link to='/react-page/' className='a'>Blog</Link>
                                                </a>
                                                </li> 
                                                <li className="dropdown-column">
                                                    <a href="#4">
                                                    <Link to='/react-page/' className='a'>Contact</Link>
                                                </a>
                                                </li>       
                                            </ul>
                                        </div>
                                        </div> 
                                    </div>

                                    <nav className="navigation">
                                        <ul className="navigation-list">
                                            <li className="navigation-item">
                                                <Link to='/react-page/'><a href="#home" className="navigation-link">
                                                    Home
                                                </a></Link>
                                            </li>
                                            <li className="navigation-item">
                                            <a href="#about" className="navigation-link">
                                                    About
                                                </a>
                                            </li>                                    
                                            <li className="navigation-item">
                                                <a href="#gallerry" className="navigation-link">
                                                    Gallery
                                                </a>
                                            </li>
                                            <li className="navigation-item">
                                                <a href="#blog" className="navigation-link">
                                                    Blog
                                                </a>
                                            </li>                                    
                                            <li className="navigation-item">
                                                <a href="#contact" className="navigation-link">
                                                    Contact
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </nav>
                                </div>
                            </div>                   
                        </div>   
                        
                        <div className="column">
                            <a href="#" className="button icon-button white-button">
                                <span>Sign In</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header><span id='about'></span>
        </div>
    )
  };
  
export default Element;