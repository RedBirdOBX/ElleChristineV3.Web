import PhotosTitleComponent from './PhotosTitleComponent';
import PhotoListComponent from './PhotoListComponent';
import React, { useState, useEffect } from 'react';

const PhotosPageComponent = (props) =>
{

    const [photoData, setPhotoData] = useState([]);
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
        <>
            <PhotosTitleComponent />

            <section>
                <div className="container">

                    <div className="row mb-1-9 mb-lg-6 box-hover">
                        <div className="section-heading col-12">
                            <h2>Elle Christine Photo Gallery</h2>
                            <p className="w-md-75 w-lg-55">A collection of the latest photos.</p>
                        </div>

                        <div className="col-12">
                        { <PhotoListComponent photos={photoData}/> }
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
};

export default PhotosPageComponent;