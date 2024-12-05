import React from 'react';
import PhotoComponent from './PhotoComponent';

const PhotoListComponent = (props) =>
{
    return (
            <div className="row portfolio-gallery mt-n1-9">
                {
                    props.photos.map((p) => <PhotoComponent key={p.id} photo={p} />)
                }
            </div>
    );
};

export default PhotoListComponent;