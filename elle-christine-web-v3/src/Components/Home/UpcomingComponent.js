import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UpcomingComponent = (props) =>
{
    const [nextShow, setNextShow] = useState({});

    // call api for next show
    useEffect(() => {
        const fetchNextShow = async () =>
        {
            try
            {
                const response = await fetch("https://elle-christine-api.azurewebsites.net/api/shows/nextshow");
                if (!response.ok)
                {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                console.log(json);
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
        <section className="bg-light-gray">
            <div className="container">
                <div className="bg-white box-shadow-primary">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src={`imgs/content/gigs/${nextShow.image}`}
                                        alt={`${nextShow.title}`} />
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div>

                                <div className="p-1-6 p-md-1-9">
                                    <h3>Next Show - {nextShow.title}</h3>

                                    <div className="row">
                                        <div className="col-6">
                                            {/* format the time */}
                                            <h6>{nextShow.date}</h6>
                                        </div>
                                        <div className="col-6">
                                            <h6>
                                                {nextShow.location}<br />
                                                {nextShow.time}
                                            </h6>
                                        </div>
                                    </div>

                                    <p>
                                        {/* decode html */}
                                        {nextShow.description}
                                    </p>

                                    <div className="row">
                                        <div className="col-6">

                                            {/* conditionally show this is url is not null */}
                                            {/* @if (!string.IsNullOrWhiteSpace(Model.Url)) */}

                                            <Link target="_blank" alt="location" to={nextShow.url}>
                                                <span className="fa fa-2x fa-globe fa-fw"></span>{nextShow.title}
                                            </Link>

                                        </div>

                                        <div className="col-6">
                                            <Link target="_blank" alt="location" to={nextShow.mapUrl}>
                                                <span className="fa fa-2x fa-map-marker"></span>&nbsp;Map
                                            </Link>
                                        </div>
                                    </div>

                                    <Link to="/Shows"
                                        className="butn medium theme mt-4">
                                        <span>More Shows</span>
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingComponent;