import React, { useState, useEffect } from 'react';
import PhotoList from './Components/Gallery/PhotoList';

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


const App = () =>
{

    const [photoData, setPhotoData] = useState(initPhotos);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () =>
        {
            try
            {
                const response = await fetch("https://elle-christine-api.azurewebsites.net/api/photos");
                if (!response.ok)
                {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                setPhotoData(json);
                setIsLoading(false);

            }
            catch (error)
            {
                console.error("Fetching photos failed:", error);
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchPhotos();
    }, []);


    if (isLoading)
    {
        return (<div>Loading...</div>);
    }

    if (error)
    {
        return <div>Error: {error}</div>;
    }


    return (
        <div>
            { <PhotoList photos={photoData}/> }
        </div>
    );
};

export default App;
