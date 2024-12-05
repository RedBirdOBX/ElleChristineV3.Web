import React from 'react';
import ShowPlugInComponent from '../../PlugIns/ShowPlugInComponent';

const ShowsListComponent = (props) =>
{
    return (
        <div>
            <div className="section-heading">
                <h2>{props.title}</h2>
            </div>

            { props.shows.map((s) => <ShowPlugInComponent key={s.id} show={s} />)  }
        </div>
    );
};

export default ShowsListComponent;