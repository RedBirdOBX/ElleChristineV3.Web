import React from 'react';
import { Link } from 'react-router-dom';

const FooterPlugInComponent = (props) =>
{
    return (
<footer>
    <div className="container">
        <div className="row mt-n1-9">

            <div className="col-md-6 col-lg-4 mt-1-9">

                <img alt="footer-logo" src="imgs/logos/logo-footer.png" />
                <div className="mt-1-9 footer-social-icons">
                    <ul className="ps-0">
                        <li>
                            <Link to="https://www.facebook.com/ElleChristineMusic"
                                    target="_blank"
                                    title="Facebook">
                                <span className="fab fa-facebook-f"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com/ellechristinemusicc"
                                    target="_blank"
                                    title="Instagram">
                                <span className="fab fa-instagram"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.youtube.com/@@ellechristinemusic"
                                    target="_blank"
                                    title="YouTube">
                                <span className="fab fa-youtube"></span>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="col-md-6 col-lg-4 mt-1-9">
                <h3 className="footer-title-style2 text-primary">Quick Links</h3>
                <div className="row">
                    <div className="col-md-6 pe-lg-0">
                        <ul className="footer-list mb-2 mb-md-0 ps-0">
                            <li><Link to="/" title="Home">Home</Link></li>
                            <li><Link to="/About" title="About">About</Link></li>
                            <li><Link to="/Shows" title="Shows">Shows</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6 pe-lg-0">
                        <ul className="footer-list mb-2 mb-md-0 ps-0">
                            <li><Link to="/Photos" title="Photos">Photos</Link></li>
                            <li><Link to="/Videos" title="Videos">Videos</Link></li>
                            <li><Link to="/Media" title="Media">Media</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 offset-xl-1 mt-1-9">
                <h3 className="footer-title-style2 text-primary">Get in Touch</h3>
                <ul className="footer-list ps-0">
                    <li>
                        <span className="d-inline-block align-top">
                            <span className="fas fa-mobile-alt text-primary"></span>
                        </span>
                        <span className="d-inline-block w-85 align-top ps-2">
                            <a href="tel:4432859151">(443) 285-9151</a>
                        </span>
                    </li>
                    <li>
                        <span className="d-inline-block align-top">
                            <span className="far fa-envelope text-primary"></span>
                        </span>
                        <span className="d-inline-block w-85 align-top ps-2">
                            <a href="mailto:ellechristinemusic@gmail.com">ellechristinemusic@gmail.com</a>
                        </span>
                    </li>
                </ul>
            </div>

        </div>

    </div>
    <div className="footer-bar">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                    <p>
                        Elle Christine&nbsp;
                        <span className="current-year"></span>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
    );
};

export default FooterPlugInComponent;