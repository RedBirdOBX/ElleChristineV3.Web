import React from 'react';

const Photo = (props) =>
{
    const imgPath = "https://elle-christine-web.azurewebsites.net/imgs/content/gallery/" + props.photo.fileName;

    return (
        <div>

            <div>
                <img src={imgPath} />
            </div>
            <div>
                {props.photo.description}
            </div>
        </div>
    );
};

export default Photo;
