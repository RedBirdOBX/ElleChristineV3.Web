import React from 'react';
import Photo from './Photo';

const PhotoList = (props) =>
{
    return (
            <div>
                {
                    props.photos.map((p) => <Photo key={p.id} photo={p} />)
                }
            </div>
    );
};

export default PhotoList;