import React, { useEffect } from 'react';
import WOW from 'wowjs';

// for the Wowjs library
// https://stackoverflow.com/questions/70268322/how-to-use-wow-js-or-any-other-library-in-react


const Photo = (props) =>
{
    const imgPath = "https://kind-sky-0578ef80f.4.azurestaticapps.net/imgs/content/gallery/" + props.photo.fileName;
    const fileName = `imgs/content/gallery/${props.photo.fileName}`;
    const dataSubHtml = `<h4 class='text-white'>${props.photo.heading}</h4><p>${props.photo.description}</p>`;

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])

    return (
            <div className="col-md-6 col-lg-4 mt-1-9 wow fadeIn"
                    data-wow-delay="1000ms"
                    data-src={fileName}
                    data-sub-html={dataSubHtml}>
                <div className="portfolio-style1">
                    <img src={imgPath}
                            className="border-radius-10"
                            alt={props.photo.description} />
                    <a href="#!" className="portfolio-text">
                        <span className="display-31 font-weight-700 text-orange letter-spacing-2 text-uppercase d-block mb-2">
                            {props.photo.description}
                        </span>
                        <h3 className="mb-0 h5">
                            {props.photo.heading}
                        </h3>
                    </a>
                </div>
            </div>
    );
};

export default Photo;
