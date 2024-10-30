import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const NavComponent = (props) =>
{
    return (
        <div className="navbar-default border-bottom border-color-light-white">
            <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="menu_area alt-font">
                            <nav className="navbar navbar-expand-lg navbar-light p-0">

                                <div className="navbar-header navbar-header-custom">
                                    <a href="/"
                                        className="navbar-brand h-default">
                                        <img id="logo"
                                            src="imgs/logos/header-logo.png"
                                            alt="Elle Christine - original singer, songwriter from Richmond, VA"
                                            title="Elle Christine - original singer, songwriter from Richmond, VA" />
                                    </a>
                                </div>

                                <div className="navbar-toggler"></div>

                                <ul className="navbar-nav ms-auto" id="nav" style={{display: 'none'}}>
                                    <li>
                                        <Link to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/About">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="/Shows" title="Shows">Shows</a>
                                    </li>
                                    <li>
                                        <a href="/Gallery" title="Gallery">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="/Media" title="Media">Media</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavComponent;