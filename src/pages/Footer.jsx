

function Footer(){


    return (
        <footer id="4" className="footer border">
            <div className="container">
                <div className="row footer-contact-button margin-bottom-80">
                    <div className="column footer-h3-p text-center mobile-margin-bottom">
                        <h3>Contact us</h3>
                    </div>                    
                </div>

                <div className="row margin-bottom-95 footer-contact-social">
                    <div className="column  mobile-margin-bottom">
                        <p className="mouse-link"><i class="fa fa-envelope"></i></p>  
                        <h4 className="mail-head">E-mail</h4>
                        <a href="mailto:example@mail.com" className="">example@gmail.com</a>
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
                                  
                            

                <div className="column social mobile-margin-bottom">
                    <p className="mouse-link"><i class="fa fa-share-alt"></i></p>  

                    <div className="footer-menu">
                    <h4 className="margin-bottom-26">Social Media</h4>
                    <ul className="social-media-list">
                        <li className="social-media-item">
                            <a href="#" class="social-media-link">
                                <i class="fa fa-facebook-official"></i>
                            </a>
                        </li>
                        <li className="social-media-item">
                            <a href="#" class="social-media-link">
                                <i class="fa fa-instagram"></i>
                            </a>
                        </li>
                        <li class="social-media-item">
                            <a href="#" class="social-media-link">
                            <i class="fa fa-youtube-play" style={{}}></i>
                            </a>
                        </li>
                        <li className="social-media-item">
                            <a href="#" className="social-media-link">
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
                            © Datalandhouse, 2022
                        </p>
                    </div>
                </div>
            </div>
    </footer>
    )
}
export default Footer;