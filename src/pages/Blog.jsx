import blog1  from  '../image/blog1.jpg'
import blog2  from  '../image/blog2.jpg'
import blog3  from  '../image/blog3.jpg'


const Blog = () =>{
    
    return(
        
        <div  className="container-large blog-cont">
            <header class="section-header text-center margin-bottom-30">
                <h2 class='margin-bottom-30'>Blog</h2>
                <p>Very interesting and cool content</p>
            </header> 
            <div className="row blog-row">
                   
                <div className="column">
                    <div className="container-overlay">
                        <img className="big-image" src={blog1} alt="Avatar" class="image"/>
                        <div className="blog-overlay">
                            <div className="text">
                               <h4>Hello World</h4> 
                               <button>More <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="column">
                        <div className="container-overlay container-overlay-right" style={{paddingBottom: '5px'}}>
                             <img src={blog2} alt="Avatar" class="image"/>
                            <div className="blog-overlay blog-overlay-small" style={{bottom: '5px'}}>
                                <div className="text">
                                <h4>Hello World</h4> 
                                <button>More <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="container-overlay container-overlay-right" style={{paddingTop: '5px'}}>
                            <img src={blog3} alt="Avatar" class="image"/>
                            <div className="blog-overlay blog-overlay-small">
                                <div className="text">
                                    <h4>Hello World</h4> 
                                    <button>More <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Blog;