import React, { useState, useEffect } from 'react';
import ShowsPageTitleComponent from './ShowsPageTitleComponent';
import UpcomingShowsComponent from './UpcomingShowsComponent';
import PreviousShowsComponent from './PreviousShowsComponent';

const ShowsComponent = (props) =>
{
    const [allShows, setAllShows] = useState([]);
    const [upcomingShows, setUpcomingShows] = useState([]);
    const [previousShows, setPreviousShows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiBaseUrl = "https://elle-christine-api.azurewebsites.net/api/";

    useEffect(() => {
        const fetchShows = async () =>
        {
            try
            {
                // all shows
                const getHeaders = new Headers();
                const getRequestOptions = { method: "GET", headers: getHeaders, redirect: "follow" };
                const allShowsResponse = await fetch(`${apiBaseUrl}shows`, getRequestOptions);
                if (!allShowsResponse.ok)
                {
                    throw new Error(`HTTP error! status: ${allShowsResponse.status}`);
                }
                const allJson = await allShowsResponse.json();
                //console.log(allJson);


                // upcoming shows
                let upcomingPostHeaders = new Headers();
                upcomingPostHeaders.append("Content-Type", "application/json");

                let upcomingFilterStartDate = new Date();
                let upcomingFilterEndDate = new Date(upcomingFilterStartDate.getFullYear() + 1, upcomingFilterStartDate.getMonth(), upcomingFilterStartDate.getDate());

                //console.log("Start Upcoming", upcomingFilterStartDate);
                //console.log("End Upcoming", upcomingFilterEndDate);

                let upcomingFilter = { active: true, startDate : upcomingFilterStartDate, endDate : upcomingFilterEndDate };
                let upcomingFilterJson = JSON.stringify(upcomingFilter);
                const upcomingPostRequestOptions =
                {
                    method: "POST",
                    headers: upcomingPostHeaders,
                    body: upcomingFilterJson,
                    redirect: "follow"
                };

                const upcomingShowsResponse = await fetch(`${apiBaseUrl}shows/filter`, upcomingPostRequestOptions);
                if (!upcomingShowsResponse.ok)
                {
                    throw new Error(`HTTP error! status: ${upcomingShowsResponse.status}`);
                }
                const upcomingJson = await upcomingShowsResponse.json();
                // end upcoming

                // previous shows
                let prevPostHeaders = new Headers();
                prevPostHeaders.append("Content-Type", "application/json");

                let prevFilterStartDate = new Date(2024, 0, 1);
                let today = new Date();
                let prevFilterEndDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);

                //console.log("Start PREV", prevFilterStartDate);
                //console.log("End PREV", prevFilterEndDate);

                let prevFilter = { active: true, startDate : prevFilterStartDate, endDate : prevFilterEndDate };
                let prevFilterJson = JSON.stringify(prevFilter);
                const prevPostRequestOptions =
                {
                    method: "POST",
                    headers: prevPostHeaders,
                    body: prevFilterJson,
                    redirect: "follow"
                };

                const prevShowsResponse = await fetch(`${apiBaseUrl}shows/filter`, prevPostRequestOptions);
                if (!prevShowsResponse.ok)
                {
                    throw new Error(`HTTP error! status: ${prevShowsResponse.status}`);
                }
                const prevJson = await prevShowsResponse.json();
                // end prev

                setAllShows(allJson);
                setUpcomingShows(upcomingJson);
                setPreviousShows(prevJson);

                setIsLoading(false);
            }
            catch (error)
            {
                console.error("Fetching upcoming shows failed:", error);
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchShows();
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
            <ShowsPageTitleComponent />

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-11 col-lg-10">
                            <UpcomingShowsComponent shows={upcomingShows} />
                        </div>
                    </div>

                    <div className="my-5"></div>

                    <div className="row justify-content-center">
                        <div className="col-md-11 col-lg-10">
                            <PreviousShowsComponent shows={previousShows} />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ShowsComponent;