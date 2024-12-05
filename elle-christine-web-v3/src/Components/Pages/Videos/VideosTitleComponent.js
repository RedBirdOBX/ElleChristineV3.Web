import React from 'react';
import { Link } from 'react-router-dom';

const VideosTitleComponent = (props) =>
{
    return (
                <section className="page-title-section2 bg-img cover-background top-position1"
                            data-overlay-dark="6"
                            style={{backgroundImage: `url(imgs/page-titles/videos.jpg)`}}
                            id="PageTitleSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Videos</h1>
                            </div>
                            <div className="col-md-12">
                                <ul className="ps-0">
                                    <li>
                                        <Link to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Videos">
                                            Videos
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
    );
};

export default VideosTitleComponent;