import React, { useEffect } from 'react';
import WOW from 'wowjs';

// for the Wowjs library
// https://stackoverflow.com/questions/70268322/how-to-use-wow-js-or-any-other-library-in-react


const Photo = (props) =>
{
    const imgPath = "https://kind-sky-0578ef80f.4.azurestaticapps.net/imgs/content/gallery/" + props.photo.fileName;
    const fileName = `imgs/content/gallery/${props.photo.fileName}`;
    const dataSubHtml = `<h4 class='text-white'>${props.photo.heading}</h4><p>${props.photo.description}</p>`;
    const text = `${props.photo.heading}. ${props.photo.description}`;


    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])

    return (
                <a data-lg-size="1600-2400"
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
