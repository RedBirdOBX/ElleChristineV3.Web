import GalleryPageTitleComponent from './GalleryPageTitleComponent';
import PhotoList from './PhotoList';

import React, { useState, useEffect } from 'react';

const GalleryComponent = (props) =>
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
        <div>
            <GalleryPageTitleComponent />

            <section>
                <div className="container">

                    <div className="row mb-1-9 mb-lg-6 box-hover">
                        <div className="section-heading col-12">
                            <h2>Elle Christine Gallery</h2>
                            <p className="w-md-75 w-lg-55">A collection of the latest pictures and videos.</p>
                        </div>
                        <div className="col-12">
                            <div className="horizontaltab">
                                <ul className="resp-tabs-list hor_1">
                                    <li><i className="fas fa-image"></i> Photos</li>
                                    <li><i className="fas fa-photo-video"></i> Videos</li>
                                </ul>
                                <div className="resp-tabs-container hor_1">
                                    <div>
                                        <div className="row portfolio-gallery mt-n1-9">
                                            { <PhotoList photos={photoData}/> }
                                        </div>
                                    </div>
                                    <div>
                                        <div className="row portfolio-gallery">
                                            {/* @foreach (var video in Model.Videos)
                                            {
                                                <partial name="Partials/Gallery/_Video" model="video" />
                                            } */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default GalleryComponent;