import React from 'react';
import { Link } from 'react-router-dom';

const HomePageTitleComponent = (props) =>
{
    let imgNumber = (Math.ceil(Math.random() * 2));

    return (
            <section className="bg-img banner-section cover-background full-screen left-overlay-dark top-position1"
                        data-overlay-dark="5"
                        style={
                            {
                                backgroundImage: `url(imgs/page-titles/home${imgNumber}.jpg)`,
                                minHeight: "600px",
                            }}
                        id="PageTitleSection">

                <div className="container position-absolute top-50 start-50 translate-middle z-index-9">

                    <div className="row align-items-center">
                        <div className="col-lg-8 col-xxl-6">
                            <h1 id="HomeTitle" className="display-lg-6 mb-3 mb-lg-4 text-white">
                                ELLE CHRISTINE
                            </h1>
                            <p className="w-md-95 lead text-white opacity7 d-none d-sm-block">
                                Original musical creations. Stories inspired by life events.<br />
                                Connect with the human experiences of love, loss, and overcoming hardship.
                            </p>
                            <div className="mt-1-9 text-center">
                                <Link to="/Shows"
                                    className="butn btn-lg primary white-hover">
                                    <span>Upcoming Shows</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
    );
};

export default HomePageTitleComponent;