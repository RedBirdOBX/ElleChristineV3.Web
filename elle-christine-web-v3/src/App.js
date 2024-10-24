import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import HomeComponent from './Components/Home/HomeComponent';

const App = () =>
{

    return (
        <div>
            <BrowserRouter>

                <HeaderComponent />
                <Routes>
                    <Route exact path="/" element={<HomeComponent />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    );
};

export default App;
