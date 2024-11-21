import React from 'react';

const Photo = (props) =>
{
    const imgPath = "https://elle-christine-web.azurewebsites.net/imgs/content/gallery/" + props.photo.fileName;
    const fileName = `imgs/content/gallery/${props.photo.fileName}`;
    const dataSubHtml = `<h4 class='text-white'>${props.photo.heading}</h4><p>${props.photo.description}</p>`;

    return (
            <div className="col-md-6 col-lg-4 mt-1-9 wow fadeIn"
                    data-wow-delay="100ms"
                    data-src={fileName}
                    data-sub-html={dataSubHtml}>
                <div class="portfolio-style1">
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
