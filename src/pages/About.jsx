import { useEffect, useState } from 'react';

const About = () => {

    const [opac, changeOpacity] = useState(0)
    useEffect(() => {
        
        // 👇️ set style on body element
        if(opac === 1){
            document.getElementById('over1').style.display='block'
        }else{
            document.getElementById('over1').style.display='none'

        }
        //alert(1)
    
    }, [opac]);

    

      


    return (     
        <section  className="container hero-section margin-top-80">
            <header class="section-header text-center margin-bottom-30">
                <h2 class='margin-bottom-30'>About</h2>
            </header>
            
            <div className="row">
                <div className="column">
                    <div className="hero-image text-right">
                        <img onMouseOver={()=>changeOpacity(1)} onMouseOut={()=>changeOpacity(0)} id='hero' src='https://www.w3schools.com/w3images/lights.jpg' alt="Hero" srcset=""/>
                    </div>
                </div>

                <div className="column">
                    <div className="hero-content">
                        <h1>We offer modern solutions</h1>
                        <p>Optimize cost and accelerate to product development, new services and technologies or enhancements to existing systems which will assist the end user in improving overall service to customers</p>
                        <a href="" className="button purple-button">Learn more</a>
                    </div> 
                </div>
                
        
            </div> <span id='gallerry'></span>
        </section>
            
    )
  };
  
export default About;