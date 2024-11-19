import React, { useState, useEffect } from 'react';
import ShowPlugInComponent from '../../PlugIns/ShowPlugInComponent';

const UpcomingComponent = (props) =>
{
    const [nextShow, setNextShow] = useState({});
    const url = "https://elle-christine-api.azurewebsites.net/api/shows/nextshow";

    // call api for next show
    useEffect(() =>
    {
        const fetchNextShow = async () =>
        {
            try
            {
                const response = await fetch(url);
                if (!response.ok)
                {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // obj
                const json = await response.json();
                setNextShow(json);
            }
            catch (error)
            {
                console.error("Fetching next show failed:", error);
            }
        };

        fetchNextShow();
    }, []);


    return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-11 col-lg-10">
                        <div className="section-heading">
                            <h2>Next Show</h2>
                        </div>

                        <ShowPlugInComponent show={nextShow} />
                    </div>
                </div>

            </div>
    );
};

export default UpcomingComponent;