import React, { useState, useEffect } from 'react';
import ShowCompnent from './ShowComponent';

const UpcomingShowsComponent = (props) =>
{
    return (
        <div>
            <div className="section-heading">
                <h2>Upcoming Shows</h2>
            </div>

            { props.shows.map((s) => <ShowCompnent key={s.id} show={s} />)  }
        </div>
    );
};

export default UpcomingShowsComponent;