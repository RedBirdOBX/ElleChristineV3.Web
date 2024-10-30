import React from 'react';
import { Link } from 'react-router-dom';

const AboutElleHomeComponent = (props) =>
{
    return (
            <section>
                <div className="container">
                    <div className="bg-white box-shadow-primary">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="text-center">
                                    <img src="imgs/content/home/about-elle.png"
                                            alt="Elle Christine" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <div className="p-1-6 p-md-1-9">
                                        <h2 className="mb-3">About Elle Christine</h2>
                                        <p className="w-95 mb-3">
                                            Elle Christine is a singer-songwriter based out of Richmond, Virginia.
                                            Her original musical creations, stories inspired by life events, connect with the general
                                            human experience – love, loss, and overcoming hardship.
                                            Vocals reminiscent of 90s female artists like Jewel and Alanis Morissette,
                                            Elle Christine’s five-piece project has transformed simplistic acoustic indie-folk music
                                            into a multifaceted sound integration – neo alternative indie-folk dipped in rock, groove, and soul.
                                            This lyrically charged music will make you feel like tapping your feet.
                                        </p>
                                        <Link to="/About"
                                            className="butn medium theme mt-4">
                                            <span>Read More</span>
                                        </Link>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
    );
};

export default AboutElleHomeComponent;