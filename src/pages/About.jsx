import { useEffect, useState } from 'react';
import heroimage from '../image/about-hero.jpg';

const About = () => {

    const [opac, changeOpacity] = useState(0)
    useEffect(() => {
        
        if(opac === 1){
            document.getElementById('over1').style.display='block'
        }else{
            document.getElementById('over1').style.display='none'

        }
    
    }, [opac]);

    

      


    return (     
        <section  className="container hero-section margin-top-80">
            <header class="section-header text-center margin-bottom-30">
                <h2 class='margin-bottom-30'>About</h2>
            </header>
            
            <div className="row">
                <div className="column">
                    <div className="hero-image text-right">
                        <img onMouseOver={()=>changeOpacity(1)} onMouseOut={()=>changeOpacity(0)} id='hero' src={heroimage} alt="Hero" srcset=""/>
                    </div>
                </div>

                <div className="column">
                    <div className="hero-content">
                        <h1>The best places to take pictures</h1>
                        <p>There are a variety of activities that one can do in winter, summer, fall, and spring. There are also a variety of accommodations available in each season</p>
                        <a href="" className="button purple-button">Learn more</a>
                    </div> 
                </div>
                
        
            </div> <span id='gallerry'></span>
        </section>
            
    )
  };
  
export default About;