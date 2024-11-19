import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeaderPlugInComponent from './Components/PlugIns/HeaderPlugInComponent';
import FooterPlugInComponent from './Components/PlugIns/FooterPlugInComponent';

import HomePageComponent from './Components/Pages/Home/HomePageComponent';
import AboutPageComponent from './Components/Pages/About/AboutPageComponent';
import ShowsPageComponent from './Components/Pages/Shows/ShowsPageComponent';
import PhotosPageComponent from './Components/Pages/Photos/PhotosPageComponent';
import VideosPageComponent from './Components/Pages/Videos/VideosPageComponent';
import MediaPageComponent from './Components/Pages/Media/MediaPageComponent';


const App = () =>
{

    return (
        <div>
            <BrowserRouter>

                <HeaderPlugInComponent />
                <Routes>
                    <Route exact path="/" element={<HomePageComponent />} />
                    <Route exact path="/About" element={<AboutPageComponent />} />
                    <Route exact path="/Shows" element={<ShowsPageComponent />} />
                    <Route exact path="/Photos" element={<PhotosPageComponent />} />
                    <Route exact path="/Videos" element={<VideosPageComponent />} />
                    <Route exact path="/Media" element={<MediaPageComponent />} />
                </Routes>
                <FooterPlugInComponent />
            </BrowserRouter>
        </div>
    );
};

export default App;
