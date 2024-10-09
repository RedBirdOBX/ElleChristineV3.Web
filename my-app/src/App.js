import React, { useState } from 'react';
import PhotoList from './Components/PhotoList';


const initPhotos =
[
    {
        "id": 25,
        "fileName": "09132024-1.jpg",
        "heading": "Elle Christine and band",
        "description": "Elle Christine at Bryan Park Bar and Grill, September 2024",
        "photoDate": "2024-09-13T00:00:00",
        "added": "2024-09-16T00:00:00",
        "active": true
    },
    {
        "id": 26,
        "fileName": "09132024-2.jpg",
        "heading": "Elle Christine and band",
        "description": "Shane Fowlkes on Drums",
        "photoDate": "2024-09-13T00:00:00",
        "added": "2024-09-16T00:00:00",
        "active": true,
    }
];

let photoData;

const FetchPhotos = async () =>
{
    // visit: https://stackoverflow.com/questions/36911241/how-to-extract-data-out-of-a-promise
    let response = await fetch("https://elle-christine-api.azurewebsites.net/api/photos");
    let json = await response.json();
    return json;
};

const App = () =>
{

    // wtf is this not an array??
    photoData = FetchPhotos();

    return (
        <div>
            { <PhotoList photos={photoData}/> }
        </div>
    );
};

export default App;
