import React from 'react';

const AboutBandComponent = (props) =>
{
    return (
            <section className="bg-light-gray">
                <div className="container">

                    <div className="section-heading">
                        <h2>The Band</h2>
                    </div>

                    <div className="row mt-n1-9">
                        <div className="col-sm-12 col-lg-6 mt-1-9">
                            <div className="team-members">
                                <div className="team-members-img">
                                    <img alt="Matthew Pierce"
                                            src="imgs/content/about/matt-pierce.jpg" />
                                </div>
                                <div className="team-members-text">
                                    <h4>Matthew Pierce</h4>
                                    <span>Acoustic Guitar</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 mt-1-9">
                            <div className="team-members">
                                <div className="team-members-img">
                                    <img alt="Ed Gooding"
                                            src="imgs/content/about/ed-gooding.jpg" />
                                </div>
                                <div className="team-members-text">
                                    <h4>Ed Gooding</h4>
                                    <span>Bass Guitar</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 mt-1-9">
                            <div className="team-members">
                                <div className="team-members-img">
                                    <img alt="Shane Fowlkes"
                                            src="imgs/content/about/shane-fowlkes.jpg" />
                                </div>
                                <div className="team-members-text">
                                    <h4>Shane Fowlkes</h4>
                                    <span>Drums, Percussion</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-6 mt-1-9">
                            <div className="team-members">
                                <div className="team-members-img">
                                    <img alt="Joe"
                                            src="imgs/content/about/joe-revell.jpg" />
                                </div>
                                <div className="team-members-text">
                                    <h4>Joe Revell</h4>
                                    <span>Keyboards</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default AboutBandComponent;