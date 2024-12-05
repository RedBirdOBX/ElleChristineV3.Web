import VideosTitleComponent from './VideosTitleComponent';
import VideoListComponent from './VideoListComponent';

import React, { useState, useEffect } from 'react';

const VideosPageComponent = (props) =>
{

    const [videoData, setVideoData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = "https://elle-christine-api.azurewebsites.net/api/videos";

    useEffect(() => {
        const fetchVideos = async () =>
        {
            try
            {
                const response = await fetch(url);
                if (!response.ok)
                {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();

                setVideoData(json);
                setIsLoading(false);
            }
            catch (error)
            {
                console.error("Fetching videos failed:", error);
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchVideos();
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
            <VideosTitleComponent />

            <section>
                <div className="container">

                    <div className="row mb-1-9 mb-lg-6 box-hover">
                        <div className="section-heading col-12">
                            <h2>Elle Christine Video Gallery</h2>
                            <p className="w-md-75 w-lg-55">A collection of the latest videos.</p>
                        </div>

                        <div className="col-12">
                        { <VideoListComponent videos={videoData}/> }
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
};

export default VideosPageComponent;