import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import HomeComponent from './Components/Home/HomeComponent';
import AboutComponent from './Components/About/AboutComponent';
import ShowsComponent from './Components/Shows/ShowsComponent';

const App = () =>
{

    return (
        <div>
            <BrowserRouter>

                <HeaderComponent />
                <Routes>
                    <Route exact path="/" element={<HomeComponent />} />
                    <Route exact path="/About" element={<AboutComponent />} />
                    <Route exact path="/Shows" element={<ShowsComponent />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    );
};

export default App;
