

function Footer(){


    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="row footer-contact-button margin-bottom-30">
                    <div className="column footer-h3-p text-center">
                        <h3>Contact us</h3>
                    </div>                    
                </div>

                <div className="row margin-bottom-30 footer-contact-social">
                    <div className="column  mobile-margin-bottom">
                            <p className="mouse-link"><i class="fa fa-envelope"></i></p>  
                            
                            <div className="footer-menu">
                                <h4 className='margin-bottom-26'>Useful Links</h4>
                                <ul className="footer-menu-list">

                                    <li className="footer-menu-item">
                                        <a href="#" className="footer-menu-link">example@gmail.com</a>
                                    </li>
                                    
                                </ul>
                            </div> 
                            
                        </div>                                  
                                  
                            

                    <div className="column  mobile-margin-bottom">
                        <p className="mouse-link"><i className="fa fa-mouse-pointer "></i></p>  
                        
                        <div className="footer-menu">
                            <h4 className='margin-bottom-26'>Useful Links</h4>
                            <ul className="footer-menu-list">

                                <li className="footer-menu-item">
                                    <a href="#home" className="footer-menu-link">Home</a>
                                </li>
                                <li className="footer-menu-item">
                                    <a href="#1" className="footer-menu-link">About</a>
                                </li>
                                <li className="footer-menu-item">
                                    <a href="#2" className="footer-menu-link">Galerry</a>
                                </li>
                                <li className="footer-menu-item">
                                    <a href="#3" className="footer-menu-link">Blog</a>
                                </li>
                                <li className="footer-menu-item">
                                    <a href="#3" className="footer-menu-link">Contact</a>
                                </li>
                            </ul>
                        </div> 
                        
                    </div>                                  
                                  
                            

                <div className="column  mobile-margin-bottom">
                    <p className="mouse-link"><i class="fa fa-share-alt"></i></p>  

                    <div className="footer-menu ">
                        <h4 className="margin-bottom-26">Social Media</h4>
                        <ul className="footer-menu-list social-media">
                            <li className="footer-menu-item">
                                <a href="#" class="footer-menu-link">
                                    <i class="fa fa-facebook-official"></i>
                                </a>
                            </li>
                            <li className="footer-menu-item">
                                <a href="#" class="footer-menu-link">
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li class="footer-menu-item">
                                <a href="#" class="footer-menu-link">
                                    <i class="fa fa-youtube-play" style={{}}></i>
                                </a>
                            </li>
                            <li className="footer-menu-item">
                                <a href="#" className="footer-menu-link">
                                    <i class="fa fa-pinterest"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                </div>
                <div className="row justify-between footer-copyright">
                    <div className="column  mobile-margin-bottom">
                        <p className="copyright">
                            © 2022 UsingReact
                        </p>
                    </div>
                </div>
            </div>
    </footer>
    )
}
export default Footer;