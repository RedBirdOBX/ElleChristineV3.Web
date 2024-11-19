import React from 'react';
import { Link } from 'react-router-dom';

const ShowsPageTitleComponent = (props) =>
{
    return (
                <section className="page-title-section2 bg-img cover-background top-position1"
                            data-overlay-dark="6"
                            style={{backgroundImage: `url(imgs/page-titles/shows.jpg)`}}
                            id="PageTitleSection">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12">
                                <h1>Shows</h1>
                            </div>
                            <div className="col-md-12">
                                <ul className="ps-0">
                                    <li>
                                        <Link to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Shows">
                                            Shows
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
    );
};

export default ShowsPageTitleComponent;