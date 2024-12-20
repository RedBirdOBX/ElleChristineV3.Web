import React, { useEffect } from 'react';

const Photo = (props) =>
{
    const imgPath = "https://kind-sky-0578ef80f.4.azurestaticapps.net/imgs/content/gallery/" + props.photo.fileName;
    const fileName = `imgs/content/gallery/${props.photo.fileName}`;
    const dataSubHtml = `<h4 class='text-white'>${props.photo.heading}</h4><p>${props.photo.description}</p>`;
    const text = `${props.photo.heading}. ${props.photo.description}`;
    const heightWidth = `${props.photo.height}-${props.photo.width}`;

    return (
                <a data-lg-size={heightWidth}
                    data-pinterest-text={text}
                    data-tweet-text={text}
                    className="gallery__item"
                    data-src={fileName}
                    data-sub-html={dataSubHtml}>
                    <img className="img-responsive" src={imgPath} />
                </a>

    );
};

export default Photo;
