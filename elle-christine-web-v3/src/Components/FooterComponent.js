import React from 'react';

const FooterComponent = (props) =>
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
                            <a href="https://www.facebook.com/ElleChristineMusic" target="_blank">
                                <span className="fab fa-facebook-f"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ellechristinemusic" target="_blank">
                                <span className="fab fa-instagram"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@@ellechristinemusic" target="_blank">
                                <span className="fab fa-youtube"></span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="col-md-6 col-lg-4 mt-1-9">
                <h3 className="footer-title-style2 text-primary">Quick Links</h3>
                <div className="row">
                    <div className="col-md-12 pe-lg-0">
                        <ul className="footer-list mb-2 mb-md-0 ps-0">
                            <li><a href="/" title="">Home</a></li>
                            <li><a href="/About" title="">About</a></li>
                            <li><a href="/Shows" title="Shows">Shows</a></li>
                            <li><a href="/Gallery" title="">Gallery</a></li>
                            <li><a href="/Media" title="">Media</a></li>
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
                        Elle Christine
                        <span className="current-year"></span>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
    );
};

export default FooterComponent;