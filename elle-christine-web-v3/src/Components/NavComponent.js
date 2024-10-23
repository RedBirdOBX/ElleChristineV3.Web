import React from 'react';

const NavComponent = (props) =>
{
    return (
        <div class="navbar-default border-bottom border-color-light-white">
            <div class="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
                <div class="row align-items-center">
                    <div class="col-12">
                        <div class="menu_area alt-font">
                            <nav class="navbar navbar-expand-lg navbar-light p-0">

                                <div class="navbar-header navbar-header-custom">
                                    <a href="/" class="navbar-brand h-default">
                                        <img id="logo" src="imgs/logos/header-logo.png"
                                            alt="Elle Christine - original singer, songwriter from Richmond, VA"
                                            title="Elle Christine - original singer, songwriter from Richmond, VA" />
                                    </a>
                                </div>

                                <div class="navbar-toggler"></div>

                                <ul class="navbar-nav ms-auto" id="nav" style={{display: 'none'}}>
                                    <li>
                                        <a href="/Index">Home</a>
                                    </li>
                                    <li>
                                        <a href="/About" title="About">About</a>
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