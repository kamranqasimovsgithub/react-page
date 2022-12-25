import '../css/style.css'
import { useEffect, useState } from 'react';

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
            <header id='home' className="header animate-left margin-bottom-80">
                <div  onScroll={changeSticky} id='navbar' className=" container container-header">
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
                                                    <a href="#home">Home</a>
                                                </li>
                                                <li className="dropdown-column">
                                                    <a href="#1">About</a>
                                                </li>
                                                <li className="dropdown-column">
                                                    <a href="#2">Features</a>
                                                </li> 
                                                <li className="dropdown-column">
                                                    <a href="#3">Team</a>
                                                </li> 
                                                <li className="dropdown-column">
                                                    <a href="#4">Contact</a>
                                                </li>       
                                            </ul>
                                        </div>
                                        </div> 
                                    </div>

                                    <nav className="navigation">
                                        <ul className="navigation-list">
                                            <li className="navigation-item">
                                                
                                                <a href="#home" className="navigation-link">
                                                    Home
                                                </a>
                                            </li>
                                            <li className="navigation-item">
                                                <a href="#1" className="navigation-link">
                                                    About
                                                </a>
                                            </li>                                    
                                            <li className="navigation-item">
                                                <a href="#2" className="navigation-link">
                                                    Features
                                                </a>
                                            </li>
                                            <li className="navigation-item">
                                                <a href="#3" className="navigation-link">
                                                    Team
                                                </a>
                                            </li>                                    
                                            <li className="navigation-item">
                                                <a href="#4" className="navigation-link">
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
            </header>
        </div>
    )
  };
  
export default Element;