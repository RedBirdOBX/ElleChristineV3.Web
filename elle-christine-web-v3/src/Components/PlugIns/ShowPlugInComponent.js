import React from 'react';
import { Link } from 'react-router-dom';

const ShowCompnent = (props) =>
{

    let cardCss = (props.show.id % 2 === 0) ? "card-body bg-light" : "card-body";

    let showDate = new Date(props.show.date);

    return (
            <div className="row">
                <div className="col-lg-12 mb-1-9">

                    <article className="card blog-card">
                        <div className="row g-0">

                            <div className="col-md-6">
                                <div className="card-img bg-img cover-background h-100"
                                        data-overlay-dark="0"
                                        style={{backgroundImage: `url(imgs/content/gigs/${props.show.image})`}}>
                                </div>
                            </div>

                            <div className="col-md-6">

                                <div className={cardCss}>

                                    <div className="d-block text-muted mb-2">
                                        { showDate.toDateString() }
                                    </div>

                                    <h3>{ props.show.title }</h3>

                                    <p>
                                        { props.show.location }<br />
                                        { props.show.time }
                                    </p>

                                    <p dangerouslySetInnerHTML={{ __html: props.show.description }}></p>

                                    <div className="row">

                                        <div className="col-6">
                                            <Link target="_blank" alt="location" to={props.show.mapUrl}>
                                                <span className="fa fa-2x fa-map-marker"></span>&nbsp;Map
                                            </Link>
                                        </div>

                                        <div className="col-6">
                                            {
                                                (props.show.url !== null) ?
                                                <Link target="_blank" alt="location" to={props.show.url}>
                                                    <span className="fa fa-2x fa-globe fa-fw"></span>{props.show.title}
                                                </Link>
                                                : ""
                                            }
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </article>

                </div>
            </div>
    );
};

export default ShowCompnent;