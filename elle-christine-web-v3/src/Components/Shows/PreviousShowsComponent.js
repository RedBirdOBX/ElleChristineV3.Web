import React, { useState, useEffect } from 'react';
import ShowCompnent from './ShowComponent';

const PreviousShowsComponent = (props) =>
{
    return (
        <div>
            <div className="section-heading">
                <h2>Previous Shows</h2>
            </div>

            { props.shows.map((s) => <ShowCompnent key={s.id} show={s} />)  }
        </div>
    );
};

export default PreviousShowsComponent;